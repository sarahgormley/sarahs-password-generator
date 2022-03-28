// Assignment Code
var generateBtn = document.querySelector("#generate");
var chracters = [
    numbers = "1234567890"
    lowLetters = "abcdefghijklmnopqrstuvwxyz"
    upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    characters = " !#$%&'()*+,-./:;<=>?@[]_`{|}~"
]
var passwordLength = window.prompt("How long would you like your password to be?")
var lowerCase = window.confirm("Do you want lowercase letters?")
var upperCase = window.confirm("Do you want uppercase letters?")
var integ = window.confirm("Do you want numbers?")
var specChars = window.confirm("Do you want special characters?")

if (!lowerCase && !upperCase && !integ && !specChars) {
    alert("Please select atleast one character type!");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);