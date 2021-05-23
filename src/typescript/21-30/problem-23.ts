/*
  Problem 23 - Non-abundant sums
  
  A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
  For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

  A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

  As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
  By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
  However, this upper limit cannot be reduced any further by analysis even though it is known that
  the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

  Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

import { findAndSumAllProperDivisors } from '../utils';

(() => {
  const isNumberDeficientPerfectOrAbundant = (number: number) => {
    let sumOfDivisors = findAndSumAllProperDivisors(number);

    if (sumOfDivisors === number) return 'perfect';
    if (sumOfDivisors > number) return 'abundant';
    if (sumOfDivisors < number) return 'deficient';
  }

  const findAbundantNumbersUntil = (upperLimit: number): number[] => {
    let abundantNumbersArray: number[] = [];

    for (let i = 1; i <= upperLimit; i++) {
      if (isNumberDeficientPerfectOrAbundant(i) === 'abundant') abundantNumbersArray.push(i);
    }
    return abundantNumbersArray;
  }

  const returnAllSumsOfTwoAbundantNumbers = (abundantNumberArray: number[], upperLimit: number): number[] => {
    let finalArray: number[] = [];

    abundantNumberArray.map(number => {
      let currentNum = 0;

      for (let i = 0; i < abundantNumberArray.length - 1; i++) {
        currentNum = number + abundantNumberArray[i];
        
        if (currentNum > upperLimit) continue;

        if (!finalArray.includes(currentNum)) {
          console.log(`${currentNum} is not in the array`);
          finalArray.push(currentNum);
        }
      }
    });
    return finalArray;
  }

  const main = () => {
    const UPPER_LIMIT = 28123;

    const abundantNumbers = findAbundantNumbersUntil(UPPER_LIMIT);

    console.time('time elapsed summing abundant numbers');
    const sums = returnAllSumsOfTwoAbundantNumbers(abundantNumbers, UPPER_LIMIT);
    console.timeEnd('time elapsed summing abundant numbers');

    let numbersNotWrittenAsSumOfTwoAbundantNumbers: number[] = [];

    for (let i = 0; i < sums.length - 1; i++) {
      if (!sums.includes(i)) {
        console.log(`${i}`);
        numbersNotWrittenAsSumOfTwoAbundantNumbers.push(i);
      }
    }
    let answer = numbersNotWrittenAsSumOfTwoAbundantNumbers.reduce((sum, number) => {
      return sum += number;
    });
    console.log(`Answer is ${answer}`);
  }
  main();
})()