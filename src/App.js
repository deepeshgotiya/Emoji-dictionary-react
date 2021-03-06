import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "๐": "Happy",
  "๐ ": "Angry",
  "๐": "Heart",
  "๐": "Sad",
  "๐": "Dog",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Smiling Face with Open Hands",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Face in Clouds",
  "๐": "Smirking Face"
};
export default function App() {
  var emojisWeHave = Object.keys(emojiDictionary);
  var [meaning, setMeaning] = useState("");
  function meaningHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        placeholder="Enter an emoji here"
        onChange={meaningHandler}
      ></input>
      <div className="meaning">{meaning}</div>
      <div className="emoji-we-know">Emojis We Know</div>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            className="spantag"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
