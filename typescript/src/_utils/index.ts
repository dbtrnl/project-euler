import {
  amicableChainObject,
  amicableNumberObject, CollatzSequenceObject, NumberClassification, TripletSetObject,
} from '../_interfaces'

/*
  An alternative to this function is to use template string:
  const length = `${number}`.length;

  (for floating point numbers, the dot is included in this count...)
*/
export function numberLength(number: number): number {
  const num = number
  const length = Math.ceil(Math.log10(num + 1))
  return length
}

/**
 * Returns the result of N factorial (N!)
 * @param number Number N
 * @example
 * factorial(5) = 120
 * factorial(12) = 479001600
 * @returns {Number} The result of N factorial
 */
export function factorial(number: number): number {
  let result = 0
  if (number === 1) return 1
  if (number === 2) return 2

  for (let i = number; i > 1; i--) {
    if (i === number) result += i * (i - 1)
    else result *= i - 1
  }
  return result
}

/**
 * BigInt implementation of factorial function
 *
 * Returns the result of N factorial (N!)
 *
 * @param {Number} number number N
 * @returns {BigInt} factorial of number N
 */
export function factorialBigInt(n: number): BigInt {
  let factorialIterator = BigInt(0)
  let result = BigInt(1)
  const inputNumber = BigInt(n)

  if (inputNumber === BigInt(1)) return BigInt(1)
  if (inputNumber === BigInt(2)) return BigInt(2)

  for (factorialIterator = inputNumber; factorialIterator > BigInt(1); factorialIterator--) {
    result *= factorialIterator
  }
  return result
}

export function permutation(n: number, k: number): number {
  return factorial(n) / factorial(n - k)
}

// See https://betterexplained.com/articles/easy-permutations-and-combinations/
export function combinationGeneral(n: number, k: number): number {
  return factorial(n) / (factorial(n - k) * factorial(k))
}

export function combination(n: number, k: number): number {
  return permutation(n, k) / factorial(k)
}

/**
 * Checks if a given number is prime
 * @param {Number} num The number to be checked
 * @example isPrime(3) = 3
 * isPrime(4) = false
 * @returns {Number | Boolean} The number itself (if prime) or false (if not prime)
 */
export function isPrime(num: number): number | false {
  if (num <= 1) return false

  // 2 and 3 are both primes
  if (num <= 3) return num

  // Research this property of primes... Every prime is odd, but what about %3?
  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  // console.log(`Number ${num} is prime`);
  return num
}

/*
  Takes O(sqrt(n)) to execute
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

/*
  Takes O(n) to execute
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

/**
 * Finds all prime numbers smaller than N (N >= 0)
 * @param limit
 * @example findAllPrimesSmallerThan(10) = [ 2, 3, 5, 7 ]
 * // Returns the 4 prime numbers smaller than 10
 * @returns {Array<number>} Prime number array
 */
export function findAllPrimesSmallerThan(limit: number): Array<number> {
  const primeArray: Array<number> = []
  let iterator = 0

  while (iterator < limit) {
    if (isPrime(iterator)) primeArray.push(iterator)
    iterator++
  }
  return primeArray
}

/**
 *
 * @param nthPrime Finds the Nth prime number
 * @example findNthPrime(50) = 229
 * // 229 is the 50th prime number
 * @returns
 */
export function findNthPrime(nthPrime: number): number {
  const primeArray: Array<number> = []
  let iterator = 0

  while (primeArray.length < nthPrime) {
    if (isPrime(iterator)) primeArray.push(iterator)
    iterator++
  }
  return primeArray[nthPrime - 1]
}

/**
 * Find prime numbers with N number of digits
 * @param {Number} digits Desired number of digits
 * @returns {Number} How many prime numbers have N digits
 */
export function findPrimesWithNDigits(digits: number): Array<number> {
  const primeArray: Array<number> = []
  let upperLimitNum: string | number = ''
  let iterator = 0

  // Defining the Max number dynamically (999 for 3 digits, etc)
  for (let i = 0; i < digits; i++) {
    upperLimitNum += '9'
  }
  upperLimitNum = parseInt(upperLimitNum, 10)

  while (iterator < upperLimitNum) {
    if (isPrime(iterator) && iterator.toString().length === digits) primeArray.push(iterator)
    iterator++
  }
  return primeArray
}

export function findLargestPrimeFactor(inputNumber: number): number {
  /*
    While number is divisible by 2, divide by 2.
    In the end you have 1 or another odd number
  */

  let number = inputNumber

  while (number % 2 === 0) {
    number /= 2
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      number /= i
    }
  }

  if (number > 2) {
    // console.log(`Largest prime factor of ${inputNumber} = ${number}`);
  }
  return number
}

/**
 * Find the Collatz sequence of a given number
 * @param n
 * @example findCollatzSequenceOf(5) = {
 * number: 5,
 * sequence: [ 5, 16, 8, 4, 2, 1 ]
 * }
 * @returns {CollatzSequenceObject} CollatzSequenceObject
 */
export function findCollatzSequenceOf(n: number): CollatzSequenceObject {
  const sequence = [n]
  let number = n

  while (number > 1) {
    if (number % 2 === 0) number /= 2
    else number = 3 * number + 1
    sequence.push(number)
  }
  return {
    number: n,
    sequence,
  }
}

/**
 * Find longest Collatz Sequence under number N
 * @param limit
 * @example findLongestCollatzSequenceUnder(3) = {
 * number: 3,
 * sequence: [3, 10, 5, 16, 8, 4, 2, 1]
 * }
 * @returns {CollatzSequenceObject} CollatzSequenceObject
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
 * @param {Number} intervalStart The start of the interval
 * @param {Number} intervalEnd The end of the interval
 * @example findSumOfNumberIntervalSquares(2, 4) = 29
 * // (2*2) + (3*3) + (4*4) = 29
 * @returns {Number} sum
 */
export function findSumOfNumberIntervalSquares(intervalStart: number, intervalEnd: number): number {
  let result = 0
  for (let i = intervalStart; i <= intervalEnd; i++) result += i ** 2

  return result
}

/**
 * Find the square of the sum of every number in the sequence
 *
 * Starting and ending of the sequence included.
 * @param {Number} intervalStart The start of the interval
 * @param {Number} intervalEnd The end of the interval
 * @example findSumOfNumberIntervalSquares(2, 4) = 81
 * // (2 + 3 + 4)^2 = 81
 * @returns {Number} sum
 */
export function findSquareOfNumberIntervalSum(intervalStart: number, intervalEnd: number): number {
  let result = 0
  for (let i = intervalStart; i <= intervalEnd; i++) result += i

  return result ** 2
}

/**
 * Checks if a given number is a permutation of another number
 * @param firstNum
 * @param secondNum
 * @example isNumberPermutationOfAnother(2223, 2232) = true
 * @example isNumberPermutationOfAnother(2224, 2232) = false
 * @returns {Boolean}
 */
export function isNumberPermutationOfAnother(firstNum: number, secondNum: number): boolean {
  const firstNumArr = firstNum.toString().split('')
  const secondNumArr = secondNum.toString().split('')
  let includes = true
  // console.log(`firstNumArr: ${firstNumArr}, secondNumArr: ${secondNumArr}`);

  if (firstNumArr.length !== secondNumArr.length) return false

  // Try a for loop + break to see impact in performance
  firstNumArr.forEach((digit) => {
    if (!secondNumArr.includes(digit)) includes = false
  })

  secondNumArr.forEach((digit) => {
    if (!firstNumArr.includes(digit)) includes = false
  })

  return includes
}

// This algorithm has viritually the same performance as the HEAP ALGORITHM below
// Took ~2.5s for number 1234567890
// Taken from https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
export function findAllPermutationsOfString(string: string): Set<string> {
  if (!string || typeof string !== 'string') throw new Error('Please enter a string')

  if (string.length < 2) return new Set(string)

  const permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (const permut of findAllPermutationsOfString(remainingChars)) {
      permutationsArray.push(char + permut)
    }
  }
  // Return a Set to eliminate duplicate permutations
  return new Set(permutationsArray)
}

// Uses HEAP'S ALGORITHM
// Taken from https://stackoverflow.com/a/37580979/13289772
export function findAllPermutationsOfNumber(inputNumber: number): Set<number> {
  const inputNumberLength = numberLength(inputNumber)

  const numArray = inputNumber.toString().split('')
  const numbersMatrix = [numArray.slice()]

  const numArrayLength = numArray.length
  const zeroesArray = new Array(numArrayLength).fill(0)

  let iterator = 1
  let registerOne
  let registerTwo

  while (iterator < numArrayLength) {
    if (zeroesArray[iterator] < iterator) {
      registerOne = iterator % 2 && zeroesArray[iterator]
      registerTwo = numArray[iterator]

      numArray[iterator] = numArray[registerOne]
      numArray[registerOne] = registerTwo

      ++zeroesArray[iterator]
      iterator = 1

      numbersMatrix.push(numArray.slice())
    } else {
      zeroesArray[iterator] = 0
      ++iterator
    }
  }
  /*
    map() to assemble the numbers from digit arrays
    Then filter() numbers with length smaller than the inputNumber
    (e.g. 0010 when input is 1000)
   */
  const permutationsArray = numbersMatrix
    .map((digitArray) => {
      return parseInt(digitArray.join(''), 10)
    })
    .filter((number) => {
      if (numberLength(number) !== inputNumberLength) {
        return false
      }
      return true
    })
  return new Set(permutationsArray.sort())
}

export function isNumberPalindrome(inputNumber: number): boolean {
  const num: string = inputNumber.toString()
  const numArr: string[] = [...num]
  const inverseNum: string[] = []

  let register = ''
  let revNum = ''

  for (let k = 0; k <= num.length - 1; k++) {
    register = numArr.pop()!
    inverseNum.push(register)
  }

  revNum = inverseNum.join(',').replace(/,/g, '')

  if (num === revNum) return true
  return false
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

export function isEvenlyDivisibleByEveryNumberInInterval(
  inputNumber: number,
  [intervalStart, intervalEnd]: number[],
): boolean {
  const number = inputNumber
  let result = false
  let iterator = intervalStart

  if (intervalStart > intervalEnd) throw new Error('Interval start must not be greater than interval end')

  while (iterator <= intervalEnd) {
    if (iterator === intervalEnd && number % iterator === 0) {
      result = true
      break
    }
    if (number % iterator !== 0) break
    iterator++
  }
  return result
}

/**
 * Polynomial formula for numbers 0 <= N <= 39
 * @param {Number} n The starting number
 * @returns {Number}
 */
export function polinomialPrimeFormula1One(n: number): number {
  const number = (n ** 2) + n + 41
  return number
}

/**
 * Polynomial formula for numbers 0 <= N <= 79
 * @param {Number} n The starting number
 * @returns {Number}
 */
export function polinomialPrimeFormulaTwo(n: number): number {
  const number = (n ** 2) - (79 * n) + 1601
  return number
}

/**
 * Checks input number N for amicability
 * @param inputNum
 * @example isAmicableNumber(1000) = { isAmicable: false, pair: null }
 * @example isAmicableNumber(220) = { isAmicable: true, pair: [ 220, 284 ] }
 * @returns
 */
export function isAmicableNumber(inputNum: number): amicableNumberObject {
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
 * @param number
 * @returns
 */
export function isNumberDeficientPerfectOrAbundant(number: number): NumberClassification {
  const sumOfDivisors = findAndSumAllProperDivisors(number)

  if (sumOfDivisors === number) return 'perfect'
  if (sumOfDivisors > number) return 'abundant'
  if (sumOfDivisors < number) return 'deficient'

  return null
}

/**
 * THIS FUNCTION IS STILL A WORK IN PROGRESS
 *
 * USED IN PROBLEM 95
 * @param number
 * @param limit
 * @returns
 */
export function findAmicableChain(number: number, limit: number): amicableChainObject {
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
