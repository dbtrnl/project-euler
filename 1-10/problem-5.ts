/*
  Problem 5 - Smallest multiple

  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
import { isEvenlyDivisibleByEveryNumberInInterval } from '../utils';

const problem5 = ((): number => {
  const main = (): number => {
    const MIN_DIVISOR = 1;
    const MAX_DIVISOR = 20;

    let currentNumber = 1;
    let isDivisible = false;

    while (isDivisible === false) {
      isDivisible = isEvenlyDivisibleByEveryNumberInInterval(currentNumber, [MIN_DIVISOR, MAX_DIVISOR]);
      if (isDivisible) break;
      currentNumber++;
    }
    console.log(`First number equally divisible by every number in interval ${MIN_DIVISOR} to ${MAX_DIVISOR} is ${currentNumber}`);
    return currentNumber;
  };
  const result = main();
  return result;
});

export default problem5;
