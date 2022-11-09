import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";

const nav = [
  {
    url: "/profile",
    title: "Profile",
  },
  {
    url: "/faq",
    title: "Faq",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert("search");
  };

  const handleNews = (e) => {
    alert("news");
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/logo-icon.png"
            srcDark="/images/logo-icon.png"
            alt="Nowwa"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                activeClassName={styles.active}
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <Icon className="searchicon" name="search" size="28" />
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>Search</button>
          </form>
          <form className={styles.news} action="" onSubmit={() => handleNews()}>
            <div className={styles.newsicon}>
              <Icon className="searchicon" name="bulb" size="28" />
            </div>
            <button>News for you</button>
          </form>
        </div>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>

        <Notification className={styles.notification} />
        <User className={styles.user} />

        {/* <Link
          className={cn("button-small", styles.button)}
          to="/upload-variants"
        >
          Upload
        </Link> */}
        {/* <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/connect-wallet"
        >
          Connect Wallet
        </Link> */}
      </div>
    </header>
  );
};

export default Headers;
