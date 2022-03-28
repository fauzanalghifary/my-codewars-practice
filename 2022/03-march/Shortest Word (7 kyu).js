/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// My solution
function findShort(s) {
  let the_array = s.split(" ");

  console.log(the_array);

  let shortest = the_array[0].length;
  let the_length = "";

  for (i = 0; i < the_array.length; i++) {
    the_length = the_array[i].length;

    if (the_length < shortest) {
      shortest = the_length;
    }
  }

  return shortest;
}

// Codewars best solution
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

function findShort(s) {
  var arr = s.split(" ");
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}
