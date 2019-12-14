var specChar = [ "!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@", "^", "~"]

//create array for numbers

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// create array for lowercase characters

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// create array for uppercase characters

var upCase = ["A", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//create prompt for user choice of total characters



function guestOptions(){


var userLengthChoice = parseInt (prompt ("How many characters would you like in your password? Choose between 8 and 128."));

// create prompt for special characters

var userSpecChar = confirm ("Do you require special characters? Choose 'y' or 'n'.");
// create prompt for numeric characters

var userNumericChar = confirm ("Do you require numeric characters? Choose 'y' or 'n'.");
// create prompt for lowercase characters

var userLowChar = confirm ("Do you require lower case characters? Choose 'y' or 'n'.");
// create prompt for uppercase characters

var userUpCase = confirm ("Do you require upper case characters? Choose 'y' or 'n'.")


// taking prompts and confirms putting in an object for later use
 var passwordOption = {
     length: userLengthChoice,
     spechar: userSpecChar,
     number: userNumericChar,
     lower: userLowChar,
     upper: userUpCase,
 }
return passwordOption  //returned object
}
//math for ramdonizing
function randomize(placeholderArray){

        var randomIndex = Math.floor(Math.random() * placeholderArray.length);
        var element = placeholderArray[randomIndex];
        return element;



}
function createPassword(){
    var options = guestOptions();
   // creating pools of random characters, user chosen characters and eventual password 
   var passwordResult = [];
   var chosenChar = [];
   var possibilities = [];

// 
if (options.spechar){
    possibilities = possibilities.concat(specChar);
    chosenChar.push(randomize(specChar));
    // make one of each parenthe array name
}
if (options.number){
    possibilities = possibilities.concat(numbers);
    chosenChar.push(randomize(numbers));
}

for (var i = 0; i <options.length; i++){
    var  potential = randomize (possibilities);
    passwordResult.push(potential); //yoda style
    
}
for (var i = 0; i <chosenChar.length; i++){
    passwordResult[i] = chosenChar[i];
}

return passwordResult.join("");



}

alert(createPassword())

console.log(randomize(lowCase))