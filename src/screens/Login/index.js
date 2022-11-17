import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Login.module.sass";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__column}>
        <div className={styles.login__title}>Log In</div>
        <div className={styles.login__inputbox}>
          <input type="text" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Password" />
        </div>
        <div className={styles.login__btn}>
          <button className={cn("button-stroke", styles.button)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
