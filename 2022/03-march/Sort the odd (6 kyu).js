/* 

  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

// My solution

function sortArray(array) {
  let theOddOriginal = [];
  let theIndex = [];
  let theOdd = [];
  let theResult = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1 || array[i] % 2 === -1) {
      theOddOriginal.push(array[i]);
      theIndex.push(i);
    } else {
      theResult[i] = array[i];
    }
  }

  theOdd = theOddOriginal.sort((a, b) => a - b);

  for (i = 0; i < theOdd.length; i++) {
    theResult[theIndex[i]] = theOdd[i];
  }

  console.log(`the result: ${theResult}`);
  return theResult;
}

// Codewars Best Solution

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
