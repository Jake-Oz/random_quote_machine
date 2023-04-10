import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function App() {
  let [quote, setQuote] = useState(" ");
  let [author, setAuthor] = useState(" ");
  let [color, setColor] = useState("#16a085");
  let [quoteArray, setQuoteArray] = useState([]);

  const quoteURL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const colors = [
    "#F5B19C",
    "#EDCABE",
    "#E9B666",
    "#BFD0CA",
    "#A5B2B5",
    "#0F4C81",
    "#5C9090",
    "#292643",
    "#776483",
    "#44426E",
    "#BBAAB8",
    "#73A857",
  ];

  // fetch quotes once and assign them to a local state array
  function getQuotes() {
    fetch(quoteURL)
      .then((response) => response.json())
      .then((data) => {
        setQuoteArray(data.quotes);
      })
      .catch((error) => {
        // handle the error
        console.log(error);
      });
  }

  // Use the useEffect here so that the fetch doesn't happen everytime state changes
  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quoteArray.length > 0) {
      generateNewQuote();
    }
  }, [quoteArray]);

  // update the quote when the button is clicked
  function generateNewQuote() {
    let index = Math.floor(Math.random() * quoteArray.length);
    let newColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[newColorIndex]);
    setQuote(quoteArray[index].quote);
    setAuthor(quoteArray[index].author);
  }

  let [tweetURL, setTweetURL] = useState("");
  function tweet() {
    setTweetURL(
      "?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + quote + '" ' + author)
    );
  }

  return (
    <div>
      <Quote
        quote={quote}
        author={author}
        generate={generateNewQuote}
        color={color}
        tweet={tweet}
        tweetURL={tweetURL}
      />
    </div>
  );
}

export default App;
