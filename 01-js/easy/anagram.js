/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLocaleLowerCase();
  str2 = str2.toLocaleLowerCase();

  if(str1.length ===str2.length){
    let str1Array = Array.from(str1)
    let str2Array = Array.from(str2)

    console.log(str1Array)
    console.log(str2Array)

    str1Array.sort()
    str2Array.sort()

    if(JSON.stringify(str1Array)===JSON.stringify(str2Array)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }

}

module.exports = isAnagram;
