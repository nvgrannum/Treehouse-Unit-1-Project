/*** I am trying for Exceeds Expectation. If this does not meet that requirement, please reject so I can try again, thank you!
***/

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * An array of different quotes. Each quote is an object containing at least a quote and source. A few will have some combination of citation, year, and catetory. 
***/

let quotes = [
  {
    quote: 'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.',
    source: 'Audre Lorde',
    citation: 'A Burst of Light',
    year: 1988,
    category: '#Self-Care'
  },
  {
    quote: "If people are doubting how far you can go, go so far that you can't hear them anymore.",
    source: 'Michele Ruiz',
    category: '#Motivation'
  },
  {
    quote: 'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.',
    source: 'Henry David Thoreau'
  },
  {
    quote: 'Never forget who you are. The rest of the world will not. Wear it like armor and it can never be used to hurt you.',
    source: 'Tyrion Lanister',
    citation: 'Game of Thrones S01E05',
    year: 2011,
    category: "#TV Show"
  },
  {
    quote: "It always seems impossible until it's done",
    source: 'Nelson Mandela'
  },
  {
    quote: "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    source: 'Mark Twain',
  },
  {
    quote: "I'm going to get a good grade in therapy, something that is both normal to want and possible to achieve.",
    source: 'Sara McHenry',
    citation: 'Twitter @yellowcardigan',
    year: 2019
  }
  
];


/***
 * The 'getRandomQuote' function generates a random number from 0 to the max index value (which is one less than the array length). It takes this generated number and returns the object with that index number from the quotes array above.
***/


function getRandomQuote(arr) {
  let randNum = Math.floor(Math.random() * ( arr.length ));
  let randQuote = arr[randNum];
  return randQuote;
}
/***
  Random rgb function gets 3 random numbers and inputs them to the red, green, and blue values, respectively in the RGB color code for the background.
***/

function random_rgb() {
  const r = Math.floor(Math.random()*255) +1;
  const g = Math.floor(Math.random()*255) +1;
  const b = Math.floor(Math.random()*255) +1;
  const rgb = `rgb(${r},${g},${b})`;
  return rgb; 
}

/***
 * `printQuote` function takes the object from the getRandomQuote function and displays it on the page with a generated string.
***/

function printQuote() { 
  let quotation = getRandomQuote(quotes);
  let html = `
  <p class="quote">${quotation["quote"]}</p>
  <p class="source">${quotation["source"]}
  `;
    if (quotation.citation) {
      html += `,<span class="citation">  ${quotation["citation"]}</span>`
    }
    if (quotation.year) {
      html += `,<span class="year">  ${quotation["year"]}</span>`;
    }
    if (quotation.category) {
      html += ` <br><span class="year">${quotation["category"]}</span>`;
    }
  html += `</p>`;
 
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = random_rgb();  

}
setInterval(printQuote,10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
