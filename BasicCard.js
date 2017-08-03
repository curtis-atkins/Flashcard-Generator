var inquirer = require("inquirer");
var basicQuestions = require("./basic-questions.json");
var counter = 0;
var correctAnswerCount = 0;

var BasicCard = function(frontArg, backArg) {
    this.frontArg = frontArg;
    this.backArg = backArg;
};

var askQuestions = function() {
    if (counter < 5) {
        inquirer.prompt([{
            type: "input",
            message: basicQuestions[counter].frontCard,
            name: "question"
        }]).then(function(answer) {

            var userInput = answer.question.toLowerCase();
            if (userInput === basicQuestions[counter].backCard) {
                console.log("\nCorrect!");
                correctAnswerCount++;
            } else {
                console.log("\nWrong!");
            }

            console.log(basicQuestions[counter].fullAnswer);
            counter++
            askQuestions();
        });

    } else {
        console.log("\nGame Over!")
        console.log("Correct Answers: " + correctAnswerCount);
        inquirer.prompt([{
            type: "confirm",
            message: "Do you want to play again?",
            name: "playAgain",
            default: true
        }]).then(function(answer) {

            if (answer.playAgain === true) {
                counter = 0;
                correctAnswerCount = 0;
                askQuestions();
            } else {
                console.log("Thank you for playing!");
            }
        });
    }
}; 

askQuestions();

var questionOne = new BasicCard("What is the tallest building in the United States?", "One World Trade Center");
var questionTwo = new BasicCard("What is the largest body of water in North America?", "Lake Superior");
var questionThree = new BasicCard("What is the name of the highest point of elevation in the Unites States?", "Mt. McKinley");
var questionFour = new BasicCard("What is the name of the richest company in the world?", "Walmart");
var questionFive = new BasicCard("What is the most expensive mass-produced car in the world, at $4.8 million?", "Koenigsegg CCXR Trevita");

module.exports = BasicCard;