import React from "react";
import { v4 as uuid } from "uuid";

const CreateTweet = ({ tweets, setTweets, inputText, setInputText }) => {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTweets([...tweets, { message: inputText, id: uuid() }]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={inputHandler}
          id=""
          cols="30"
          rows="20"
          placeholder="add text..."
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTweet;
