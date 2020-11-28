import React from "react";

const Tweet = ({ name, message }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{message}</p>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
