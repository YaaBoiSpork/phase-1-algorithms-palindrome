function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('')
  if (word === reverseWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  Convert "string" of word into array
  Reverse array order
  Join reverse array into "new string"
  If "string" === "new string":
    true
  
*/

/*
  Add written explanation of your solution here
  isPalindrome takes a string and makes it an array that is then
  put into a new array in reverse. the original array and the new 
  array is then compared
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;