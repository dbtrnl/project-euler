/*
  Problem 6 - Sum square difference

  The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,
  (1+2+...+10)^2 = 55^2 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025-385=2640
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

(() => {
  const findSumOfSquaresOfInterval = (lower: number, upper: number): number => {
    let result = 0;
    for (let i = lower; i <= upper; i++) {
      result += Math.pow(i, 2);
    }
    return result;
  };

  const findSquareOfSumOfInterval = (lower: number, upper: number): number => {
    let result = 0;
    for (let i = lower; i <= upper; i++) {
      result += i;
    }
    return Math.pow(result, 2);
  };

  const main = (): void => {
    const sumOfSquares = findSumOfSquaresOfInterval(1, 100);
    const squareOfSum = findSquareOfSumOfInterval(1, 100);

    const answer = squareOfSum - sumOfSquares;

    console.log(`The answer is ${answer}`);
  };

  main();
})()