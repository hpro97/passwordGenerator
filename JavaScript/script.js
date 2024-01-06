// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function for getting a random element from an array
// function getRandom(arr) {

// }

//maybe need adding


//------------------------------------------------------//
//---------------------my code--------------------------//
//------------------------------------------------------//

// * Generate a password when the button is clicked
// Function to generate password with user input

//------------------------------------------------------//
//---------link to button when clicked in html----------//
//------------------------------------------------------//


//   * Present a series of prompts for password criteria
// Function to prompt user for password options

//     * Length of password
var passLength = parseInt(prompt("What length of password would you like? (between 8 and 128 characters):"));
//       * At least 8 characters but no more than 128.
if (passLength < 8 || passLength > 128) {
    alert("Try again, enter a number between 8 and 128.");
  } else if (isNaN(passLength)) {
    alert("Not a Number. Please enter a number between 8 and 128.");
  }

//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)

const isLowerCase = confirm("Include lowercase chars?");
const isUpperCase = confirm("Include uppercase chars?");
const isNumeric = confirm("Include numeric chars?");
const isSpecial = confirm("Include special chars?");

//   * Code should validate for each input and at least one character type should be selected

if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    alert("You haven't picked a char type.");
  }
//    * make chosen characteristics as var

let chosenCharacteristics = "";
  if (isLowerCase) {
    chosenCharacteristics += lowerCasedCharacters;
  }
  if (isUpperCase) {
    chosenCharacteristics += upperCasedCharacters;
  }
  if (isNumeric) {
    chosenCharacteristics += numericCharacters;
  }
  if (isSpecial) {
    chosenCharacteristics += specialCharacters;
  }

//   * Once prompts are answered then the password should be generated
// function to generate password
function generatePassword() {

let password = "";
  for (let i = 0; i < passLength; i++) {
    let randomChar = Math.floor(Math.random() * chosenCharacteristics);
    password += chosenCharacteristics.charAt(randomChar);
  }
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


//------------------------------------------------------//
//---------make this happen when button clicked --------//
//------------------------------------------------------//


//   * then displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

