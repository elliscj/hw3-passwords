// Assignment Code

//stored reference to the button id in html
var generateBtn = document.querySelector("#generate");

var specChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialCharacters = specChar.split("");

var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = upCase.split("");

var lowCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = lowCase.split("");

var num = "0123456789";
var numbers = num.split("");

var passArray = [];

var password = "";

var passwordVariable;

//
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", function () {
  //main function

  do {
    passwordVariable = {
      passwordLength: parseInt(
        prompt("how long would you like your password to be?")
      ),
    };
    if (
      7 < passwordVariable.passwordLength &&
      passwordVariable.passwordLength < 129
    ) {
      alert(
        "Your password will be " +
          passwordVariable.passwordLength +
          " characters long."
      );
      break; // This ends the loop
    } else if (passwordVariable.passwordLength > 128) {
      alert("Too big, please choose a number between 8 and 128.");
    } else if (passwordVariable.passwordLength < 8) {
      alert("Too small, please choose a number between 8 and 128.");
    }
  } while (passwordVariable.passwordLength < 8 || passwordVariable.passwordLength > 128);

  do {
    alert("please choose at least one character type");

    (passwordVariable.upperCaseChar = confirm(
      "would you like to include upper case letters in your password?"
    )),
      (passwordVariable.lowerCaseChar = confirm(
        "would you like to include lower case letters in your password?"
      )),
      (passwordVariable.specialCharactersChar = confirm(
        "would you like to include special characters in your password?"
      )),
      (passwordVariable.numbersChar = confirm(
        "would you like to include numbers in your password?"
      ));
  } while (passwordVariable.upperCaseChar === false && passwordVariable.lowerCaseChar === false && passwordVariable.specialCharactersChar === false && passwordVariable.numbersChar === false);

  if (passwordVariable.upperCaseChar === true) {
    passArray = passArray.concat(upperCase);
  }
  if (passwordVariable.lowerCaseChar === true) {
    passArray = passArray.concat(lowerCase);
  }
  if (passwordVariable.specialCharactersChar === true) {
    passArray = passArray.concat(specialCharacters);
  }
  if (passwordVariable.numbersChar === true) {
    passArray = passArray.concat(numbers);
  }
  console.log(passwordVariable);
  console.log(passwordVariable.passwordLength);

  console.log(randomChar);

  randomChars = [];
  //randomChars = [5,9,6,3]
  //passArray = [A,B,d,h,l,6,8,2]
  for (i = 0; i < passwordVariable.passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * passArray.length);
    randomChars = randomChars.concat(randomChar);
  }

  for (i = 0; i < randomChars.length; i++) {
    randomChar = randomChars[i];
    password = password.concat(passArray[randomChar]);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//do with a loop, loop as many times as password length for each loop grab a random indexed item from the concat array

// console.log(passwordLength);

//parseInt?

// //just reprompt and give alert

// if (passwordLength = (7 > passwordLength || passwordLength > 128)) {
//   alert ("you must choose a length between 8 and 128")
// } else {(confirm confirm confirm confirm);
// }

// if (passwordVariable.upperCaseChar === false && passwordVariable.lowerCaseChar === false && passwordVariable.numbersChar === false && passwordVariable.specialCharactersChar === false) {
//   alert ("you must choose at least one character type")
// }

// }
// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

function generatePassword() {}

// console.log(specialCharacters);
// console.log(upperCase);
// console.log(lowerCase);
// console.log(numbers);
//
