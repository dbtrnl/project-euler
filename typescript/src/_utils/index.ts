import {
  CollatzSequenceObject,
  TripletSetObject,
} from '../_interfaces'

import {
  isPrime, findAllPrimesSmallerThan, findLargestPrimeFactor, findNthPrime, findPrimesWithNDigits,
} from './primeNumberUtils'

import {
  assembleTriangle, extractTriangleString, findMaximumPathSumOfTriangle,
} from './triangleUtils'

import {
  combination, combinationGeneral, factorial, factorialBigInt, isNumberPalindrome, numberLength, permutation,
  isNumberPermutationOfAnother, findAllPermutationsOfNumber, findAllPermutationsOfString, findRecurringSequence,
} from './simpleNumberUtils'

import {
  findAllDivisorsLinear, findAllProperDivisors, findAmicableChain, findAmicableNumbersUnder, isNumberAbundant,
  findAndSumAllDivisorsLinear, findAndSumAllProperDivisors, isAmicableNumber, isNumberEvenlyDivisibleBy,
  isEvenlyDivisibleByEveryNumberInInterval, isNumberDeficientPerfectOrAbundant, findProductOfDigitsInNumberSeries,
} from './divisorsProductsUtils'

import {
  polinomialPrimeFormula1One, polinomialPrimeFormulaTwo,
} from './polynomialUtils'

export {
  isPrime, findAllPrimesSmallerThan, findLargestPrimeFactor, findNthPrime, findPrimesWithNDigits,
  assembleTriangle, extractTriangleString, findMaximumPathSumOfTriangle,
  combination, combinationGeneral, factorial, factorialBigInt, isNumberPalindrome, numberLength, permutation,
  isNumberPermutationOfAnother, findAllPermutationsOfNumber, findAllPermutationsOfString, findRecurringSequence,
  findAllDivisorsLinear, findAllProperDivisors, findAmicableChain, findAmicableNumbersUnder, isNumberAbundant,
  findAndSumAllDivisorsLinear, findAndSumAllProperDivisors, isAmicableNumber, isNumberEvenlyDivisibleBy,
  isEvenlyDivisibleByEveryNumberInInterval, isNumberDeficientPerfectOrAbundant, findProductOfDigitsInNumberSeries,
  polinomialPrimeFormula1One, polinomialPrimeFormulaTwo,
}

/**
 * Find the Collatz sequence of a given number
 *
 * ---
 * @param {Number} num
 * @returns {CollatzSequenceObject} CollatzSequenceObject
 *
 * ---
 * @example findCollatzSequenceOf(5) = {
 * number: 5,
 * sequence: [ 5, 16, 8, 4, 2, 1 ]
 * }
 */
export function findCollatzSequenceOf(inputNumber: number): CollatzSequenceObject {
  const sequence = [inputNumber]
  let num = inputNumber

  while (num > 1) {
    if (num % 2 === 0) num /= 2
    else num = 3 * num + 1
    sequence.push(num)
  }
  return {
    number: inputNumber,
    sequence,
  }
}

/**
 * Find longest Collatz Sequence under number N
 *
 * ---
 * @param limit Number N
 * @returns {CollatzSequenceObject} CollatzSequenceObject
 *
 * ---
 * @example findLongestCollatzSequenceUnder(3) = {
 * number: 3,
 * sequence: [3, 10, 5, 16, 8, 4, 2, 1]
 * }
 */
export function findLongestCollatzSequenceUnder(limit: number): CollatzSequenceObject {
  let longestSequence: CollatzSequenceObject = {
    number: 0,
    sequence: [],
  }

  for (let i = 1; i < limit; i++) {
    const currentSequence = findCollatzSequenceOf(i)
    if (currentSequence.sequence.length > longestSequence.sequence.length) {
      longestSequence = currentSequence
      // console.log(`Longest Collatz sequence so far: ${longestSequence.sequence.length} terms, starting at number ${longestSequence.number}`);
    }
  }
  return longestSequence
}

/**
 * Find the sum of every squared number of the sequence
 *
 * Starting and ending of the sequence included.
 *
 * ---
 * @param {Number} intervalStart The start of the interval
 * @param {Number} intervalEnd The end of the interval
 * @returns {Number} sum
 *
 * ---
 * @example findSumOfNumberIntervalSquares(2, 4) = 29
 * // (2*2) + (3*3) + (4*4) = 29
 */
export function findSumOfNumberIntervalSquares(intervalStart: number, intervalEnd: number): number {
  let result = 0
  for (let i = intervalStart; i <= intervalEnd; i++) result += i ** 2

  return result
}

export function findAbundantNumbersUntil(limit: number): number[] {
  const abundantNumbersArray: number[] = []

  for (let i = 1; i <= limit; i++) {
    if (isNumberDeficientPerfectOrAbundant(i) === 'abundant') abundantNumbersArray.push(i)
  }
  return abundantNumbersArray
}

/**
 * Find the square of the sum of every number in the sequence
 *
 * Starting and ending of the sequence included.
 *
 * ---
 * @param {Number} intervalStart The start of the interval
 * @param {Number} intervalEnd The end of the interval
 * @returns {Number} sum
 *
 * ---
 * @example findSumOfNumberIntervalSquares(2, 4) = 81
 * // (2 + 3 + 4)^2 = 81
 */
export function findSquareOfNumberIntervalSum(intervalStart: number, intervalEnd: number): number {
  let result = 0
  for (let i = intervalStart; i <= intervalEnd; i++) result += i

  return result ** 2
}

export function isSetPythagoreanTriplet(inputSet: TripletSetObject): boolean {
  if (inputSet.a > inputSet.b || inputSet.a > inputSet.c) throw new Error('a must not be greater than b or c')
  if (inputSet.b > inputSet.c) throw new Error('b must not be greater than c')

  const aSquared = inputSet.a ** 2
  const bSquared = inputSet.b ** 2
  const cSquared = inputSet.c ** 2

  if (aSquared + bSquared === cSquared) return true
  return false
}

/**
 *
 * @param numArr a number array
 *
 * @param upperLimit upper limit of the sum. If greater, the sum is ignored
 * @returns {Set<number>}a number Set
 */
export function returnUniqueSumCombinationsOfTwoNumbers(numArr: number[], upperLimit: number): Set<number> {
  const finalArray: Set<number> = new Set()
  const numberArray = numArr

  numberArray.forEach(async (number) => {
    let currentNum = 0

    for (let i = 0; i < numberArray.length - 1; i++) {
      currentNum = number + numberArray[i]

      if (currentNum > upperLimit) continue

      // check if currentNum is present in finalArray takes too long
      // regardless, the final result is the same, but dunno the mathematical explanation
      finalArray.add(currentNum)
    }
  })
  return finalArray
}

/**
 * initialize a Matrix of matrixSize N filled with numbers or null-values
 *
 * ---
 * @param matrixSize matrix size N
 * @param filler number M or null
 *
 * ---
 * @returns {Array<number[]>} empty matrix
 */
export function initializeMatrix(matrixSize: number, filler: number | null): Array<number[]> {
  const matrix = [...new Array(matrixSize)].map(() => {
    return new Array(matrixSize).fill(filler)
  })
  return matrix
}

export function returnFibonacciNumbersUntil(limit: number): Array<number> {
  const fibArray = [1, 2]

  let iterator = 2
  let currentNumber = fibArray[iterator - 1] + fibArray[iterator - 2]

  while (currentNumber <= limit) {
    fibArray.push(currentNumber)
    iterator++
    currentNumber = fibArray[iterator - 1] + fibArray[iterator - 2]
  }
  return fibArray
}
