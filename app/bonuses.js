// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let strArr = str.toLowerCase().split("");
  for (let i = 1; i < strArr.length; i++) {
    let letter = strArr[i];
    let prevLetter = strArr[i - 1];
    if (letter.charCodeAt(0) - prevLetter.charCodeAt(0) > 1) {
      let missingLetterCode = letter.charCodeAt(0) - 1;
      return String.fromCharCode(missingLetterCode);
    }
  }
  return "no missing letters"
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let second = arr[j];
      if (first + second == target) {
        return true;
      }
    }
  }
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {

  let filteredOddArr = arr.filter(item => item % 2 !== 0).sort((a, b) => a - b);
  let newArr = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 == 0) {
      newArr.push(num)
    } else {
      newArr.push(filteredOddArr[counter]);
      counter++;
    }
  }

  return newArr;

}