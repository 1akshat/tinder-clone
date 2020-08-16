import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilePicture }) => {
  return (
    <Link to={`chat/${name}`}>
      <div className="chat">
        <Avatar className="chat-image" alt={name} src={profilePicture}></Avatar>
        <div className="chat-content">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat-timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
