import React from "react";

export default function Emoji({ name, emoji, meaning }) {
  return (
    <div className="term">
      <dt className="emoji-term">
        <span className="emoji" role="img" aria-label={name}>
          {emoji}
        </span>
      </dt>

      <dd>{meaning}</dd>
    </div>
  );
}
