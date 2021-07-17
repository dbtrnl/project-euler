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
  findAllPermutationsOfNumber,
  isPrime,
} from '../utils';

(() => {
  function main(): void {
    const allPrimesWithFourDigits = findPrimesWithNDigits(4)
    const allPermutationsArray: Array<number[]> = []

    for (let i = 0; i <= allPrimesWithFourDigits.length - 1; i++) {
      const currNum = allPrimesWithFourDigits[i]
      const currNumPermSet: Set<number> = findAllPermutationsOfNumber(currNum)

      // Delete permutations that aren't primes
      currNumPermSet.forEach((permutation) => {
        if (!isPrime(permutation)) currNumPermSet.delete(permutation)
      })

      const currNumPermArr = [...currNumPermSet]

      allPermutationsArray.push(currNumPermArr)
    }
    // 1000+ arrays of permutations to check...
    console.log(allPermutationsArray)
  }
  main()
})()
