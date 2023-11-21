// using arrow function

// print odd number in an array
let findOdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findOdd(numbers);

//Convert all the strings to little caps in string array
littleCaps = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let LowerCaseConversion = arr[i].toLowerCase();
    result.push(LowerCaseConversion);
  }
  return result;
};
let str = ["Shweta", "Vishal"];
console.log(littleCaps(str));

// sum of all numbers in an array
let sumOfNum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
let num = [1, 2, 3];
console.log(sumOfNum(num));

// check all the prime number in an array
FindPrime = (arr) => {
  let primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && arr[i] > 1) {
      primeNumbers.push(arr[i]);
    }
  }
  return primeNumbers;
};
let n = [1, 2, 3, 4, 5, 6, 7];
console.log(FindPrime(n));

//Return all palindrome in an array
let checkPalindrome = (arr) => {
  let palindrome = [];
  for (let i = 0; i < arr.length; i++) {
    let originalStr = arr[i].toString();
    let reverseStr = originalStr.split("").reverse().join("");
    if (originalStr === reverseStr) {
      palindrome.push(arr[i]);
    }
  }
  return palindrome;
};
let number = [121, 232, 655, 787, 354, 353];
let names = ["shweta", "nitin"];
console.log(checkPalindrome(number));
console.log(checkPalindrome(names));
