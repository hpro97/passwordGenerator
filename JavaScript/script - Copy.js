
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

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

var passLength = parseInt(prompt("What length of password would you like? (between 8 and 128 characters):"));

if (passLength < 8 || passLength > 128) {
    alert("Try again, enter a number between 8 and 128.");
  } else if (isNaN(passLength)) {
    alert("Not a Number. Please enter a number between 8 and 128.");
  }

console.log(passLength);

const isLowerCase = confirm("Include lowercase chars?");
const isUpperCase = confirm("Include uppercase chars?");
const isNumeric = confirm("Include numeric chars?");
const isSpecial = confirm("Include special chars?");

console.log(isLowerCase);
console.log(isUpperCase);
console.log(isNumeric);
console.log(isSpecial);

if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    alert("You haven't picked a char type.");
  }

  let chosenCharacteristics = [];

  if (isLowerCase) {
    chosenCharacteristics = chosenCharacteristics.concat(lowerCasedCharacters);
  }
  
  if (isUpperCase) {
    chosenCharacteristics = chosenCharacteristics.concat(upperCasedCharacters);
  }
  
  if (isNumeric) {
    chosenCharacteristics = chosenCharacteristics.concat(numericCharacters);
  }
  
  if (isSpecial) {
    chosenCharacteristics = chosenCharacteristics.concat(specialCharacters);
  }
  
  let word = "";
  
  for (let i = 0; i < passLength; i++) {
    let randomChar = Math.floor(Math.random() * chosenCharacteristics.length);
    word += chosenCharacteristics[randomChar];
  }
  
  console.log(word);