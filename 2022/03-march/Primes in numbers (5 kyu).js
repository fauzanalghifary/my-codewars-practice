// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

/* 

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

// STILL STRUGGLING WITH THIS ONE. REVISIT LATER.

// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// function primeFactors(n) {
//   let allNum = [];

//   for (let i = 2; i <= n; i++) {
//     allNum.push(i);
//   }

//   const primeNum = allNum.filter(isPrime);
//   console.log(primeNum);

//   let result = {};

//   for (let i = 0; i < primeNum.length; i++) {
//     if (n % primeNum[i] === 0) {
//       result[primeNum[i]]
//         ? (result[primeNum[i]] += 1)
//         : (result[primeNum[i]] = 1);
//       n = n / primeNum[i];
//       i -= 1;
//     }
//   }

//   let theFinal = "";
//   for (let [key, value] of Object.entries(result)) {
//     if (value === 1) {
//       theFinal += `(${key})`;
//     } else {
//       theFinal += `(${key}**${value})`;
//     }
//   }
//   console.log(theFinal);
//   return theFinal;
// }

// const primeFactors = (n) => {
//   if (n < 2) return `(${n})`;
//   let factors = "";
//   for (let i = 2; i <= n; i++) {
//     let count = 0;
//     while (n % i === 0) {
//       count++;
//       n /= i;
//     }
//     if (count) {
//       factors += `(${i}`;
//       if (count > 1) factors += `**${count}`;
//       factors += `)`;
//     }
//   }
//   console.log(factors);
//   return factors;
// };

// primeFactors(1000000100);

function primeFactors2(n) {
  let result = "";
  for (i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count) {
      result += `(${i}`;
      if (count > 1) {
        result += `**${count}`;
      }
      result += `)`;
    }
  }

  console.log(result);
  return result;
}
primeFactors2(1000134000000);
