import React from "react";

export default function Quote(props) {
  return (
    <div
      id="wrapper"
      style={{ backgroundColor: props.color, transition: "2s" }}
    >
      <div id="quote-box">
        <div id="text" style={{ color: props.color, transition: "2s" }}>
          <p id="quote">
            <i className="fa fa-quote-left"></i> {props.quote}{" "}
            <i className="fa fa-quote-right"></i>
          </p>
        </div>
        <div id="author" style={{ color: props.color, transition: "2s" }}>
          <p id="author-text">- {props.author}</p>
        </div>
        <div id="buttons">
          <a
            id="tweet-quote"
            style={{ backgroundColor: props.color, transition: "2s" }}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://twitter.com/intent/tweet" + props.tweetURL}
            onClick={props.tweet}
          >
            <i className="fa fa-twitter"></i>
          </a>
          <button
            id="new-quote"
            style={{ backgroundColor: props.color, transition: "2s" }}
            onClick={props.generate}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
