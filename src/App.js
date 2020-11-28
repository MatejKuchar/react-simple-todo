import "./App.css";
import { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const [tweet, setTweet] = useState("");
  const name = "Matej Kuchar";
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aspernatur?";

  return (
    <div className="App">
      <CreateTweet></CreateTweet>
      <TweetList message={message} name={name} />
    </div>
  );
}

export default App;
