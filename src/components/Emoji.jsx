import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <div className="tooltip">
          <span className="tooltiptext">{props.name}</span>
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
        </div>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Emoji;
