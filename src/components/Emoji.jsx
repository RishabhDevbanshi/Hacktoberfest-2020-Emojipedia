import React from "react";

function Emoji(props) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.emoji)
  }

  return (
    <div className="term is-relative">
      <div className="clipboard">
        <a onClick={copyToClipboard} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg></a>
      </div>
      <div class="emoji-content">
        <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </div>
  );
}

export default Emoji;