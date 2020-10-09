import React from "react";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <Tippy content={props.name} >
          <span className="emoji" role="img" aria-label={props.name} style={{ cursor: 'pointer' }} >
            {props.emoji}
          </span>
        </Tippy>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Emoji;
