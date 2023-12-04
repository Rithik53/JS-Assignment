/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLocaleLowerCase();

  let strArray = Array.from(str)

  let count = 0;
  for (let i = 0; i < strArray.length; i++) {

    switch (strArray[i]) {
      case 'a': count++
        break;
      case 'e': count++
        break;
      case 'i': count++
        break;
      case 'o': count++
        break;
      case 'u': count++
        break;
      default:
    }
  }

  return count;

}

module.exports = countVowels;