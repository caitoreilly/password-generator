// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Define constants for letters, numbers, and special characters
const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "}",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const allPossibleCharacters = lowercaseLetters.concat(
  uppercaseLetters,
  numbers,
  specialCharacters
);

var userPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts that pop up after you click generate password button.
// User selects and confirms criteria to include in password.
// Alerts pop up to reiterate what user selected.

function generatePassword() {
  var confirmLowerCase = window.confirm(
    "Would you like lowercase letters in your password?"
  );
  if (confirmLowerCase) {
    alert("Your password will have lowercase letters.");
  } else {
    alert("Your password will NOT have lowercase letters.");
  }

  var confirmUpperCase = window.confirm(
    "Would you like uppercase letters in your password?"
  );
  if (confirmUpperCase) {
    alert("Your password will have uppercase letters.");
  } else {
    alert("Your password will NOT have uppercase letters.");
  }

  var confirmNumbers = window.confirm(
    "Would you like numbers in your password?"
  );
  if (confirmNumbers) {
    alert("Your password will have numbers.");
  } else {
    alert("Your password will NOT have numbers.");
  }

  var confirmSpecialCharacters = window.confirm(
    "Would you like special characters in your password?"
  );
  if (confirmSpecialCharacters) {
    alert("Your password will have special characters.");
  } else {
    alert("Your password will NOT have special characters.");
  }

  var promptPasswordLength = window.prompt(
    "Please select the number of characters you would like in your password. It must be at least 8 characters and no more than 128 characters."
  );
  window.alert(
    "Your password will have a total of " +
      promptPasswordLength +
      " characters."
  );

  console.log(confirmLowerCase, "confirming lowercase");
  console.log(confirmUpperCase, "confirming uppercase");
  console.log(confirmNumbers, "numbers");
  console.log(confirmSpecialCharacters, "special characters");
  console.log(promptPasswordLength, "password length");

  if (confirmLowerCase) {
    userPassword =
      lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  }

  if (confirmUpperCase) {
    userPassword +=
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  }

  if (confirmNumbers) {
    userPassword += numbers[Math.floor(Math.random() * numbers.length)];
  }

  if (confirmSpecialCharacters) {
    userPassword +=
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  //loop through all possible characters based on what was selected by user (true)
  for (let i = 0; i < allPossibleCharacters.length; i++) {
    console.log(allPossibleCharacters[i]);
  }

  var lettersStillNeeded = parseInt(promptPasswordLength) - userPassword.length;
  console.log(lettersStillNeeded);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
