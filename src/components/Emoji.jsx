import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <Tooltip
          title={props.name}
          placement="top"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          aria-label={props.name}
        >
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
        </Tooltip>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Emoji;
