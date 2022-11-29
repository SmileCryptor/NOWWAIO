import React, { useState, useEffect } from "react";
import styles from "./ReceiveToken.module.sass";
import NowwaSelect from "../NowwaSelect";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Snackbar from "@mui/material/Snackbar";
import Modal from "@mui/material/Modal";
import QRCode from "react-qr-code";
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
  const [amount, setAmount] = useState(0.0);
  return (
    <div className={styles.step}>
      <div className={styles.step__title}>
        <p>Amount</p>
        <ArrowBackIosNewIcon
          className={styles.step__title__prev}
          onClick={() => {
            props.onPrevStep();
          }}
        ></ArrowBackIosNewIcon>
      </div>

      <div className={styles.step__tokenSelect}>
        <NowwaSelect startDecorator={true} data={coinInfo} />
      </div>

      <input
        type="text"
        placeholder="Input Amount"
        className={styles.step_amountInput}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      ></input>

      <div className={styles.step__usdValue}>
        <p>$55.99312</p>
        <SwapVertIcon />
      </div>

      <button
        className={cn("button-stroke", styles.btn)}
        onClick={() => {
          props.onNextStep();
        }}
        style={{ "margin-top": "50px" }}
      >
        Next
      </button>
    </div>
  );
};

const Step2 = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openQR, setOpenQR] = useState(false);
  return (
    <div className={styles.step}>
      <CurrencyExchangeIcon className={styles.step__linkImg} />
      <p className={styles.step__linkLabel}>Send Link</p>
      <p className={styles.step__linkDescription}>
        Your request link is already to send!
      </p>
      <p className={styles.step__linkDescription}>
        Send this link to a friend and it will ask them to send 0.0001ETH
      </p>

      <p className={styles.step__link}>
        https://nowwaio.com/send/0xBBB6A12945AC14C9432A15C56D2EAE94/value=21lp
      </p>

      <div className={styles.row}>
        <p
          className={styles.step__linkCopy}
          onClick={() => {
            setOpenSnackbar(true);
            setTimeout(() => {
              setOpenSnackbar(false);
            }, 3000);
          }}
        >
          Copy Link
        </p>
        <p
          className={styles.step__linkCopy}
          onClick={() => {
            setOpenQR(true);
          }}
        >
          QR code
        </p>
      </div>

      <button
        className={cn("button-stroke", styles.btn)}
        style={{ "margin-top": "50px" }}
      >
        Next
      </button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={openSnackbar}
        message="Link copied to clipboard"
      />
      <Modal
        open={openQR}
        onClose={() => {
          setOpenQR(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.modal__title}>
            <p>Payment request QR Code</p>
          </div>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={
              "https://nowwaio.com/send/0xBBB6A12945AC14C9432A15C56D2EAE94/value=21lp"
            }
            viewBox={`0 0 256 256`}
            bgColor="#23262F"
            fgColor="#ffffff"
          />
        </div>
      </Modal>
    </div>
  );
};

const WalletReceiveToken = (props) => {
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
    </div>
  );
};

export default WalletReceiveToken;
