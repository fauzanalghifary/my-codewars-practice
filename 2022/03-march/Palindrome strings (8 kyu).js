/* 

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false

*/

// My Solution

function isPalindrome(line) {
  if (typeof line === "number") {
    line = line.toString();
  }

  let theArray = line.split("");
  let newArray = [];
  let n = theArray.length - 1;

  for (let i = 0; i < theArray.length; i++) {
    newArray.push(theArray[n - i]);
  }

  console.log(theArray);
  console.log(newArray);

  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i] !== newArray[i]) {
      return false;
    }
  }

  return true;
}

// Codewars best solution

function isPalindrome(line) {
  return line.toString() == line.toString().split("").reverse().join("");
}
