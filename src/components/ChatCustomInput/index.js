import React from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicNoneIcon from "@mui/icons-material/MicNone";
import styles from "./ChatCustomInput.module.sass";

const ChatCustomInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inputLeft}>
        <input
          className={styles.input}
          type="text"
          name="message"
          placeholder="Start typing..."
        />
      </div>
      <div className={styles.container__inputRight}>
        <IconButton aria-label="mic">
          <MicNoneIcon className={styles.container__inputRight__mic} />
        </IconButton>

        <IconButton aria-label="emoj">
          <InsertEmoticonIcon className={styles.container__inputRight__emoj} />
        </IconButton>

        <IconButton aria-label="attach" style={{ "margin-right": "20px" }}>
          <AttachFileIcon className={styles.container__inputRight__attach} />
        </IconButton>

        <IconButton aria-label="send">
          <SendIcon className={styles.container__inputRight__send} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatCustomInput;
