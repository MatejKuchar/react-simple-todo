import React from "react";

const Tweet = ({ tweet, tweets, setTweets }) => {
  const delteTweet = () => {
    setTweets(tweets.filter((t) => t.id !== tweet.id));
  };

  return (
    <div>
      <p>{tweet.message}</p>
      <button onClick={delteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
