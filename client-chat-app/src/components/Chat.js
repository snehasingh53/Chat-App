import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "./Messages";
import InputMsg from "./InputMsg";

let socket;

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:3002";

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setNickname(name);

    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    socket.emit("join", { nickname: name, room: "default" }, (error) => {
      if (error) {
        console.error(error);
      }
    });

    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("msgSend", message, () => setMessage(""));
    }
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="relative flex justify-center items-center bg-green-200 min-h-screen">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-600"
      >
        Logout
      </button>

      {/* Chat Window */}
      <div className="flex flex-col justify-between w-full max-w-4xl h-full p-4 bg-white rounded-lg shadow-lg">
        <div className="flex-1 overflow-y-scroll">
          <Messages messages={messages} nickname={nickname} />
        </div>
        <InputMsg
          message={message}
          setMessage={setMessage}
          sendMessage={handleMessageSubmit}
        />
      </div>
    </div>
  );
};

export default Chat;
