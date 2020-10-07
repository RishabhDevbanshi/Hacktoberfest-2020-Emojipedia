import React from "react";
import copy from "copy-to-clipboard";

export default function Emoji({ name, emoji, meaning }) {
  function copyEmoji(emoji) {
    copy(emoji);
    alert("emojis copied....");
  }

  return (
    <div className="term">
      <dt className="emoji-term">
        <span className="emoji" role="img" aria-label={name}>
          {emoji}
        </span>
      </dt>

      <dd>{meaning}</dd>
      <br />

      <button onClick={() => copyEmoji(emoji)} className="copy-emoji-btn">Copy Emoji</button>
    </div>
  );
}
