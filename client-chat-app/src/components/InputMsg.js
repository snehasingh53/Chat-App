import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Using react-icons for the send icon

const InputMsg = ({ setMessage, sendMessage, message }) => {
  return (
    <div className="flex items-center justify-center bg-coral p-4">
      <div className="flex items-center w-full max-w-lg bg-white rounded-full shadow-md p-2">
        <input
          className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none"
          placeholder="Type your thoughts here...."
          aria-label="type message"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
          value={message}
        />
        <button
          className="ml-2 p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-200"
          aria-label="send"
          onClick={(e) => sendMessage(e)}
        >
          <FaPaperPlane className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default InputMsg;
