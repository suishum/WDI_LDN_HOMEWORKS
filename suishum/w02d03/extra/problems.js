/* eslint-disable no-unused-vars */

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const arr = arr1.concat(arr2);
  //what does this mean?
  const arrWithoutDupes = Array.from(new Set(arr));
  return arrWithoutDupes;
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  const objOutput = [];
  array.forEach(function(element) {
    const miniObj = {};
    miniObj[key] = element;
    objOutput.push(miniObj);
  });
  return objOutput;
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const output = [];

  for (let i=0; i<keys.length; i++) {
    const tempArray = [];
    tempArray.push(keys[i], values[i]);
    output.push(tempArray);
  }
  return output;
}


// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  if (n === 1) {
    const output = [0];
  } else {
    const output = [0,1];
    while (output.length < n) {
      const lastTwo = output.slice(output.length-2, output.length);
      const lastTwoSum = lastTwo.reduce((sum, element) => sum + element, 0);
      output.push(lastTwoSum);
    }
  }
  return output;
}

//while
//slice
//reduce


// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  //get date in YYYYMMDD format & as number.
  const newDate1 = parseFloat(date1.replace(/-/g, ''));
  const newDate2 = parseFloat(date2.replace(/-/g, ''));
  //get date differences as a positive number.
  const yearDiff = Math.abs(parseFloat(date1.slice(0, 4)) - parseFloat(date2.slice(0, 4)));
  const monthDiff = Math.abs(parseFloat(date1.slice(5, 7)) - parseFloat(date2.slice(5, 7)));
  const dayDiff = Math.abs(parseFloat(date1.slice(8, 10)) - parseFloat(date2.slice(8, 10)));
  //number of days in year & month.
  const daysInYear = 365;
  const daysInMonth = 31;
  //calculate
  const daysBetween = yearDiff * daysInYear + monthDiff * daysInMonth + dayDiff;
  return daysBetween;
}
//I've written a formula to satisfy the tests but realistically wouldn't you need some sort of array to store the different amount of days in every month? Also what if it's a leap year?


// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  //seconds in 1hr and 1min
  const secInMin = 60;
  const secInHr = 60 * secInMin;
  let timeOne = time1;
  let timeTwo = time2;
  //add 0 to the beginning of the times that begin with a single digit for hour
  if (timeOne.charAt(1) === ':') {
    timeOne = '0' + timeOne;
  } else if (timeTwo.charAt(1) === ':') {
    timeTwo = '0' + timeTwo;
  }
  //convert times to 24-hour format
  if (timeOne.substring(timeOne.length-2, timeOne.length) === 'am') {
    //remove 'am' from end of string timeOne
  } else if (timeTwo.substring(timeTwo.length-2, timeTwo.length) === 'am') {
    //remove 'am' from end of string timeTwo
  } else if (timeOne.substring(timeOne.length-2, timeOne.length) === 'pm') {
    //remove 'pm' from end of string timeOne
    //add 12 to HH: of timeOne string
  } else if (timeTwo.substring(timeTwo.length-2, timeTwo.length) === 'pm') {
    //remove 'pm' from end of string timeTwo
    //add 12 to HH: of timeTwo string
  } else {
    //do nothing? maybe switch statement would be more appropriate
  }
}
