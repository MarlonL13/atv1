const prompt = require("prompt-sync")();

// Question 1
console.log("Hello World");

// Question 2
const num = prompt("Please type a number: ");
console.log(`The typed number was ${num}`);

// Question 3
const sumNum1 = Number(prompt("Please type the first number: "));
const sumNum2 = Number(prompt("Please type the second number: "));
sum = sumNum1 + sumNum2;
console.log(`The sum of both numbers is ${sum}`);

// Question 4
let tests = 4;
let avg = 0;

for (let i = 0; i < tests; i++) {
  avg += Number(prompt(`Type the score ${i + 1} of the test: `));
}

avg = avg / tests;
console.log(`The avg score of the student is: ${avg}`);

// Question 5
let convert = Number(
  prompt("Type how many meter's do you wish to convert to cm: ")
);
convert = convert * 100;
console.log(`Your number in centimeters is ${convert}cm`);

// Question 6
const radius = Number(prompt("Type the radius of a circle: "));
const circleArea = Math.PI * radius ** 2;
console.log(`The area of the circle is ${circleArea.toFixed(3)}`);

// Question 7
const side = Number(prompt("Type the size of the side of a square: "));
const squareArea = side ** 2;
console.log(
  `The area of the square is ${squareArea} and the double of this are is ${
    squareArea * 2
  }`
);

// Question 8
const hourWage = Number(prompt("Type your hourly wage: "));
const hours = Number(prompt("Type the amout of hours you work per month: "));
const monthWage = hourWage * hours;
console.log(`Your monthly wage was $${monthWage}`);

// Question 9
const tempF = Number(prompt("Type the temperature in °F: "));
const tempFtoC = 5 * ((tempF - 32) / 9);
console.log(`The temperature in °C is : ${tempFtoC.toFixed(2)}°C`);

//Question 10
let tempCtoF = Number(prompt("Type the temperature in C°: "));
tempCtoF = tempCtoF * 1.8 + 32;
console.log(`The temperature in °F is : ${tempCtoF.toFixed(2)}°F`);
