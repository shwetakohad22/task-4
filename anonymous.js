// using IIFE

//print odd number in an array
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the string to a little caps in a string array
(function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let LowerCaseConversion = arr[i].toLowerCase();
    result.push(LowerCaseConversion);
  }
  console.log(result);
})(["Shweta", "vishal"]);

// sum of all numbers in an array
(function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4]);

//return all the prime numbers in an array
(function (arr) {
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
  console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7]);

// Return all the palindrome in an array
(function (arr) {
  let palindrome = [];
  for (let i = 0; i < arr.length; i++) {
    let StringConversion = arr[i].toString().toLowerCase();
    let ReverseString = StringConversion.split("").reverse().join("");
    if (StringConversion === ReverseString) {
      palindrome.push(ReverseString);
    }
  }
  console.log(palindrome);
})(["Nitin", "Pop", "Shweta", 121, 123]);

// remove all duplicate element in an array
(function (arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  console.log(unique);
})([12, 12, 45, 65, 12, 65, 45, 86, 36]);
