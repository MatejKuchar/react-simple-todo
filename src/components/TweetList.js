import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, message }) => {
  return (
    <div>
      <Tweet message={message} name={name}></Tweet>
    </div>
  );
};

export default TweetList;
