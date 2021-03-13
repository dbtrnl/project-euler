/*
  Problem 95 - Amicable chains

  The proper divisors of a number are all the divisors excluding the number itself.
  For example, the proper divisors of 28 are 1, 2, 4, 7, and 14.
  As the sum of these divisors is equal to 28, we call it a perfect number.

  Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers.
  For this reason, 220 and 284 are called an amicable pair.

  Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

  12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

  Since this chain returns to its starting point, it is called an amicable chain.

  Find the smallest member of the longest amicable chain with no element exceeding one million.
*/

import { findAndSumAllDivisors } from '../utils'

interface amicableChainObject {
  number: number;
  chain: number[];
  chainLength: number
}

const findAmicableChain = (number: number, limit: number): amicableChainObject => {
  let amicableChain: number[] = [number];
  let currentNum: number = findAndSumAllDivisors(number);

  while (!amicableChain.includes(currentNum) && currentNum <= limit) {
    amicableChain.push(currentNum)
    currentNum = findAndSumAllDivisors(currentNum);
  }

  return {
    number: number,
    chain: amicableChain,
    chainLength: amicableChain.length
  }
}

const main = () => {
  console.time('Main() total execution time');
  let longestChain: amicableChainObject = {
    number: 0,
    chain: [],
    chainLength: 0
  };

  // Longest chain below 10.000 = 3594 - 87 numbers

  for (let i = 1; i < 10000; i++) {
    let iterator = findAmicableChain(i, 1000000);
    if (iterator.chainLength > longestChain.chainLength) {
      longestChain = iterator;
      console.log(`Longest chain so far: ${longestChain.chainLength}, number ${longestChain.number}`);
    }
  }
  console.timeEnd('Main() total execution time')
}

main();