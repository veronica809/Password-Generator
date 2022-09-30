// Assignment Code
var generateBtn = document.querySelector("#generate");

//set generatepassword function
function generatePassword(){
var userInput = window.prompt("What is the password length?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
