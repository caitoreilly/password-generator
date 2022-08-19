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

// Write password to the #password input
function writePassword() {
  console.log("writing password");
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts that pop up after you click generate password button.
// User selects and confirms criteria to include in password.
// Alerts pop up to reiterate what user selected.

function generatePassword() {
  var allPossibleCharacters = [];

  var userPassword = "";

  var confirmLowerCase = window.confirm(
    "Would you like lowercase letters in your password?"
  );
  if (confirmLowerCase) {
    alert("Your password will have lowercase letters.");
    allPossibleCharacters = allPossibleCharacters.concat(lowercaseLetters);
  } else {
    alert("Your password will NOT have lowercase letters.");
  }
  console.log(allPossibleCharacters);

  var confirmUpperCase = window.confirm(
    "Would you like uppercase letters in your password?"
  );
  if (confirmUpperCase) {
    alert("Your password will have uppercase letters.");
    allPossibleCharacters = allPossibleCharacters.concat(uppercaseLetters);
  } else {
    alert("Your password will NOT have uppercase letters.");
  }
  console.log(allPossibleCharacters);

  var confirmNumbers = window.confirm(
    "Would you like numbers in your password?"
  );
  if (confirmNumbers) {
    alert("Your password will have numbers.");
    allPossibleCharacters = allPossibleCharacters.concat(numbers);
  } else {
    alert("Your password will NOT have numbers.");
  }
  console.log(numbers);

  var confirmSpecialCharacters = window.confirm(
    "Would you like special characters in your password?"
  );
  if (confirmSpecialCharacters) {
    alert("Your password will have special characters.");
    allPossibleCharacters = allPossibleCharacters.concat(specialCharacters);
  } else {
    alert("Your password will NOT have special characters.");
  }
  console.log(allPossibleCharacters);

  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumbers &&
    !confirmSpecialCharacters
  ) {
    alert(
      "Password cannot be created. You must select 'OK' for at least one criteria."
    );
    generatePassword();
  }

  var promptPasswordLength = getPasswordLength();
  

  console.log(confirmLowerCase, "confirming lowercase");
  console.log(confirmUpperCase, "confirming uppercase");
  console.log(confirmNumbers, "numbers");
  console.log(confirmSpecialCharacters, "special characters");
  console.log(promptPasswordLength, "password length");

  console.log(userPassword);

  //loop through all possible characters based on what was selected by user (true)
  for (let i = 0; i < promptPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
    console.log(allPossibleCharacters[randomIndex], randomIndex);
    userPassword += allPossibleCharacters[randomIndex];
    console.log(userPassword);
  }

  return userPassword;
}

function getPasswordLength() {
   
  var length = parseInt(
      window.prompt(
        "Please select the number of characters you would like in your password. It must be at least 8 characters and no more than 128 characters."
      ));
  
  while (length < 8 || length > 128 || isNaN(length))
    length = parseInt(
      window.prompt(
        "Please select the number of characters you would like in your password. It must be at least 8 characters and no more than 128 characters."
      )
    );

    return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
