/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`;
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  const farenheit = celcius * 1.8 + 32;
  return farenheit;
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const numberStr = number.toString();
  let reversed = '';
  for (let i=numberStr.length-1; i>=0; i--) {
    reversed += numberStr[i];
  }
  return parseFloat(reversed);
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const spaceless = string.replace(/ /g, '');
  const reversedArrToStr = spaceless.split('').reverse().join('');
  if (spaceless === reversedArrToStr) {
    return true;
  } else {
    return false;
  }
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  const newStr = string.toLowerCase().replace(/ /g, '').split('').sort().join('');
  return newStr;
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  const sortedArr = string.toLowerCase().replace(/ /g, '').split('').sort();

  //sort different letters and the number of occurances of those letters into 2 arrays.
  const objReturn = {};
  const letters = [];
  const occurances = [];
  let previousLetter = '';
  for (let i=0; i<sortedArr.length; i++) {
    //if current letter is not equal to the previous, add the letter to the letters array and add 1 to the occurances array
    if (sortedArr[i] !== previousLetter) {
      letters.push(sortedArr[i]);
      occurances.push(1);
    } else {
      //if current letter is equal to the previous letter, increment the number of occurances by 1.
      occurances[occurances.length-1]++;
    }
    previousLetter = sortedArr[i];
  }
  //now that the letters and occurances have be sorted into 2 arrays.. time to combine them.
  for (let i=0; i<letters.length; i++) {
    objReturn[letters[i]] = occurances[i];
  }
  return objReturn;
}


// //---------------------------------------------
// //FABIENNE'S SOLUTION. FOR MY EDUCATION.
// //---------------------------------------------
// function numOfOccurances(string) {
//   let MyobjNbOcc = {};
//   const arr = string.toLowerCase().replace(/ /g,'').split('');
//
//   //initialise object to count occurances
//   for (let i = 0; i < arr.length; i++){
//     MyobjNbOcc[arr[i]] = 0;
//   }
//
//   //increases the nb of occurances for each letter
//   for (i = 0; i < arr.length; i++){
//     MyobjNbOcc[arr[i]] += 1;
//   }
//   return MyobjNbOcc;
// }
// //===============================================

// //--------------------------------------------
// //FABIAN'S SOLUTION.
// //--------------------------------------------
// function numOfOccurances(string) {
//   const letters = string.replace(/ /g,'').toLowerCase().split('');
//   var output = {};
//   for (let i = 0; i < letters.length; i++) {
//     if(Object.keys(output).includes(letters[i])) {
//       output[letters[i]] ++;
//     } else {
//       output[letters[i]] = 1;
//     }
//   }
//   return output;
// }
// //=============================================


// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  const lowerStr = string.toLowerCase();
  let wordArr = lowerStr.split(' ');
  for (let i=0; i<wordArr.length; i++) {
    wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substr(1);
  }
  wordArr = wordArr.join(' ');
  return wordArr;
}

function otherTitleCase(string) {
  return string.split(' ').map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  }).join(' ');
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  const lowerStr = string.toLowerCase();
  let vowelCount = 0;
  for (let i=0; i<string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

function nextNumOfVowels(string) {
  const lowerStr = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let i=0; i<string.length; i++) {
    for (let j=0; j<vowels.length; j++) {
      if (string[i] === vowels[j]) {
        vowelCount += 1;
      }
    }
  }
  return vowelCount;
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  let border = '';
  for (let i=0; i<string.length+4; i++) {
    border += '*';
  }
  const output = `${border}\n* ${string} *\n${border}`;
  return output;
}


// //--------------------------------------------------
// //MIKES SOLUTIONS.
// //--------------------------------------------------
// // write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// // eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
// function hello(string='World') {
//   return `Hello ${string}!`;
// }
//
// // write a function that will calculate the area of a circle, given the radius
// function areaOfCircle(radius) {
//   return Math.PI * Math.pow(radius, 2);
// }
//
// // write a function to convert celcius to farenheit
// function celciusToFarenheit(celcius) {
//   return celcius * 9 / 5 + 32;
// }
//
// // write a function that will reverse a number (eg. 456733 become 337654)
// function numberReverse(number) {
//   return parseFloat(number.toString().split('').reverse().join(''));
// }
//
// // write a function to check if a word or phrase is a palindrome returning a boolean
// // eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
// function palindromeCheck(string) {
//   return string.replace(/ /g, '').split('').reverse().join('') === string.replace(' ', '');
// }
//
// // write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// // eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
// function orderStringAlphabetically(string) {
//   return string.toLowerCase().replace(/ /g, '').split('').sort().join('');
// }
//
// // write a function to return the number of occurances of each letter of a string in an object case insensitive
// // eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
// function numOfOccurances(string) {
//   return string.toLowerCase().replace(/ /g, '').split('').reduce((obj, letter) => {
//     obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
//     return obj;
//   }, {});
// }
//
// // write a function that capitalizes the first letter of each word
// // eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
// function titleCase(string) {
//   return string.split(' ').map((word) => {
//     return `${word[0].toUpperCase()}${word.substring(1)}`;
//   }).join(' ');
// }
//
// // write a function that returns the number of vowels in a string case insensitive
// // 'y' should not be considered a vowel
// // eg: numOfVowels('Yellow Submarine') => 6
// function numOfVowels(string) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   return string.split('').reduce((count, letter) => {
//     return vowels.includes(letter.toLowerCase()) ? count + 1 : count;
//   }, 0);
// }
//
// // write a function that frames a string in asterisks (*)
// //                             ***************
// // eg: frame('Hello Kitty') => * Hello Kitty *
// //                             ***************
// function frame(string) {
//   const beam = new Array(string.length + 5).join('*');
//   return `${beam}\n* ${string} *\n${beam}`;
// }
// //=======================================================
