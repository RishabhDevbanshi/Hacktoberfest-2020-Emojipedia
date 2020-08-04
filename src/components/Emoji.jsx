import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Emoji;
