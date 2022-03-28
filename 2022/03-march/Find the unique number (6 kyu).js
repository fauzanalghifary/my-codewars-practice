/* 

  There is an array with some numbers. All numbers are equal except for one. Try to find it!

  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  It’s guaranteed that array contains at least 3 numbers.

*/

// My solution

function findUniq(arr) {
  theFirst = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[0] === arr[1]) {
      if (arr[0] !== arr[i]) {
        return arr[i];
      }
    } else {
      if (arr[0] === arr[2]) {
        return arr[1];
      } else {
        return arr[0];
      }
    }
  }
}

// Codewars best solution

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}
