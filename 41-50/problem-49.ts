/*
  Problem 49 - Prime permutations

  The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways:
  (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

  There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property,
  but there is one other 4-digit increasing sequence.

  What 12-digit number do you form by concatenating the three terms in this sequence?
*/
import {
  findPrimesWithNDigits,
  findAllPermutationsOfString,
  isPrime,
} from '../utils';

(() => {
  function main(): void {
    const allPrimesWithFourDigits = findPrimesWithNDigits(4);
    for (let i = 0; i <= 1; i++) {
      const string = allPrimesWithFourDigits[i].toString();
      const possiblePermutations = findAllPermutationsOfString(string);

      if (typeof possiblePermutations === 'object') {
        possiblePermutations.forEach((permutation) => {
          if (!isPrime(parseInt(permutation, 10))) possiblePermutations.delete(permutation);
        });
      }

      console.log(possiblePermutations);
    }
  }
  main();
})();
