/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * This is just storing the quotes.
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
 * then pulls that object out of the quotes away. Avoids generating the same quote twice in a row.
 *
 * @return {quotes[rand]} The random quote object.
 */

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  
  let rand = Math.floor(Math.random() * quotes.length);
  
  // If we picked the same random number as last time, pick again. This avoids showing the same quote twice in a row.
  while (rand===lastRand) {
    rand = Math.floor(Math.random() * quotes.length);
  }
  lastRand = rand;
  

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  return quotes[rand];

  // 3. Return the variable storing the random quote object
}
//testing if getRandomQuote() works
//console.log(getRandomQuote());

/***
 * `printQuote` function
 * Constructs a formatted string with the components of the selected quote.
 * Sets innerHTML to the entire quote string.
 *
 */
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let quoteObject = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  let quoteString = `<p class = "quote">${quoteObject.quote}</p><p class = "source">${quoteObject.source}`;

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (quoteObject.citation) {
    quoteString += `<span class="citation">${quoteObject.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (quoteObject.year) {
    quoteString += `<span class="year">${quoteObject.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  quoteString += `</p>`

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = quoteString; 

}

  
 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);