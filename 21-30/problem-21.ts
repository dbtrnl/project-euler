/* 
  Problem 21 - Amicable numbers

  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
  The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

  Evaluate the sum of all the amicable numbers under 10000.
*/

import { findAndSumAllDivisors } from '../utils';

interface amicableNumberInterface {
  isAmicable: boolean;
  pair: number[] | null;
}

const isAmicableNumber = (inputNum: number): amicableNumberInterface => {

  let firstNum = findAndSumAllDivisors(inputNum);
  let secondNum = findAndSumAllDivisors(firstNum);

  // If amicable number pair was found
  if (inputNum != firstNum && secondNum == inputNum) {
    return {
      isAmicable: true,
      pair: [inputNum, firstNum]
    }
  } else {
    return {
      isAmicable: false,
      pair: null
    }
  }
}

const findAmicableNumbersUnder = (maxLimit: number): Array<number> => {
  let array: number[] = [];

  for (let i = 0; i < maxLimit; i++) {

    // If i was already calculated, skip this iteration;
    if (array.includes(i)) continue;

    let iterator = isAmicableNumber(i);

    // If an amicable number pair was found
    if (iterator.isAmicable) {
      iterator.pair?.forEach(number => {
        array.push(number);
      });
    }
  }
  return array;
}

const main = (): void => {
  const amicableNumbersArray = findAmicableNumbersUnder(10000);
  let answer: number = 0;

  // Summing everything
  amicableNumbersArray.forEach(number => {
    answer += number;
  });

  console.log(`The answer is ${answer}`);
}

main();