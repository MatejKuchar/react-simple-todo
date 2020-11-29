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
          className="bg-gray-500 rounded shadow-xl p-4 focus:outline-none  text-gray-100 placeholder-gray-300"
          value={inputText}
          onChange={inputHandler}
          id=""
          cols="30"
          rows="20"
          placeholder="add text..."
        ></textarea>
        <br />
        <button className="bg-green-500 px-3 py-2 focus:outline-none font-semibold rounded text-gray-100	border-b-2 border-green-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTweet;
