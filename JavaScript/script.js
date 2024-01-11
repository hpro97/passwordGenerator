document.addEventListener('DOMContentLoaded', function() {
  var specialCharacters = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ];

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  let passLength;
  while (true) {
    passLength = parseInt(prompt("What length of password would you like? (between 8 and 128 characters):"));
    if (passLength < 8 || passLength > 128) {
      alert("Try again, enter a number between 8 and 128.");
    } else if (isNaN(passLength)) {
      alert("Not a Number. Please enter a number between 8 and 128.");
    } else {
      break;
    }
  }

  const characterTypes = getCharacterTypeConfirmation();
  const isLowerCase = characterTypes.isLowerCase;
  const isUpperCase = characterTypes.isUpperCase;
  const isNumeric = characterTypes.isNumeric;
  const isSpecial = characterTypes.isSpecial;

  function validateCharacterTypes() {
    if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
      alert("You haven't picked a char type.");
      return false;
    }
    return true;
  }

  function getCharacterTypeConfirmation() {
    let isLowerCase, isUpperCase, isNumeric, isSpecial;
    while (true) {
      isLowerCase = confirm("Include lowercase chars?");
      isUpperCase = confirm("Include uppercase chars?");
      isNumeric = confirm("Include numeric chars?");
      isSpecial = confirm("Include special chars?");
      if (isLowerCase || isUpperCase || isNumeric || isSpecial) {
        break;
      }
      alert("You haven't picked a char type.");
    }
    return {
      isLowerCase,
      isUpperCase,
      isNumeric,
      isSpecial
    };
  }

  function generatePassword() {
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

    let password = "";
    for (let i = 0; i < passLength; i++) {
      let randomChar = Math.floor(Math.random() * chosenCharacteristics.length);
      password += chosenCharacteristics[randomChar];
    }

    return password;
  }

  let generatedPassword = generatePassword();
  console.log(generatedPassword);

  function writePassword(event) {
    event.preventDefault();
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }

  var generateBtn = document.querySelector('#generate');
  generateBtn.addEventListener('click', writePassword);

  writePassword();
});