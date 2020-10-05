import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

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

function App() {
  let [results, setResults] = useState(emojipedia);

  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <div className="searchbox">
        <ReactSearchBox
          placeholder="Search for an Emoji..."
          onChange={(value) => {
            let regExp = new RegExp(value, "gi");
            setResults(
              emojipedia.filter((element) => regExp.test(element.name))
            );
          }}
          fuseConfigs={{
            threshold: 0.05,
          }}
        />
      </div>
      <div style={{ margin: "4rem" }}>
        <dl className="dictionary">{results.map(createEmoji)}</dl>
      </div>
    </div>
  );
}

export default App;
