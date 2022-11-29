import React, { useState, useEffect } from "react";
import styles from "./SendToken.module.sass";
import NowwaSelect from "../NowwaSelect";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import TextField from "@mui/joy/TextField";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import cn from "classnames";

const walletAddress = [
  {
    sd_src: "/images/content/avatar-1.jpg",
    value: "0xbb56....2254",
  },
  {
    sd_src: "/images/content/avatar-1.jpg",
    value: "0x56gc....23dt",
  },
];

const coinInfo = [
  {
    sd_src: "/images/coins/btc.png",
    value: "Bitcoin",
    priceUsd: "$306.46",
    priceCoin: "0.0159277 BTC",
  },
  {
    sd_src: "/images/coins/eth.png",
    value: "Ethereum",
    percent: "+3.56%",
    priceUsd: "$1306.60",
    priceCoin: "1 ETH",
  },
  {
    sd_src: "/images/coins/bnb.png",
    value: "Bnb",
    percent: "-4.06%",
    priceUsd: "$56.46",
    priceCoin: "0.16 BNB",
  },
];

const Step1 = (props) => {
  return (
    <div className={styles.walletcontainer}>
      <p className={styles.walletcontainer__title}>Send To</p>

      <div className={styles.walletcontainer__address}>
        <NowwaSelect label="From" startDecorator={true} data={walletAddress} />
      </div>
      <div className={styles.walletcontainer__address}>
        <p className={styles.walletcontainer__address__caption}>To</p>
        <TextField
          size="lg"
          variant="solid"
          placeholder="Search, public address(0x), or ENS"
          startDecorator={
            <img
              className={styles.walletcontainer__address__img}
              src="/images/content/avatar-1.jpg"
              alt="Avatar"
            />
          }
          sx={{
            div: {
              background: "#23262F",
            },
            background: "#23262F",
            "border-radius": "6px",
          }}
        ></TextField>
      </div>
      <button
        className={cn("button-stroke", styles.btn)}
        onClick={() => {
          props.onNextStep();
        }}
        style={{ "margin-top": "150px" }}
      >
        Next
      </button>
    </div>
  );
};

const Step2 = (props) => {
  return (
    <div className={styles.walletcontainer}>
      <div className={styles.walletcontainer__title}>
        <p>Amount</p>
        <ArrowBackIosNewIcon
          className={styles.walletcontainer__title__prev}
          onClick={() => {
            props.onPrevStep();
          }}
        ></ArrowBackIosNewIcon>
      </div>

      <div className={styles.walletcontainer__info}>
        <div className={styles.walletcontainer__info__coin}>
          <NowwaSelect data={coinInfo} startDecorator={true} />
        </div>

        <div className={styles.walletcontainer__info__price}>
          <p>70.42ETH</p>
          <p>$121.33</p>
        </div>
      </div>

      <div className={styles.walletcontainer__amount}>
        <input
          type="text"
          placeholder="Input Amount"
          className={styles.walletcontainer__amountInput}
        ></input>
      </div>

      <div className={styles.walletcontainer__usdValue}>
        <p>$55.99312</p>
        <SwapVertIcon />
      </div>

      <button
        className={cn("button-stroke", styles.btn)}
        onClick={() => {
          props.onNextStep();
        }}
        style={{ "margin-top": "150px" }}
      >
        Next
      </button>
    </div>
  );
};

const Step3 = (props) => {
  return (
    <div className={styles.walletcontainer}>
      <div className={styles.walletcontainer__title}>
        <p>Confirm</p>
        <ArrowBackIosNewIcon
          className={styles.walletcontainer__title__prev}
          onClick={() => {
            props.onPrevStep();
          }}
        ></ArrowBackIosNewIcon>
      </div>

      <div className={styles.walletcontainer__amount}>0.125 BTC</div>

      <div className={styles.walletcontainer__address}>
        <p className={styles.walletcontainer__address__caption}>From</p>
        <TextField
          size="lg"
          variant="solid"
          placeholder="Search, public address(0x), or ENS"
          startDecorator={
            <img
              className={styles.walletcontainer__address__img}
              src="/images/content/avatar-1.jpg"
              alt="Avatar"
            />
          }
          sx={{
            div: {
              background: "#23262F",
            },
            background: "#23262F",
            "border-radius": "6px",
          }}
          value="0x4fd4....89u3"
        ></TextField>
      </div>

      <div className={styles.walletcontainer__address}>
        <p className={styles.walletcontainer__address__caption}>To</p>
        <TextField
          size="lg"
          variant="solid"
          placeholder="Search, public address(0x), or ENS"
          startDecorator={
            <img
              className={styles.walletcontainer__address__img}
              src="/images/content/avatar-1.jpg"
              alt="Avatar"
            />
          }
          sx={{
            div: {
              background: "#23262F",
            },
            background: "#23262F",
            "border-radius": "6px",
          }}
          value="0x56d4....3dff"
        ></TextField>

        <div className={styles.walletcontainer__review}>
          <div className={styles.row}>
            <p>Amount</p>
            <p>0.0125BTC</p>
          </div>
          <div className={styles.row}>
            <div className={styles.walletcontainer__review__item}>
              <p>Network Fee</p>
              <p className={styles.walletcontainer__review__edit}>Edit</p>
            </div>
            <p>0.000024BTC</p>
          </div>
          <div className={styles.row}>
            <p className={styles.walletcontainer__review__largeItem}>
              Total Amount
            </p>
            <div>
              <p className={styles.walletcontainer__review__largeItem}>
                0.0125BTC
              </p>
              <p style={{ "text-align": "right" }}>$0.558432</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className={cn("button-stroke", styles.btn)}
        onClick={() => {}}
        style={{ "margin-top": "30px" }}
      >
        Send
      </button>
    </div>
  );
};

const WalletSendToken = (props) => {
  const [step, setStep] = useState(0);
  return (
    <div className={styles.wallet}>
      {step === 0 && (
        <Step1
          onNextStep={() => {
            setStep(1);
          }}
        />
      )}
      {step === 1 && (
        <Step2
          onNextStep={() => {
            setStep(2);
          }}
          onPrevStep={() => {
            setStep(0);
          }}
        />
      )}
      {step === 2 && (
        <Step3
          onPrevStep={() => {
            setStep(1);
          }}
        />
      )}
    </div>
  );
};

export default WalletSendToken;
