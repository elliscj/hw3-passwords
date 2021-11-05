// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
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
];

var upperCase = [
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

var lowerCase = [
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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomChar = Math.floor(Math.random() * specialCharacters.length);
console.log(randomChar);

var randomUpper = Math.floor(Math.random() * upperCase.length);
console.log(randomUpper);

var randomLower = Math.floor(Math.random() * lowerCase.length);
console.log(randomLower);

var randomNumber = Math.floor(Math.random() * numbers.length);
console.log(randomNumber);

var passwordChars;

var passwordLength = prompt("how long would youlike your password");

if (7 < passwordLength && passwordLength < 129) {
  alert("your password is " + passwordLength + " characters long.");
} else {
  passwordLength = prompt("please enter a number between 8 and 128");
}

// while (true) {
//   if (7 < passwordLength && passwordLength < 129) {
//     alert("Good!");
//     break; // This ends the loop
//   } else if (passwordLength > 128) {
//     prompt("Too Big");
//   } else if (passwordLength < 8) {
//     prompt("Too Small");
//   }
// }

console.log(passwordLength);

// if {
//   passwordLength = (7< passwordLength < 128)
//   alert
// }

// console.log(randomChar);

// var randomUpper =

// var randomLower =

// var randomLower =

// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   function generatePassword() {
//     alert("How long would you like your password to be?");

//   }
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

console.log(specialCharacters);
console.log(upperCase);
console.log(lowerCase);
console.log(numbers);
