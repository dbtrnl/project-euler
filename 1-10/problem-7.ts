/*
  Problem 7 - 10001st prime

  By listing the first six prime numbers:
  2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10.001st prime number?
*/

import { findNthPrime } from '../utils';
/*
  Execution time: ~10 miliseconds
*/
const problem7 = ((): number => {
  const main = (): number => {
    const nth = 10001;
    const nthPrime = findNthPrime(nth);

    console.log(`The ${nth} prime is: ${nthPrime}`);
    return nthPrime;
  };

  const result = main();
  return result;
});

export default problem7;

/*
  First solution
  This one takes ~11 seconds to execute
*/

/*
(() => {
  const findIfNumberIsPrime = (number: number) => {
    for (let i = number - 1; i > 1; i--) {
      if (number % i == 0) {
        return false;
      }
    }
    // console.log(`Number ${number} is prime`);
    return number;
  };

  const primeNumberArray = [];
  const desiredPrime = 10001;

  // Beginning at 2 since 1 isn't a prime number
  let iterator = 2;
  console.time('time');
  while (primeNumberArray.length < desiredPrime + 1) {
    let prime = findIfNumberIsPrime(iterator);
    iterator++;

    if (prime !== false) {
      primeNumberArray.push(prime);
    }
  }

  console.log(`The ${desiredPrime} prime number is ${primeNumberArray[desiredPrime - 1]}`);
  console.timeEnd('time');
})()
*/
