// array of numbers
var numChar = [
'0',
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7', 
 '8',
 '9'
];

// array of uppercase characters
var upChar = [
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

//  array of lowercase characters
var lowChar = [
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

// array of special characters
var speChar = [
'@',
'%',
'+',
'~',
'-',
'_',
'.',
'[',
']',
'{',
'}',
'(',
')',
',',
':',
'/',
'#',
'"',
'^',
'?'
];
// function to ask questions
function getPasswordOptions() {
  var length = parseInt(
    prompt('How long would you like your password to be?'),
    15
  );
  
// statement to check password length is a number
  if (Number.isNaN(length)) {
    alert('Please enter your preferred password length');
   return null;
  }

  // statements to check length of password is between 8 and 128 characters
if (length < 8) {
  alert('Your password must be at least 8 characters in length');
  return null;
}

if (length > 128) {
  alert('your password cannot be longer than 128 characters');
  return null;
}

// variables to include characters
var includeSpec = confirm(
  'Click OK to include special characters'
);

var includeNum = confirm(
  'Click OK to include numbers'
);

var includeLow = confirm(
  'Click OK to include Lowercase Letters'
);

var includeUp = confirm(
  'Click OK to include Uppercase Letters'
);
// statement incase user includes no character type
if(
  includeSpec === false &&
  includeNum === false &&
  includeLow === false &&
  includeUp === false
) {
  alert('Must select one type');
  return null;
}
// object to store input
var passwordOptions = {
  length: length,
  includeSpec: includeSpec,
  includeNum: includeNum,
  includeLow: includeLow,
  includeUp: includeUp,
};
return passwordOptions;
}

// function for getting a character from an array
function getRandom(arr) {
  var genOpt = Math.floor(Math.random() * arr.length);
  var genElem = arr[genOpt];
  
  return genElem;
}
// function to generate password
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possChar = [];

  var chosenChar = [];

  if (!options) return null;

  // statements that add chosen characters types into an array of posible characters
  if (options.includeSpec) {
    possChar = possChar.concat(speChar);
    chosenChar.push(getRandom(speChar));
  }
  
  if (options.includeNum) {
    possChar = possChar.concat(numChar);
    chosenChar.push(getRandom(numChar));
  }

  if (options.includeLow) {
    possChar = possChar.concat(lowChar);
    chosenChar.push(getRandom(lowChar));
  }

  if (options.includeUp) {
    possChar = possChar.concat(upChar);
    chosenChar.push(getRandom(upChar));
  }

  for (var i = 0; i < options.length; i++) {
    var possChar = getRandom(possChar);

    result.push(possChar);
  }

  for (var i = 0; i < chosenChar.length; i++) {
    result[i] = chosenChar[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
