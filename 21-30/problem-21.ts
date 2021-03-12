/* 
  Problem 21 - Amicable numbers

  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
  The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

  Evaluate the sum of all the amicable numbers under 10000.
*/

import { findAllDivisors } from '../utils';

interface amicableNumberInterface {
  isAmicable: boolean;
  pair: number[] | null;
}

const sumOfDivisors = (divisorsArray: number[]): number => {
  let sum = 0;
  for (let i = 0; i < divisorsArray.length; i++) {
    sum += divisorsArray[i];
  }
  return sum;
}

const isAmicableNumber = (number: number): amicableNumberInterface => {
  let divisors = findAllDivisors(number);
  let sum = sumOfDivisors(divisors);

  let divisorsOfSum = findAllDivisors(sum);

  if (number != sum && sumOfDivisors(divisorsOfSum) == number) {
    return {
      isAmicable: true,
      pair: [number, sum]
    }
  } else {
    return {
      isAmicable: false,
      pair: null
    }
  }
}

const main = () => {
  let amicableNumbersArray: number[] = [];
  let answer: number = 0;

  for (let i = 0; i < 10000; i++) {

    // If i was already calculated, skip this iteration;
    if (amicableNumbersArray.includes(i)) continue;

    let iterator = isAmicableNumber(i);

    // If an amicable number pair was found
    if (iterator.isAmicable) {
      iterator.pair?.forEach(number => {
        amicableNumbersArray.push(number);
      });
    }
  }

  console.log(`Amicable Numbers found: ${amicableNumbersArray}`)

  // Summing everything
  amicableNumbersArray.forEach(number => {
    answer += number;
  });

  console.log(`The answer is ${answer}`);
}

main();