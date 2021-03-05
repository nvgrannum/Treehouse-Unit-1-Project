/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'What',
    source: 'me',
    citation: 'my head',
    year: 1993
  },
  {
    quote: 'who',
    source: 'me'
  },
  {
    quote: 'why',
    source: 'me'
  },
  {
    quote: 'Dont judge me',
    source: 'You'
  },
  {
    quote: 'But I am already judging',
    source: 'me'
  },
  {
    quote: 'Once upon a time',
    source: 'every childrens book ever'
  },
  {
    quote: 'I will get a good grade in therapy. This is something both reasonable to want and possible to achieve',
    source: 'some random person'
  }
  
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
}

/***
 * `printQuote` function
***/

function printQuote() { `
  <p class="quote"></p>
  <p class="source"></p>

`
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
