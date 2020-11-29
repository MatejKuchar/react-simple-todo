import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            tweets={tweets}
            tweet={tweet}
            setTweets={setTweets}
          />
        );
      })}
    </div>
  );
};

export default TweetList;
