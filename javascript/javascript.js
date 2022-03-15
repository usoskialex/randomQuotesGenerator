let quoteDisplay = document.querySelector(".quotes-container");

let showQuoteButton = document.querySelector(".button-quotes");

//function that displays randomised quotes from API
function quotesSelector() {
  //fetching random quotes from API and display it in the quote field
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteDisplay.innerHTML = result.content;
    });
}

showQuoteButton.addEventListener("click", quotesSelector);
