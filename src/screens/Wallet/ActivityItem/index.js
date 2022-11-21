import React, { useState, useEffect } from "react";
import styles from "../Wallet.module.sass";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const ActivityInfoItem = (props) => {
  return (
    <div className={styles.walletcontainer__details__list__item}>
      {props.data.type === "send" ? (
        <NorthIcon
          className={styles.walletcontainer__details__list__item__icon}
        />
      ) : (
        <SouthIcon
          className={styles.walletcontainer__details__list__item__icon}
        />
      )}
      <div className={styles.walletcontainer__details__list__item__coininfo}>
        <p
          className={
            styles.walletcontainer__details__list__item__coininfo__label
          }
        >
          {props.data.type === "send" ? "Send" : "Receive"}
        </p>
        <p
          className={
            styles.walletcontainer__details__list__item__coininfo__percent
          }
        >
          {props.data.date}
        </p>
      </div>
      <div className={styles.walletcontainer__details__list__item__priceinfo}>
        <p
          className={
            styles.walletcontainer__details__list__item__priceinfo__priceusd
          }
        >
          {props.data.valueUsd}
        </p>
        <p
          className={
            styles.walletcontainer__details__list__item__priceinfo__pricecoin
          }
        >
          {props.data.valueCoin}
        </p>
      </div>
    </div>
  );
};

export default ActivityInfoItem;
