/* 
  Problem 21 - Amicable numbers

  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
  The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

  Evaluate the sum of all the amicable numbers under 10000.
*/
import { findAllDivisors } from '../utils';

interface divisorObject {
  divisors: Array<number>;
  sum: number;
}

const sumOfDivisors = (divisorsArray: Array<number>): number => {
  let result = 0;
  for (let i = 0; i < divisorsArray.length; i++) {
    result += divisorsArray[i];
  }
  return result;
}

const findAmicableNumberPairs = (number: number): void => {
  let divisors = findAllDivisors(number);
  let sum = sumOfDivisors(divisors);

  let divisorsOfSum = findAllDivisors(sum);

  if (number != sum && sumOfDivisors(divisorsOfSum) == number) {
    console.log(`${number} and ${sum} are amicable numbers!`);
  } else {
    // console.log(`${number} and ${sum} are NOT amicable numbers!`);
  }
}

const main = () => {
  let amicableNumbersArray: Array<number> = [];

  for (let i = 0; i < 10000; i++) {

    // If i is present in array, don't execute this iteration
    if (amicableNumbersArray.includes(i)) {
      continue;
    }

    // console.log(`executing ${i}...`)
    findAmicableNumberPairs(i);
  }
}

main();