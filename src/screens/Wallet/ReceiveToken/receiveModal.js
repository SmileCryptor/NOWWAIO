import React, { useState, useEffect } from "react";
import styles from "./ReceiveToken.module.sass";
import Snackbar from "@mui/material/Snackbar";
import Modal from "@mui/material/Modal";
import QRCode from "react-qr-code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import cn from "classnames";

const ReceiveModal = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [amount, setAmount] = useState(0.0);

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        padding: "15px",
      }}
    >
      <div className={styles.step__title}>
        <p>Receive</p>
      </div>

      <QRCode
        size={220}
        value={
          "https://nowwaio.com/send/0xBBB6A12945AC14C9432A15C56D2EAE94/value=21lp"
        }
        viewBox={`0 0 220 220`}
        bgColor="#11141B"
        fgColor="#ffffff"
      />

      <p className={styles.step__subdesc}>Scan address to receive payment</p>

      <div className={styles.step__subbtnbox}>
        <div
          className={styles.step__subbtn}
          onClick={() => {
            navigator.clipboard.writeText("0x3Dc6A12945AC14C9432A15C56DDfCE");
            setOpenSnackbar(true);
            setTimeout(() => {
              setOpenSnackbar(false);
            }, 3000);
          }}
        >
          <p style={{ "margin-right": "10px" }}>0x3Dc6..DfCE</p>
          <ContentCopyIcon className={styles.step__subbtn__img} />
        </div>

        <div className={styles.step__subbtn}>
          <ShareIcon className={styles.step__subbtn__img} />
        </div>
      </div>

      <button
        className={cn("button-yellow", styles.btn)}
        onClick={() => {
          props.onNextStep();
        }}
        style={{ "margin-top": "50px" }}
      >
        Request Payment
      </button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={openSnackbar}
      >
        <div className={styles.step__subbtn}>
          <p style={{ "margin-right": "10px" }}>Link copied to clipboard!</p>
          <ContentCopyIcon className={styles.step__subbtn__img} />
        </div>
      </Snackbar>
    </div>
  );
};

export default ReceiveModal;
