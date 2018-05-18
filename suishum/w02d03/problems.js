/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter(element => (element === 0 || element));
}


// write a function that takes a string character and an array of words as an argument and returns only words starting with the given character (case insensitive).
// eg: ('C', ['Cow', 'curry']) => ['Cow', 'curry']; beginsWith('S', ['Bell', 'sandwich', 'Salt']) => ['sandwich', 'Salt'];
function beginsWith(val, array) {
  return array.filter(element => element[0] === val.toUpperCase() || element[0] === val.toLowerCase());
}


// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


// Return the factorial of the provided integer (The factorial is the product of all positive integers less than or equal to the number).
// For example: factorialise(5) => 5 * 4 * 3 * 2 * 1 = 120
function factorialise(number) {
  const numArr = [];
  while (number > 0) {
    numArr.push(number);
    number--;
  }
  return numArr.reduce((product, element) => product * element, 1);
}


// //----------------------------------------------
// //GEORGES SOLUTION
// //----------------------------------------------
// function georgesFactorialise(number) {
//   let product = number;
//   while (number > 1) {
//     number--;
//     product *= number;
//   }
//   return product;
// }
// //===============================================


// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const output = [];
  //passing this function in the sort method will sort numbers as numbers and not as strings.
  const sorted = array.sort(function sortNumber(a,b) {
    return a - b;
  });
  output.push(sorted[1], sorted[sorted.length-2]);
  return output;
}


// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  const output = [];
  const availableCoins = [100, 50, 20, 10, 5, 2, 1];
  let priceInPennies = price * 100;

  availableCoins.forEach(function(element) {
    while(priceInPennies >= element) {
      output.push(element);
      priceInPennies -= element;
    }
  });
  return output;
}


// write a function to remove any lower case letters and spaces from an array item and then sort the array alphabetically.
// eg: ['aThnR', 'BrMTQ', 'oopq'] => ['', 'BMTQ', 'TR']
function sortUpper(array) {
  const output = [];
  array.forEach(function(element) {
    output.push(element.replace(/[a-z ]/g,''));
  });
  output.sort();
  return output;
}
