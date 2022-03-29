// Assignment Code
var generateBtn = document.querySelector("#generate");
// Characters for password
var randomChars = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getNumber,
    symbols: getSymbols,
}
var enter;
var yesNumbers;
var yesSymbols;
var yesLowerCase;
var yesUppercase;
//symbols generator
function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
    const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
    var password = "" //generatePassword();
    var passwordText = document.querySelector("#password");
    var passwordCharSet = "";
    var passwordLength = window.prompt("How long would you like your password to be? (Between 8-128)")
    if (!enter) {
        alert("Please enter a password length between 8 - 128!");
    } else if (enter < 8 || enter > 128)
}

var integ = window.confirm("Do you want numbers?")
var specChars = window.confirm("Do you want special characters?")
var lowerCase = window.confirm("Do you want lowercase letters?")
var upperCase = window.confirm("Do you want uppercase letters?")

if (!lowerCase && !upperCase && !integ && !specChars) {
    alert("Please select atleast one character type!");
}
if (lowerCase === true) {
    password += characters.char.Lowercase
    console.log(password)
};
if (upperCase === true) {
    password += characters.upLetters
    console.log(password)

};
if (integ === true) {
    password += characters.numbers
    console.log(password)

    ;
    if (specChars === true) {
        password += characters.symbols
        console.log(password)

    };
    var password = "";
    for (var i = 0; i < length; i++) {
        password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var length =
    passwordText.value = password;