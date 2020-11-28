import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} name={tweet.name} />;
      })}
    </div>
  );
};

export default TweetList;
