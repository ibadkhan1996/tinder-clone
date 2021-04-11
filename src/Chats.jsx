import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Ibad"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Kkhan"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Ubaid"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
