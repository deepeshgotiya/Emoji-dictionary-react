import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😀": "Happy",
  "😠": "Angry",
  "💖": "Heart",
  "😔": "Sad",
  "🐕": "Dog",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Face in Clouds",
  "😏": "Smirking Face"
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
