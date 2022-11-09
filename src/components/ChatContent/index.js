import React from "react";
import ChatMsgFrom from "../ChatMsgFrom";
import ChatMsgTo from "../ChatMsgTo";
import styles from "./ChatContent.module.sass";

const ChatContent = () => {
  return (
    <div className={styles.container}>
      <ChatMsgTo />
      <ChatMsgTo />
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
