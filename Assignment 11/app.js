// Question 1
var num1 = parseFloat(prompt("Enter a positive integer:"));
console.log("Number:", num1);
console.log("Round off value:", Math.round(num1));
console.log("Floor value:", Math.floor(num1));
console.log("Ceil value:", Math.ceil(num1));

// Question 2
var num2 = parseFloat(prompt("Enter a negative floating point number:"));
console.log("Number:", num2);
console.log("Round off value:", Math.round(num2));
console.log("Floor value:", Math.floor(num2));
console.log("Ceil value:", Math.ceil(num2));

// Question 3
var num3 = parseFloat(prompt("Enter any number:"));
console.log("Absolute value:", Math.abs(num3));

// Question 4
var dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice value:", dice);

// Question 5
var toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin toss result:", toss);

// Question 6
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNumber);

// Question 7
var weight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
var parsedWeight = parseFloat(weight);
console.log("Your weight is:", parsedWeight, "kilograms");

// Question 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (1 to 10):"));
if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log("Sorry, the correct number was:", secretNumber);
}
