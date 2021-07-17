import {
  AmicableChainObject, AmicableNumberObject, NumberClassification, OrderEnum,
} from '../interfaces'

/**
 * Returns all proper divisors of a number
 *
 * Execution in O(sqrt(n))
 *
 * ---
 * @param {Number} number N >= 0
 * @returns
 */
export function findAllProperDivisors(number: number): Array<number> {
  const divisors: Array<number> = [1]

  if (number === 1) return divisors

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (number / i === i || i === 1) divisors.push(i)
      else {
        divisors.push(i)
        divisors.push(number / i)
      }
    }
  }
  return divisors
}

export function findAndSumAllProperDivisors(number: number): number {
  const sum: number = findAllProperDivisors(number)
    .reduce((total, num) => {
      return total + num
    })
  return sum
}

/**
 * Returns all proper divisors of a number
 *
 * Execution in O(n)
 *
 * ---
 * @param {Number} number N >= 0
 * @returns
 */
export function findAllDivisorsLinear(number: number): Array<number> {
  // console.log(`Calculating divisors of ${number}...`);
  const divisors: Array<number> = []

  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i)
  }
  return divisors
}

/*
  Takes O(n) to execute
*/
export function findAndSumAllDivisorsLinear(number: number): number {
  const divisors: Array<number> = []
  let sum = 0

  if (number === 1) return 1

  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i)
  }
  divisors.forEach((num) => {
    sum += num
  })
  return sum
}

export function isEvenlyDivisibleByEveryNumberInInterval(
  inputNumber: number,
  [intervalStart, intervalEnd]: number[],
  order: OrderEnum,
): boolean {
  const number = inputNumber
  let result = false
  let iterator

  if (intervalStart > intervalEnd) throw new Error('Interval start must not be greater than interval end')

  if (order === 'ascending') {
    iterator = intervalStart
    while (iterator <= intervalEnd) {
      if (iterator === intervalEnd && number % iterator === 0) {
        result = true
        break
      }
      if (number % iterator !== 0) break
      iterator++
    }
  }

  if (order === 'descending') {
    iterator = intervalEnd
    while (iterator >= intervalStart) {
      if (iterator === intervalStart && number % iterator === 0) {
        result = true
        break
      }
      if (number % iterator !== 0) break
      iterator--
    }
  }

  return result
}

export function isNumberEvenlyDivisibleBy(inputNumber: number, divisor: number): boolean {
  if (inputNumber % divisor === 0) return true
  else return false
}

/**
 * Checks input number N for amicability
 *
 * ---
 * @param inputNum number N
 * @returns {AmicableNumberObject} AmicableNumberObject
 *
 * ---
 * @example isAmicableNumber(1000) = { isAmicable: false, pair: null }
 * @example isAmicableNumber(220) = { isAmicable: true, pair: [ 220, 284 ] }
 */
export function isAmicableNumber(inputNum: number): AmicableNumberObject {
  const firstNum = findAndSumAllProperDivisors(inputNum)
  const secondNum = findAndSumAllProperDivisors(firstNum)

  // If amicable number pair was found
  if (inputNum !== firstNum && secondNum === inputNum) {
    return {
      isAmicable: true,
      pair: [inputNum, firstNum],
    }
  }
  return {
    isAmicable: false,
    pair: null,
  }
}

/**
 * Finds all Amicable numbers under limit N
 *
 * ---
 * @param maxLimit number N
 * @returns {Array<number>} Array of amicable numbers under N
 *
 *  ---
 * @example findAmicableNumbersUnder(300) = [ 220, 284 ]
 * @example findAmicableNumbersUnder(2000) = [ 220, 284, 1184, 1210 ]
 */
export function findAmicableNumbersUnder(maxLimit: number): Array<number> {
  const array: number[] = []

  for (let i = 0; i < maxLimit; i++) {
    // If i was already calculated, skip this iteration;
    if (array.includes(i)) continue

    const iterator = isAmicableNumber(i)
    // console.log(iterator);

    // If an amicable number pair was found
    if (iterator.isAmicable) {
      iterator.pair?.forEach((number) => {
        array.push(number)
      })
    }
  }
  return array
}

/**
 * Returns if number N is perfect (sum of divisors == N),
 * abundant (sum of divisors > N),
 * or deficient (sum of divisors < N)
 *
 * ---
 * @param number
 * @returns {NumberClassification} 'perfect' | 'abundant' | 'deficient'
 */
export function isNumberDeficientPerfectOrAbundant(number: number): NumberClassification {
  const sumOfDivisors = findAndSumAllProperDivisors(number)

  if (sumOfDivisors === number) return 'perfect'
  if (sumOfDivisors > number) return 'abundant'
  if (sumOfDivisors < number) return 'deficient'

  return null
}

/**
 * Returns if number N is abundant (sum of divisors > N),
 *
 * ---
 * @param number
 * @returns {Boolean} true / false
 */
export function isNumberAbundant(number: number): boolean {
  const sumOfDivisors = findAndSumAllProperDivisors(number)

  if (sumOfDivisors > number) return true

  return false
}

/**
 * THIS FUNCTION IS STILL A WORK IN PROGRESS
 *
 * USED IN PROBLEM 95
 * @param number
 * @param limit
 * @returns
 */
export function findAmicableChain(number: number, limit: number): AmicableChainObject {
  const amicableChain: number[] = [number]
  let currentNum: number = findAndSumAllDivisorsLinear(number)

  while (!amicableChain.includes(currentNum) && currentNum <= limit) {
    amicableChain.push(currentNum)
    currentNum = findAndSumAllDivisorsLinear(currentNum)
  }

  return {
    number,
    chain: amicableChain,
    chainLength: amicableChain.length,
  }
}

/**
 * Returns the product of all digits in a number series passed in string format
 *
 * ---
 * @param {String} digitSeries
 * @returns {Number} THe product
 *
 * ---
 * @example findProductOfDigitsInNumberSeries('2224') = 32
 * @example findProductOfDigitsInNumberSeries('2204') = 0
 */
export function findProductOfDigitsInNumberSeries(digitSeries: string): number {
  const product: number = digitSeries
    .split('')
    .map((number) => {
      return parseInt(number, 10)
    })
    .reduce((currentProduct: number, currentNumber: number) => {
      return currentProduct * currentNumber
    })
  return product
}
