/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// My Solution
function rot13(message) {
  let theArray = message.split("");
  let finalArray = [];

  let a = 97;
  let charArray = [];
  for (let i = 0; i < 26; i++) {
    charArray.push(String.fromCharCode(a + i));
  }

  //   ------------------------------------------------

  for (let i = 0; i < theArray.length; i++) {
    let isFound = false;

    if (theArray[i] === theArray[i].toLowerCase()) {
      for (let j = 0; j < charArray.length; j++) {
        if (theArray[i] === charArray[j]) {
          finalArray.push(charArray[(j + 13) % 26]);
          isFound = true;
        }
      }
    } else {
      for (let j = 0; j < charArray.length; j++) {
        if (theArray[i].toLowerCase() === charArray[j]) {
          finalArray.push(charArray[(j + 13) % 26].toUpperCase());
          isFound = true;
        }
      }
    }

    if (isFound === false) {
      finalArray.push(theArray[i]);
    }
  }

  console.log(finalArray);

  let finalString = finalArray.join("");

  return finalString;
}

// Codewars best solution
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
