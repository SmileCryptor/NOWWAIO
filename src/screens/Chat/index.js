import React, { useEffect, useState } from "react";
import Leftbar from "../../components/Leftbar";
import MessageList from "../../components/MessageList";
import ChatList from "../../components/ChatList";
import GroupChatList from "../../components/GroupChatList";
import styles from "./Chat.module.sass";
import Box from "@mui/material/Box";

const Chat = () => {
  const [isGroupChat, setIsGroupChat] = useState(false);

  useEffect(() => {
    const msgFromList = document.querySelectorAll("#chatMsgFrom");

    for (let i = 0; i < msgFromList.length; i++) {
      const element = msgFromList[i];
      element.addEventListener("mouseover", () => {
        const children = element.children;
        for (let j = 0; j < children.length; j++) {
          const child = children[j].children;
          for (let k = 0; k < child.length; k++) {
            const grandChild = child[k];
            if (grandChild.getAttribute("label") === "edit") {
              grandChild.style.display = "";
            }
          }
        }
      });
      element.addEventListener("mouseout", () => {
        const children = element.children;
        for (let j = 0; j < children.length; j++) {
          const child = children[j].children;
          for (let k = 0; k < child.length; k++) {
            const grandChild = child[k];
            if (grandChild.getAttribute("label") === "edit") {
              grandChild.style.display = "none";
            }
          }
        }
      });
    }
  }, []);

  const chatViewUpdate = (viewName) => {
    if (viewName === "group") {
      setIsGroupChat(true);
    } else {
      setIsGroupChat(false);
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
      const chatEl = document.querySelector("#chatList");
      chatEl.style.display = "flex";
      const msgListEl = document.querySelector("#messageList");
      msgListEl.style.display = "none";
    } else {
      const chatEl = document.querySelector("#chatList");
      chatEl.style.display = "flex";
      const msgListEl = document.querySelector("#messageList");
      msgListEl.style.display = "flex";
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>
          <Box className={styles.container__column_left}>
            <Leftbar />
          </Box>
          <Box id="messageList" className={styles.container__column_messages}>
            <MessageList chatViewUpdate={chatViewUpdate} />
          </Box>
          <Box id="chatList" className={styles.container__column_chat}>
            {isGroupChat ? <GroupChatList /> : <ChatList />}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Chat;
