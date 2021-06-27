/* 
  A permutation is an ordered arrangement of objects.
  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
  If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
  The lexicographic permutations of 0, 1 and 2 are:

  012   021   102   120   201   210

  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

import { factorial } from '../utils/index';

const problemInput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const findTotalUniqueNumbers = (input: Array<number>): void => {
  let result = 0;
  let iterator = input.length;

  for (let i = input.length; i > 0; i--) {
    console.log(`The ${input[i - 1]} digit has ${i}! different values = ${factorial(iterator)}`)
    result += factorial(i);
    iterator--;
  }
  console.log(result)
}

const findLexicographicPermutations = (input: Array<number>): void => {
  findTotalUniqueNumbers(input);
}

findLexicographicPermutations(problemInput);