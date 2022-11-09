import React from "react";
import ChatCustomInput from "../ChatCustomInput";
import ChatInputState from "../ChatInputState";
import { IconButton } from "@mui/material";
import styles from "./ChatInput.module.sass";

const ChatInput = () => {
  return (
    <>
      <ChatInputState />
      <ChatCustomInput />
    </>
  );
};

export default ChatInput;
