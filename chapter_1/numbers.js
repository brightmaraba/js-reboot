/*
let radius = 10;
const pi = 3.14;

// Calculate Area
let area = pi * radius * radius;
console.log(area);

//math operators +, -, *, /, **, %
// Modulus
number = 23
let remainder = number % 2;
console.log(remainder)

// Order of operations
// BIDMAS - Bracket, Indices, Division, Multiplication, Substraction
let value = 5 * (10 - 3) ** 2;
console.log(value);

// Increment / Decrement
let likes = 2;
console.log(likes++);
console.log(likes--);
console.log(likes+=10);
console.log(likes-=5);
*/

const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

let result = "The blog called " + title + " by " + author + " has " + likes + " likes.";
console.log(result)
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2)
// HTML
let htmlCode = `
<h2> ${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} </span>
`;
console.log(htmlCode)