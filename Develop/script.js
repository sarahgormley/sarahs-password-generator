// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables for User Input
var yesNumbers;
var yesSymbols;
var yesLowerCase;
var yesUppercase;

// Special characters 
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
    var passwordLength = window.prompt("How long would you like your password to be? (Between 8-128)")
    if (!passwordLength) {
        alert("Please enter a password length between 8 - 128!");
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a password length between 8 - 128!");
    } else {
        yesNumbers = window.confirm("Do you want numbers?")
        yesSymbols = window.confirm("Do you want special characters?");
        yesLowerCase = window.confirm("Do you want lowercase letters?");
        yesUpperCase = window.confirm("Do you want uppercase letters?");
    }
    // If no options are chosen
    if (!yesLowerCase && !yesUpperCase && !yesNumbers && !yesSymbols) {
        alert("Please select atleast one character type!");
        // If all 4 options are chosen
    } else if (yesLowerCase && yesUpperCase && yesNumbers && yesSymbols) {
        choices = symbols.concat(lowerCase, upperCase, number);
        // Variations for if 3 options are chosen
    } else if (yesCharacter && yesNumber && yesUpperCase) {
        choices = symbols.concat(number, upperCase);
    } else if (yesCharacter && yesNumber && yesLowerCase) {
        choices = symbols.concat(number, lowerCase);
    } else if (yesLowerCase && yesNumber && yesUppercase) {
        choices = lowerCase.concat(number, upperCase);
    } else if (yesCharacter && yesLowercase && yesUppercase) {
        choices = symbols.concat(lowerCase, upperCase);
    }
    // Variations for if 2 options are chosen
    else if (yesCharacter && yesNumber) {
        choices = symbols.concat(number);
    } else if (yesCharacter && yesLowercase) {
        choices = symbols.concat(lowerCase);
    } else if (yesCharacter && yesUppercase) {
        choices = symbols.concat(upperCase);
    } else if (yesLowercase && yesNumber) {
        choices = lowerCase.concat(number);
    } else if (yesLowercase && yesUppercase) {
        choices = lowerCase.concat(upperCase);
    } else if (yesNumber && yesUppercase) {
        choices = number.concat(upperCase);
    }
    // Variations for if 1 option is chosen
    else if (yesCharacter) {
        choices = symbols
    } else if (yesNumbers) {
        choices = number
    } else if (yesLowerCase) {
        choices = lowerCase
    } else if (yesUppercase) {
        choices = upperCase
    }
    // Variable for password- left blank based on user choices
    var password = [];
    // Random selection of variables
    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    //Saves choice as password
    var pword = password.join("");
    UserInput(pword);
    return pword;
}

function UserInput(pword) {
    document.getElementById("password").textContent = pword;
    console.log(pword)
}

//Event listener to generate button - Shows password on click.
generateBtn.addEventListener("click", writePassword)