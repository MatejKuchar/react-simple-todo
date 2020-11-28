import React from "react";

const Tweet = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
