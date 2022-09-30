// Assignment Code
var generateBtn = document.querySelector("#generate");


//set generatepassword function
function generatePassword(){
var userInput = window.prompt("What is the password length?");

//parseInt turns userInput into a number
var passwordLength = parseInt(userInput);

if(isNaN(passwordLength)){
  window.alert("Not a number!");
  return //Takes user back to initial code
}

//set condition for password length between 8-128 characters
if (passwordLength < 8 || passwordLength > 128){
  window.alert("Password must be between 8 and 128 characters");
  return
  }

  //select password criteria
var userWantLowercase = window.confirm("Would you like to include lowercase letters in your password?");
var userWantUppercase = window.confirm("Would you like to include uppercase letters in your password?");
var userWantNumbers = window.confirm("Would you like to include numbers in your password?");
var userWantCharacter = window.confirm("Would you like to include special characters in your password?");

//character lists
var lowerCase = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n" ,"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [];
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

//turn lowercase letters to uppercase
for (var i = 0; i < lowerCase.length; i++) {
  upperCase[i] = lowerCase[i].toUpperCase();
}

//acknowledge user's character selections
var userChoice = [];

if (userWantLowercase === true){
  userChoice.push(lowerCase);
}

if (userWantUppercase === true){
  userChoice.push(upperCase);
}

if (userWantCharacter === true){
  userChoice.push(specialChar);
}

if (userWantNumbers === true){
  userChoice.push(numberList);
}

if (userChoice.length === 0){
  userChoice.push(lowerCase);
}

//return a random integer ranging from min to max
function randomInt(min, max){
  //if 'max' is not defined, assume we want range from 0 to min
  if(!max){
    max=min;
    min = 0;
  }
  //Interpolate random values
  var rand = Math.random();
  return Math.floor(min * (1-rand) + rand * max);
}

//gets random item from list
function getRandomItem(list){
  return list[randomInt(list.length)];
}

var generatedPassword = "";

for (var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(userChoice);
  var randomChar = getRandomItem(randomList);
  generatedPassword += randomChar; //takes answers and generates password

}
return generatedPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
