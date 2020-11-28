import "./App.css";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const [tweets, setTweets] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <h1>Todo app</h1>
      <CreateTweet
        inputText={inputText}
        setInputText={setInputText}
        tweets={tweets}
        setTweets={setTweets}
      ></CreateTweet>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;
