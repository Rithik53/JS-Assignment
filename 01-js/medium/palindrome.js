/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let cleanStr = str.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
  let reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}


module.exports = isPalindrome;
