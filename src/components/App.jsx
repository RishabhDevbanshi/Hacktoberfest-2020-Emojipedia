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
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div> */}
      </dl>
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
      <div style={{ margin: '4rem' }}>

        <dl className="dictionary">
          {results.map(createEmoji)}
        </dl>
      </div>
    </div>
  );
}

export default App;
