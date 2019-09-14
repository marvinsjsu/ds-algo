// Question: Find the median of two sorted arrays

// Clarifications:
// - we have a function called median that takes in two arguments,
//   both are arrays.
// - we expect the arrays to be varying length from each other?
// - the data type of our array's contents are going be numbers?
// - do we need to catch invalid values?
// - does median mean calculating the median of first and second argument
//   then taking the median of those two values?
// - output would be a number

// sum all the elements in arg1, then divide by arg1 length
// sum all the elements in arg2, then divide by arg2 length
// this should yield us arg1's median and arg2's median
// we then sum arg1 and arg2's medians and divide by 2
// this should give us the output of our median function

function median (arr1, arr2) {
  // sum arr1 elements
  let arr1Sum = arr1.reduce(sum);
  let arr1Median = arr1Sum / arr1.length;
  let arr2Sum = arr2.reduce(sum);
  let arr2Median = arr2Sum / arr2.length;
  let output = (arr1Median + arr2Median) / 2;

  return output;
}

function sum(acc, val) {
  return acc + val;
}


// let arr1 = [1, 2, 3, 4]; median1 = 10/4
// let arr2 = [5, 6, 7, 8]; median2 = 26/4
// median = (10/4 + 26/4) / 2
// median = 9 / 2
// median = 4.5



// Question: Given a matrix, find the path from top left to bottom
//           right with the greatest product by moving only down
//           and right
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// = 1 * 4 * 7 * 8 * 9
// = 2016


