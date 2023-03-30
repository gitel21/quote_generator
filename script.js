const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const timeText = document.getElementById('time');
const loader = document.getElementById('loader');

// Show Loading
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Get Quote
const newQuote = () => {
    loading();
    // Pick a random quote from a quote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is black and replace it with "Unknown"
    if (!quote.author) {
        authorText.textContent = "-- " + "Unknown Author";
    } else {
        authorText.textContent = "-- " + quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 400) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;   
    complete();
}

// Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_black');
}

const getTime = () => {
    timeText.textContent = Date();
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getTime();
newQuote();
