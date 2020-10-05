import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";


export default function App() {
  const [results, setResults] = useState(emojipedia);

  return (
    <div className="container">
      <div className="title">
        <h1>Emojipedia</h1>
      </div>

      <div className="searchbox">
        <ReactSearchBox
          placeholder="Search for an Emoji..."
          onChange={value => {
            let regExp = new RegExp(value, "gi");
            setResults(emojipedia.filter(element => regExp.test(element.name)));
          }}
          fuseConfigs={{
            threshold: 0.05,
          }}
        />
      </div>

      <dl className="dictionary">
        {results.map(createEmoji)}
      </dl>
    </div>
  );
}

function createEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}
