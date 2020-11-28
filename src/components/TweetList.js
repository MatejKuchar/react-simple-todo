import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet name={tweet.name} />;
      })}
    </div>
  );
};

export default TweetList;
