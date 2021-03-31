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
    const possiblePermutationsOfThrees: Set<string> = new Set();

    for (let i = 0; i <= allPrimesWithFourDigits.length - 1; i++) {
      const currentNum = allPrimesWithFourDigits[i].toString();
      const possiblePermutations: string | Set<string> = findAllPermutationsOfString(currentNum);

      possiblePermutations.forEach((permutation) => {
        if (permutation[0] === '0' || permutation[1] === '0') {
          possiblePermutations.delete(permutation);
          return;
        }

        const permutationInt = parseInt(permutation, 10);
        if (!isPrime(permutationInt)) possiblePermutations.delete(permutation);
      });

      if (possiblePermutations.size === 3) {
        // console.log(`${currentNum} has THREE four digit permutations that are prime`);
        possiblePermutationsOfThrees.add(currentNum);
      }

      // if (possiblePermutations.size === 0) console.log(`${currentNum} has no four digit permutations that are prime`);
      // if (possiblePermutations.size === 3) console.log(`${currentNum} has THREE four digit permutations that are prime`);
      // if (possiblePermutations.size >= 3) console.log(`${currentNum} has ${possiblePermutations.size} 4-digit permutations that are prime`);
      // else console.log(`${currentNum} has ${possiblePermutations.size} 4-digit permutations that are prime`);
    }
    // Set with 123 numbers each with three permutations
    console.log(possiblePermutationsOfThrees);
  }
  main();
})();
