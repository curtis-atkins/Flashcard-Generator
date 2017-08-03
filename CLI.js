var input1 = process.argv[2].toLowerCase();

var fs = require('fs');

if (input1 === "basic") {

	var basic = require("./BasicCard.js");
	basic();


} else if (input1 === "cloze") {

	var cloze = require("./ClozeCard.js");
	cloze();

} else {

	console.log("The input was not accepted. Please try again!");
}