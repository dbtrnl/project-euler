import {
  AllDivisors,
  AmicableChainObject,
  AmicableNumberObject,
  Divisors,
  Interval,
  NumberClassification,
  OrderEnum,
} from '../interfaces'

/**
 * Returns all proper divisors of a number (Excludes the number itself)
 *
 * Execution in O(sqrt(n))
 *
 * ---
 * @param {number} number N >= 0
 * @example findAllProperDivisors(6) = [1, 2, 3]
 * @example findAllProperDivisors(100) = [1, 2, 4, 5, 10, 20, 25, 50]
 * @returns {Array<number>} An array with the divisors
 */
export function findAllProperDivisors(inputNumber: number): AllDivisors {
  /*
    TODO - Make this function work with negative numbers
    TODO - Return final array in ascending order
  */
  let number = inputNumber
  const numberLength = `${inputNumber}`.length
  const divisors: Array<number> = [1]

  // Edge cases
  if (number === 0) return null
  if (number < 0) number = Math.abs(number)
  if (number === 1 || number === 2) return divisors

  // The logic of this if needs to be refined...
  if (numberLength < 3) {
    for (let i = 2; i <= number; i++) {
      if (number === i) continue; if (number % i === 0) divisors.push(i)
    }
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        if (number / i === i || i === 1) divisors.push(i)
        else { divisors.push(i); divisors.push(number / i) }
      }
    }
  }
  return divisors
}

/**
 * Returns all divisors of a number
 *
 * Execution in O(n)
 *
 * ---
 * @param {number} inputNumber N >= 0
 * @example findAllDivisors(6) = [1, 2, 3, 6]
 * @example findAllDivisors(100) = [1, 2, 4, 5, 10, 20, 25, 50, 100]
 * @returns {Array<number>} An array with the divisors
 */
export function findAllDivisors(inputNumber: number): AllDivisors {
  /*
    TODO - Make this function work with negative numbers
    TODO - Return final array in ascending order
  */
  let number = inputNumber
  const divisors: Array<number> = []

  // Edge cases
  if (number === 0) return null
  if (number < 0) number = Math.abs(number)

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisors.push(i)
  }
  return divisors
}

/**
 * Returns the sum of all the proper divisors of a given number
 *
 * ---
 * @param {number} inputNumber The number
 * @returns {number} The sum of all proper divisors
 */
export function findAndSumAllProperDivisors(inputNumber: number): Divisors {
  const number = inputNumber
  let sum = 0
  const properDivisors = findAllProperDivisors(number)

  if (!properDivisors) return null

  sum = properDivisors.reduce((total, num) => {
    return total + num
  })
  return sum
}

/**
 * Returns the sum of all divisors of a given number
 *
 * ---
 * @param {number} inputNumber N >= 0
 * @returns {number} The sum of all divisors
 */
export function findAndSumAllDivisors(inputNumber: number): Divisors {
  const number = inputNumber
  let sum = 0
  const properDivisors = findAllDivisors(number)

  if (!properDivisors) return null

  sum = properDivisors.reduce((total, num) => {
    return total + num
  })
  return sum
}

/**
 * Returns if a number is evenly divisible by another
 *
 * ---
 * @param {number} inputNumber The number to be divided
 * @param {number} divisor The divisor
 * @throws {RangeError} RangeError with arguments <= 0
 * @returns {boolean} true or false
 */
export function isNumberEvenlyDivisibleBy(inputNumber: number, divisor: number): boolean {
  if (inputNumber <= 0 || divisor <= 0) throw new RangeError('Both arguments must be greater than zero!')
  if (inputNumber % divisor === 0) return true
  else return false
}

/**
 * Returns if a number is evenly divisible by every number in a given interval
 *
 * @param {number} inputNumber The number to be checked
 * @param {Array<number>} param1 The interval
 * @param {OrderEnum} order The iteration order (influences the performance)
 * @returns
 */
export function isEvenlyDivisibleByEveryNumberInInterval(
  inputNumber: number,
  [intervalStart, intervalEnd]: Interval,
  order: OrderEnum,
): boolean {
  const number = inputNumber
  let result = false
  let iterator

  if (intervalStart > intervalEnd) throw new RangeError('Interval start must not be greater than interval end')

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
  if (inputNum < 0) throw new RangeError('Number must be greater or equal than zero')

  const amicableObject: AmicableNumberObject = { isAmicable: false, pair: null }

  const firstNum = findAndSumAllProperDivisors(inputNum)

  // Checking if not null so the transpiler doesn't complain
  if (!firstNum) return amicableObject

  const secondNum = findAndSumAllProperDivisors(firstNum)

  // If amicable number pair was found
  if (inputNum !== firstNum && secondNum === inputNum) {
    amicableObject.isAmicable = true
    amicableObject.pair = [inputNum, firstNum]

    return amicableObject
  }
  return amicableObject
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
  if (maxLimit < 0) throw new RangeError('Number must be greater or equal than zero')

  const array: number[] = []

  if (maxLimit === 0) return array

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
  if (number === 0) throw new RangeError('Number must be different from zero!')

  const sumOfDivisors = findAndSumAllProperDivisors(number)

  // If findAndSumAllProperDivisors() is called with 0
  if (!sumOfDivisors) return null

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
export function isNumberAbundant(number: number): boolean | null {
  if (number === 0) throw new RangeError('Number must be different from zero!')

  const sumOfDivisors = findAndSumAllProperDivisors(number)

  if (!sumOfDivisors) return null
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
  // let currentNum: Divisors = findAndSumAllDivisors(number)

  const chainObject: AmicableChainObject = {
    number,
    chain: null,
    chainLength: null,
  }

  // while (!amicableChain.includes(currentNum) && currentNum <= limit) {
  //   amicableChain.push(currentNum)
  //   currentNum = findAndSumAllDivisors(currentNum)
  // }

  return chainObject
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
