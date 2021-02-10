console.log(
  '-----\nThe sum of the squares of the first ten natural numbers is, 1^2 + 2^2 ... + 10^2 = 385\nThe square of the sum of the first ten natural numbers is, (1+2+...+10)^2 = 55^2 = 3025\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025-385=2640\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.\n-----\n'
);

const findSumOfSquaresOfInterval = (lower, upper) => {
  let result = 0;

  for (i = lower; i <= upper; i++) {
    result += Math.pow(i, 2);
  }
  // console.log(`The sum of the squares of ${lower} to ${upper} is ${result}`);
  return result;
};

const findSquareOfSumOfInterval = (lower, upper) => {
  let result = 0;
  for (i = lower; i <= upper; i++) {
    result += i;
  }
  // console.log(`The square of sum of interval ${lower} to ${upper} is ${Math.pow(result, 2)}`);
  return Math.pow(result, 2);
};

const findDifferenceBetweenSquareOfSumAndSumOfSquares = () => {
  const sumOfSquares = findSumOfSquaresOfInterval(1, 100);
  const squareOfSum = findSquareOfSumOfInterval(1, 100);

  const solution = squareOfSum - sumOfSquares;

  console.log(`The solution of problem 6 is ${solution}`);
};

findDifferenceBetweenSquareOfSumAndSumOfSquares();