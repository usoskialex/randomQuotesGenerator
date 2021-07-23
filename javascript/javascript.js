let quotes = ["Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
    "Magic is believing in yourself, if you can do that, you can make anything happen. – Johann Wolfgang von Goethe",
    "All our dreams can come true, if we have the courage to pursue them. – Walt Disney",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Don’t wish it were easier. Wish you were better. ― Jim Rohn",
    "The secret of change is to focus all of your energy, not on fighting the old, but on building the new – Socrates",
    "Setting goals is the first step into turning the invisible into the visible. – Tony Robbins",
    "If you don’t like something, change it. If you can’t change it, change your attitude. – Maya Angelou",
    "Decide upon your major definite purpose in life and then organize all your activities around it. – Brian Tracy",
    " Becoming strong doesn’t start in the gym. It starts in your head.",
    "Try not to become a person of success, but rather try to become a person of value. – Albert Einstein",
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want. – Zig Ziglar",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle"
]

let quoteDisplay = document.querySelector(".quotes-container");
let showQuoteButton = document.querySelector(".button-quotes");

function quotesSelector() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

function showQuote() {
    quoteDisplay.innerHTML = quotesSelector();

}
showQuoteButton.addEventListener('click', showQuote);