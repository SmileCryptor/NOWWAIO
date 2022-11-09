import React from "react";
import ChatMsgFrom from "../ChatMsgFrom";
import ChatMsgTo from "../ChatMsgTo";
import ChatImgFrom from "../ChatImgFrom";
import styles from "./ChatContent.module.sass";

const ChatContent = () => {
  return (
    <div className={styles.container}>
      <ChatMsgTo />
      <ChatMsgTo />
      <ChatImgFrom />
      <ChatMsgFrom />
      <ChatMsgFrom />
      <ChatMsgFrom />
      <ChatMsgTo />
      <ChatMsgFrom />
      <ChatMsgFrom />
    </div>
  );
};

export default ChatContent;
