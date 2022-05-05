
const circle = require('./circle.js');
const r = 4
console.log(`The area of a circle of radius ${r} is ${circle.area(r)}`);

//==
const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`)