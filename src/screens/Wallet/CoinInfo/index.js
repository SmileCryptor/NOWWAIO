import React, { useState, useEffect } from "react";
import styles from "../Wallet.module.sass";
import CoinInfoItem from "../CoinInfoItem";
import ActivityInfoItem from "../ActivityItem";

const coinInfo = [
  {
    src: "/images/coins/btc.png",
    name: "Bitcoin",
    percent: "+2.16%",
    priceUsd: "$306.46",
    priceCoin: "0.0159277 BTC",
  },
  {
    src: "/images/coins/eth.png",
    name: "Ethereum",
    percent: "+3.56%",
    priceUsd: "$1306.60",
    priceCoin: "1 ETH",
  },
  {
    src: "/images/coins/bnb.png",
    name: "Bnb",
    percent: "-4.06%",
    priceUsd: "$56.46",
    priceCoin: "0.16 BNB",
  },
];
const activityInfo = [
  {
    type: "send",
    date: "2022/11/22",
    valueUsd: "$123",
    valueCoin: "1 BNB",
  },
  {
    type: "send",
    date: "2022/11/22",
    valueUsd: "$1500",
    valueCoin: "1.332 Eth",
  },
  {
    type: "receive",
    date: "2022/11/22",
    valueUsd: "$111000",
    valueCoin: "100.2548 BTC",
  },
];

const CoinInfo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.walletcontainer__details}>
      <div className={styles.walletcontainer__details__tabs}>
        <div
          className={
            activeTab === 0
              ? styles.walletcontainer__details__tabs__tabactive
              : styles.walletcontainer__details__tabs__tab
          }
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Tokens
        </div>
        <div
          className={
            activeTab === 1
              ? styles.walletcontainer__details__tabs__tabactive
              : styles.walletcontainer__details__tabs__tab
          }
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Activity
        </div>
      </div>

      <div className={styles.walletcontainer__details__list}>
        {activeTab === 0 ? (
          <>
            <CoinInfoItem data={coinInfo[0]} />
            <CoinInfoItem data={coinInfo[1]} />
            <CoinInfoItem data={coinInfo[2]} />
            <CoinInfoItem data={coinInfo[0]} />
            <CoinInfoItem data={coinInfo[1]} />
            <CoinInfoItem data={coinInfo[2]} />
          </>
        ) : (
          <>
            <ActivityInfoItem data={activityInfo[0]}></ActivityInfoItem>
            <ActivityInfoItem data={activityInfo[1]}></ActivityInfoItem>
            <ActivityInfoItem data={activityInfo[2]}></ActivityInfoItem>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinInfo;
