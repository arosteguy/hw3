// create array for special characters

var specChar = [ `!, ", #, $, %, &,', *, +, -, ., /, :, ;, <, =, >, ?, @, \, ^, _, |, ~,`]

//create array for numbers

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// create array for lowercase characters

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// create array for uppercase characters

var upCase = ["A", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//create prompt for user choice of total characters
var userLengthChoice = prompt ("How many characters would you like in your password? Choose between 8 and 128.");

// create prompt for special characters

var userSpecChar = prompt ("Do you require special characters?");
// create prompt for numeric characters

var userNumericChar = prompt ("Do you require numeric characters?");
// create prompt for lowercase characters

var userLowChar = prompt ("Do you require lower case characters?");
// create prompt for uppercase characters

var userUpCase = prompt ("Do you require upper case characters?")

