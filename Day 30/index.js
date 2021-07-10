var readlineSync = require('readline-sync');

var userName = readlineSync.question('Give me your name ');
// console.log(userName); // Ctrl + / Cmd + /

var welcomeMessage = "Welcome " + userName; // string concatenation
console.log(welcomeMessage);
var readlineSync = require('readline-sync');

var score = 0;

var questionOne = "Am I older than 25? ";
var answerOne = "yes";



function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(question);

  console.log("You entered " + userAnswer);

  // processing
  if (userAnswer === answer) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score)
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score)
  }
}

play(questionOne, answerOne)





var questionTwo = "Am I from the city Mirzapur? ";
var answerTwo = "no";

play(questionTwo, answerTwo)

// Functions

function add(numberOne, numberTwo) {
    console.log("numberOne: ", numberOne, "numberTwo: ", numberTwo)
    var sum = numberOne + numberTwo;
    return sum;
  }
  
  // use the function
  
  var result = add(2,5);
  console.log("The sum of 2 and 5 is: " + result);
  console.log(add(2,9));
  
  
  // operators
  
  /**
   * + - *
   */
  
  /**
   * write a function prod 
   */
   var readlineSync = require("readline-sync");

   var score = 0;
   
   function play(question, answer) {
     var userAnswer = readlineSync.question(question);
   
     if (userAnswer === answer) {
       console.log("You were right!");
       score = score + 1;
     } else {
       consle.log("You were wrong!");
       score = score - 1;
     }
   }
   
   // calling the function
   play("Where do I work? ", "Microsoft");
   
   play("Where do I live? ", "Bangalore");
   
   console.log("your score is ", score)
   