import React, { useState } from "react";
import FriendItem from "../Friend";
import styles from "./FriendList.module.sass";

const friendList = [
  {
    name: "Leo",
    avatar: "/images/content/avatar-1.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: false,
    state: "check",
    isActive: false,
  },
  {
    name: "Smith",
    avatar: "/images/content/avatar-2.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: true,
    state: "check",
    isActive: true,
  },
  {
    name: "Leonard",
    avatar: "/images/content/avatar-3.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: true,
    state: "doublecheck",
    isActive: true,
    currentSelect: true,
  },
  {
    name: "Jacky",
    avatar: "/images/content/avatar-4.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: false,
    state: "251",
    isActive: false,
  },
  {
    name: "Tom",
    avatar: "/images/content/avatar-5.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: false,
    state: "check",
    isActive: false,
  },
  {
    name: "TopDever",
    avatar: "/images/content/avatar-6.jpg",
    time: "00:33",
    lastMsg: "Why is it that players...",
    isTyping: false,
    state: "check",
    isActive: false,
  },
];

const FriendList = (props) => {
  const [list, setList] = useState(friendList);

  const itemClicked = (_index) => {
    let _list = list;
    _list.map((friend, index) => {
      if (_index === index) {
        friend.currentSelect = true;
      } else {
        friend.currentSelect = false;
      }
    });
    setList([..._list]);
    props.chatViewUpdate("single");
  };

  return (
    <>
      <div className={styles.container}>
        {list.map((friend, index) => {
          return (
            <FriendItem
              data={friend}
              key={index}
              index={index}
              itemClicked={itemClicked}
            />
          );
        })}
      </div>
    </>
  );
};

export default FriendList;
