/*
  Problem 3 - Largest Prime Factor
  The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143?

  -----

  Explanation
  13195 / 29 = 455
  455 / 13 = 35
  35 / 7 = 5
  5 / 5 = 1

  References
  https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
  https://www.mathsisfun.com/prime-factorization.html
*/

import { findLargestPrimeFactor } from '../utils';

const problem3 = ((): number => {
  const PROBLEM_INPUT = 600851475143;

  const result = findLargestPrimeFactor(PROBLEM_INPUT);
  return result;
});

export default problem3;
