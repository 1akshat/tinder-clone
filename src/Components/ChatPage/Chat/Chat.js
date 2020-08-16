import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilePicture }) => {
  return (
    <div className="chat">
      <Avatar className="chat-image" alt={name} src={profilePicture}></Avatar>
      <div className="chat-content">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat-timestamp">{timestamp}</p>
    </div>
  );
};

export default Chat;
