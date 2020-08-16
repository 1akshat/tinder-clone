import React from "react";
import "./ChatPage.css";
import Chat from "./Chat/Chat";

const ChatPage = () => {
  return (
    <div className="chats">
      <Chat
        name="Neeta"
        message="Oops! I am caught up 🙄"
        timestamp="5 sec ago"
        profilePicture="https://castyou-website.sgp1.digitaloceanspaces.com/2019/10/neeta-shetty.jpg"
      />
      <Chat
        name="Julia"
        message="hey! Going for a Ride? 🚗"
        timestamp="32 sec ago"
        profilePicture="https://www.giantmanagement.com/wp-content/uploads/2017/09/natasha_thumbnail-650x813.jpg"
      />
      <Chat
        name="Maria"
        message="hey! Whats up? 😄"
        timestamp="40 min ago"
        profilePicture="https://www.wonderslist.com/wp-content/uploads/2019/07/Doutzen-Kroes-Highest-Paid-Models.jpg"
      />
      <Chat
        name="Mia"
        message="I was out somewhere."
        timestamp="3 days ago"
        profilePicture="https://modelsonly.in/wp-content/uploads/2019/09/8-2-480x580_t.jpeg"
      />
    </div>
  );
};

export default ChatPage;
