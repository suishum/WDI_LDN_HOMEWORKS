/* eslint-disable no-unused-vars */

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  return arr1.concat(arr2).filter((num, i, array) => {
    return array.indexOf(num) === i;
  });
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  return array.map((string) => {
    const object = {};
    object[key] = string;
    return object;
  });
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  return Object.keys(object).map((key) => {
    return [key, object[key]];
  });
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const sequence = [0,1];

  if(n < 3) return sequence.slice(0, n);

  while(sequence.length < n) {
    sequence.push(sequence.slice(-2).reduce((a,b) => {
      return a + b;
    }));
  }

  return sequence;
}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  return Math.abs(new Date(date1) - new Date(date2)) / 1000 / 60 / 60 / 24;
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  function getMoment(str) {

    if(!str.match(/[0-9]{1,2}:[0-9]{2}:[0-9]{2}(am|pm)?/)) {
      throw new Error('Invalid time format');
    }

    const info = [];
    str.split(':').forEach((t, i, array) => {
      if(t.match(/pm/)) info[0] += 12;
      info[i] = parseFloat(t);
    });

    const moment = new Date();
    moment.setHours(info[0]);
    moment.setMinutes(info[1]);
    moment.setSeconds(info[2]);
    moment.setMilliseconds(0);

    return moment;
  }

  return Math.abs(getMoment(time1) - getMoment(time2)) / 1000;
}
