import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = ({ backButton }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Neeta",
      image:
        "https://castyou-website.sgp1.digitaloceanspaces.com/2019/10/neeta-shetty.jpg",
      message: "Whats up 💖",
    },
    {
      name: "Neeta",
      image:
        "https://castyou-website.sgp1.digitaloceanspaces.com/2019/10/neeta-shetty.jpg",
      message: "How is it going? ",
    },
    { message: "Hi! How are you Neeta? " },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chat-screen">
      <p className="chat-screen-disclaimer">
        YOU MATCHED WITH NEETA ON 10/8/20
      </p>
      {messages.map((message) =>
        message.name && message.image ? (
          <div className="chat-screen-message">
            <Avatar
              className="chat-screen-avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chat-screen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen-message">
            <p className="chat-screen-my-text">{message.message}</p>
          </div>
        )
      )}
      <form className="chat-screen-input">
        <input
          className="chat-screen-input-field"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chat-screen-input-button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
