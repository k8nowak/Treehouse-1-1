/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
 * This is just storing the quotes.
 * 'quote' and 'source' are mandatory
 * 'citation' and 'year' are optional
***/
const quotes = [
  {
    quote: "Have fun storming the castle!",
    source: "Miracle Max"
  },
  {
    quote: "I\’m not a witch, I\’m your wife!",
    source: "Valerie"
  },
  {
    quote: "Anybody want a peanut?",
    source: "Fezzik",
    citation: "The Princess Bride"
  },
  {
    quote: "You keep using that word. I do not think it means what you think it means.",
    source: "Inigo",
    year: "1987"
  },
  {
    quote: "Life is pain, Highness. Anyone who says differently is selling something.",
    source: "Man in Black"
  },
  {
    quote: "Is this a kissing book?",
    source: "Grandson"
  },
  {
    quote: "I will never love again.",
    source: "Princess Buttercup"
  },
  {
    quote: "Do you want me to send you back to where you were? Unemployed? In Greenland!",
    source: "Vizzini"
  },
]
let lastRand = 0;

/***
 * `getRandomQuote` function
 * Generates a random number between 0 and the length of the quotes array,
 * then pulls that object out of the quotes array. Avoids generating the same quote twice in a row.
 *
 * @return {quotes[rand]} The random quote object.
 */

function getRandomQuote() {

  let rand = Math.floor(Math.random() * quotes.length);
  
  // If we picked the same random number as last time, pick again. This avoids showing the same quote twice in a row.
  while (rand===lastRand) {
    rand = Math.floor(Math.random() * quotes.length);
  }
  lastRand = rand;

  return quotes[rand];

}


/***
 * `printQuote` function
 * Constructs a formatted string with the components of the selected quote.
 * Sets innerHTML to the entire quote string.
 *
 */
function printQuote() {

  let quoteObject = getRandomQuote();

  // start building the quote string
  let quoteString = `<p class = "quote">${quoteObject.quote}</p><p class = "source">${quoteObject.source}`;

  //check if it has a citation and a year, and append these if they exist
  if (quoteObject.citation) {
    quoteString += `<span class="citation">${quoteObject.citation}</span>`;
  }

  if (quoteObject.year) {
    quoteString += `<span class="year">${quoteObject.year}</span>`;
  }

  quoteString += `</p>`

  // set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = quoteString; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);