/*An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};*/

function analyzeArray(arr) {
  const objectAnalyze = {};

  objectAnalyze.average = getAverage(arr)
  objectAnalyze.min = getMin(arr);
  objectAnalyze.max = getMax(arr);
  objectAnalyze.length = getLength(arr);


  return objectAnalyze;
};

function getLength(arr) {
  if (!arr) return 0;
  else {
    return arr.length;
  }
};

function getMin(arr) {
  if (!arr || arr.length === 0) return 0

  if (arr.length <= 1) {
    return arr[0];
  } else {
    return Math.min(...arr)
  };
};

function getMax(arr) {
  if (!arr || arr.length === 0) return 0;

  if (arr.length <= 1) {
    return arr[0];
  } else {
    return Math.max(...arr);
  };
};

function getAverage(arr) {
  if (!arr || arr.length === 0) return 0;

  if (arr.length <= 1) {
    return arr[0];
  } else {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let average = sum / arr.length;
    return average;
  };
};

module.exports = analyzeArray