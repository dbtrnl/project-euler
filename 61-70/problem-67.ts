/*
  Problem 67 - Maximum path sum II

  By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

  3
  7 4
  2 4 6
  8 5 9 3

  That is, 3 + 7 + 4 + 9 = 23.
  Find the maximum total from top to bottom in triangle.txt (right click and Save Link/Target As), a 15K text file containing a triangle with one-hundred rows.
  This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)
 */

import { problem67Input } from '../data';

(() => {
  type Triangle = Array<TriangleRow>;
  type TriangleRow = Array<number>;

  const extractString = (inputString: string): string => {
    return inputString.substring(0, inputString.indexOf('\n'));
  };

  const assembleTriangle = (input: string): Array<TriangleRow> => {
    let NUMBER_OF_ROWS: number = 100;
    let FINAL_TRIANGLE: Array<TriangleRow> = [];
    let row: TriangleRow;
    let strRow: string | string[];

    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      // Extracting and splitting each string row
      strRow = extractString(input).split(' ');

      row = strRow.map((num: string) => {
        return parseInt(num);
      });

      FINAL_TRIANGLE.push(row);

      // Replacing the input to loop to the next string row
      input = input.replace(input.substring(0, input.indexOf('\n') + 1), '');
    }
    return FINAL_TRIANGLE;
  };

  const findMaximumPathSum = (triangle: Triangle): Triangle => {

    // Iterates each line of the triangle
    for (let i = triangle.length - 2; i >= 0; i--) {
      // Iterates each number of the row
      for (let j = 0; j <= i; j++) {
        triangle[i][j] = triangle[i][j] + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
      // Removes the biggest row
      triangle.pop();
    }
    return triangle;
  }

  const main = (): void => {
    const triangle = assembleTriangle(problem67Input);
    const answer = findMaximumPathSum(triangle);
    console.log('The answer is' + ' ' + answer);
  };

  main();
})();