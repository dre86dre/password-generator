/* PSEUDO CODE: 

* Prompt the user for the password criteria:
  between 10 < 64
  lowercase, uppercase, numbers, special characters

* Validate the input

* Generate password based on criteria

* Display the generated password to the page

*/

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

// Function to generate password with user input
function generatePassword() {
    // Code that asks how many characters the user would like
    var confirmLength = (prompt("How many characters would you like in this password?"));
  
    console.log('User has chose to have ' + confirmLength + ' characters generated in the password');
  
    // Code that shows loop if the answer is outside the parameters
    while(confirmLength <= 9 || confirmLength >= 65) {
      alert("Password length must be between 10-64 characters! Try again");
      console.log('User has entered an amount out of the peramiters. Try again');
  
      var confirmLength = (prompt("How many characters would you like in this password?"));
      console.log('User has chose to have ' + confirmLength + ' characters generated in the password');
    } 

}