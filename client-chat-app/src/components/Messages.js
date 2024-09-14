import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, nickname }) => (
  <ScrollToBottom style={{ padding: "5% 0", overflow: "auto", flex: "auto" }}>
    <div>
      {messages.length === 0 && <p>No messages yet.</p>} {/* Show a placeholder if no messages */}
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} nickname={nickname} />
        </div>
      ))}
    </div>
  </ScrollToBottom>
);

export default Messages;
