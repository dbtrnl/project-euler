console.log(
  '-----\nStarting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.How many such routes are there through a 20×20 grid?\n-----\n'
);

/* 
  For a 2x2 grid, there are 3x3 routes possible:
  [0,0] > [0,1] > [0,2] > [1,2] > [2,2]
  ... etc

  So for a N x N grid, we need to create a N+1 x N+1 matrix.
*/

const calculateFactorial = (number) => {
  let result = 0;
  for (let i = number; i > 1; i--) {
    if (i == number) {
      // console.log(`${result} += ${i} * (${i} - 1)`);
      result += i * (i - 1);
    } else {
      // console.log(`${result} *= ${i} - 1`);
      result *= i - 1;
    }
  }
  return result;
};

const main = (row, col) => {
  let gridRowSize = row;
  let gridColumnSize = col;

  let answer =
    calculateFactorial(gridRowSize + gridColumnSize) /
    calculateFactorial(gridRowSize) /
    calculateFactorial(gridColumnSize);

  answer = Math.round(answer);

  console.log(
    `For a ${gridRowSize} by ${gridColumnSize} grid, there are ${answer} possible paths;`
  );
};

main(20, 20);