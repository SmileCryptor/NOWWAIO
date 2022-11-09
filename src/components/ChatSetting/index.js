import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageIcon from "@mui/icons-material/Image";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { Switch } from "@mui/material";
import styles from "./ChatSetting.module.sass";

const ChatSetting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <CloseIcon className={styles.container__title__close}></CloseIcon>
        <div className={styles.container__title}>Chat Settings</div>
      </div>

      <div className={styles.container__avatar}>
        <img src="/images/content/avatar-1.jpg" alt="Avatar" />
        <div className={styles.container__avatar__name}>Leo</div>
        <div className={styles.container__state}>Active</div>
        <div className={styles.container__date}>Since 2019</div>
      </div>

      <div className={styles.container__viewProfile}>
        <AccountCircleIcon className={styles.container__viewProfile__icon} />
        <span>View Profile</span>
      </div>

      <div className={styles.container__notification}>
        <div>
          <NotificationsNoneIcon
            className={styles.container__notification_icon}
          />
          <span>Notification</span>
        </div>
        <Switch />
      </div>

      <div className={styles.container__gallery}>
        <div className={styles.container__gallery__iconbox}>
          <ImageIcon className={styles.container__gallery__iconbox__icon} />
          <div className={styles.container__gallery__iconbox__title}>
            <span>Photos</span>
            <span>231</span>
          </div>
        </div>

        <div className={styles.container__gallery__button}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className={styles.container__gallery}>
        <div className={styles.container__gallery__iconbox}>
          <MovieFilterIcon
            className={styles.container__gallery__iconbox__icon}
          />
          <div className={styles.container__gallery__iconbox__title}>
            <span>Photos</span>
            <span>231</span>
          </div>
        </div>

        <div className={styles.container__gallery__button}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className={styles.container__gallery}>
        <div className={styles.container__gallery__iconbox}>
          <AttachmentIcon
            className={styles.container__gallery__iconbox__icon}
          />
          <div className={styles.container__gallery__iconbox__title}>
            <span>Photos</span>
            <span>231</span>
          </div>
        </div>

        <div className={styles.container__gallery__button}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatSetting;
