import "./App.css";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

import "./tailwind.generated.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <h1 className="text-red-500">Todo app</h1>
      <CreateTweet
        inputText={inputText}
        setInputText={setInputText}
        tweets={tweets}
        setTweets={setTweets}
      ></CreateTweet>
      <TweetList tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
