/*
  Problem 10 - Summation of primes
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\nFind the sum of all the primes below two million
*/

/*
const func1 = (number) => {
  for (i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      return false;
    }
  }
  console.log(`Number ${number} is prime`);
  return number;
};

const func2 = (number) => {
  for (i = number - 1; i > 1; i--) {

    // What prperty of prime numbers is this?
    if (number % 2 == 0 || number % 3 == 0) return false;

    if (number % i == 0) {
      return false;
    }
  }
  console.log(`Number ${number} is prime`);
  return number;
};
*/

/*
**Performance for prime-checking algorithm**

Original (func1 above)
  Takes ~51s to execute to 200 thousand primes

With check of %2 and %3 (func 2 above)
  Takes ~23s to execute 200 thousand primes

  Optimized algorithm
    207.251ms - 2 million
    4.913s - 20 million
    2:26.069min - 200 million
*/

/*
  // Func 3 - not optimized, takes a long time to calculate

const findIfNumberIsPrime = (number: number) => {
  if (number <= 1) return false;
  if (number <= 3) {
    // console.log(`Number ${number} is prime`);
    return number;
  }
  // Research this property of primes... Every prime is odd, but what about %3?
  if (number % 2 == 0 || number % 3 == 0) return false;

  for (let i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  // console.log(`Number ${number} is prime`);
  return number;
};

let primeNumberSum = 0;

// Beginning at 2 since 1 isn't a prime number
let iterator = 0;

console.time('time elapsed iterating');
// This will take O(n) to finish...
while (iterator < 200000000) {
  let prime = findIfNumberIsPrime(iterator);
  iterator++;

  if (prime !== false) {
    primeNumberSum += prime;
  }
}
console.timeEnd('time elapsed iterating');
console.log(primeNumberSum);
 */

/*
  func 4 - Last optimization
*/

import { findAllPrimesSmallerThan } from '../utils'

export default function problem10(): number {
  const main = (): number => {
    const MAX_PRIME_VALUE = 2000000
    const primesArray = findAllPrimesSmallerThan(MAX_PRIME_VALUE)

    const answer = primesArray
      .reduce((sum, number) => {
        return sum + number
      })

    return answer
  }
  const result = main()
  return result
}
