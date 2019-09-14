const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


/*
Your previous Plain Text content is preserved below:

Challenge
Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following:

a b c d
e i k r
o u f j

Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found. If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. The input matrix will at least be of size 2x2.
Sample Test Cases
Input:["aqrst", "ukaei", "ffooo"]

Output:"1-2"


Input:["gg", "ff"]

Output:"not found"


 */

function VowelSquare(strArr) {
  // create a matrix, each string in our strArr needs to be split
  // into single characters
  const matrix = strArr;
  const vowels = 'aeiou';

  let result = 'not found';

  let topLeftVal, topRightVal, bottomLeftVal, bottomRightVal;
  for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[i].length - 1; j++) {

        topLeftVal = matrix[i][j];
        topRightVal = matrix[i][j + 1];
        bottomLeftVal = matrix[i + 1][j];
        bottomRightVal = matrix[i + 1][j + 1];

        if (vowels.includes(topLeftVal)
            && vowels.includes(topRightVal)
            && vowels.includes(bottomLeftVal)
            && vowels.includes(bottomRightVal)
        ) {
          result = [i, j].join('-');
          console.log('result: ', result);
          return result;
        }
      }
  }
  // we need to look at our matrix and find 2x2 square with vowels
  // [
  //  [ 'a', 'q', 'r', 's', 't'],
  //  [ 'u', 'k', 'a', 'e', 'i' ],
  //  [ 'f', 'f', 'o', 'o', 'o'],
  // ]


  // return the top-left position of the square holding vowels (i-j)
  console.log('result: ', result);
  return result;
}

VowelSquare(["abcd", "eikr", "oufj"]);
VowelSquare(["aqrst", "ukaei", "ffooo"]);
VowelSquare(["gg", "ff"]);