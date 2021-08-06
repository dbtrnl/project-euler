import { DigitMapObject } from 'src/interfaces'

/**
 * Returns the result of N factorial (N!)
 *
 * ---
 * @param number Number N
 * @returns {Number} The result of N factorial
 *
 * ---
 * @example
 * factorial(5) = 120
 * factorial(12) = 479001600
 */
export function factorial(number: number): number {

  // Errors and edge cases
  if (number <= 0) throw new RangeError('Number should be greater than zero')
  if (number > 170) throw new RangeError('Number is too big, use factorialBigInt() instead')
  if (number === 1) return 1
  if (number === 2) return 2

  let result = 0

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
 * ---
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

/**
 * Function to calculate permutations of K elements in a pool of N elements.
 * Without repetition
 *
 * ---
 * @param {Number} n number N - The total pool of elements
 * @param {Number} k number K (must be greater or equal than N)
 * @returns {Number} the ammount of possible permutations
 */
export function permutationWithoutRepetition(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, the dividend will be 10 - 10! == 0, so it's disregarded
  if (n === k) return factorial(n)

  const result = factorial(n) / factorial(n - k)
  return result
}

// See
/**
 * Implementation of combination using only factorials:
 *
 * **n! / (n - k)! . k!**
 *
 * ---
 * @param {Number}} n number N - The total pool of elements
 * @param {Number}} k number K (must be greater or equal than N)
 * @returns {Number}} How many combinations of K in N
 */
export function combinationFactorial(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, there is only 1 possible way to pick K elements from N
  if (n === k) return 1

  const result = Math.floor(factorial(n) / (factorial(n - k) * factorial(k)))
  return result
}

/**
 * Implementation of combination using permutation:
 *
 * **Permutation(n,k) / k!**
 *
 * ---
 * @param {Number}} n number N - The total pool of elements
 * @param {Number}} k number K (must be greater or equal than N)
 * @returns {Number}} How many combinations of K in N
 */
export function combinationPermutation(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, there is only 1 possible way to pick K elements from N
  if (n === k) return 1

  // Using Math.floor to avoid floating point imprecision (when calculating C(30,2) for example)
  const result = Math.floor(permutationWithoutRepetition(n, k) / factorial(k))
  return result
}

/*
  An alternative to this function is to use template string:
  const length = `${number}`.length;

  (for floating point numbers, the dot is included in this count...)
*/
export function numberLength(number: number): number {
  const num = Math.abs(number)
  // const num = number
  const length = Math.ceil(Math.log10(num + 1))
  return length
}

/**
 * Finds if a number N is a palindrome
 *
 * ---
 * @param inputNumber number N
 * @returns {Boolean} If N is a palindrome
 *
 * ---
 * @example isNumberPalindrome(242) = true
 * @example isNumberPalindrome(2422) = false
 */
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

/**
 * Checks if number N is a permutation of number M
 *
 * ---
 * @param m First number to compare
 * @param n Second number to compare
 * @returns {Boolean} true | false
 *
 * ---
 * @example isNumberPermutationOfAnother(2223, 2232) = true
 * @example isNumberPermutationOfAnother(2224, 2232) = false
 */
export function isNumberPermutationOfAnother(m: number, n: number): boolean {
  const firstNumArr = m.toString().split('')
  const secondNumArr = n.toString().split('')

  // Creating an ordered Set of every unique digit in each number
  const digitsOfFirstNum = new Set(firstNumArr.sort())
  const digitsOfSecondNum = new Set(secondNumArr.sort())

  // If number of unique digits from each number is different, returns false.
  if (digitsOfFirstNum.size !== digitsOfSecondNum.size) return false

  // { '6': 0, '9': 0 }
  const firstDigitMap: DigitMapObject = {}
  const secondDigitMap: DigitMapObject = {}

  digitsOfFirstNum.forEach((digit) => { firstDigitMap[digit] = 0 })
  digitsOfSecondNum.forEach((digit) => { secondDigitMap[digit] = 0 })

  firstNumArr.forEach((digit) => { firstDigitMap[digit] += 1 })
  secondNumArr.forEach((digit) => { secondDigitMap[digit] += 1 })

  // Creates number array with ocurrences of each sorted digit in M and N
  const firstNumDigitOcurrences: Array<number> = Object.values(firstDigitMap)
  const secondNumDigitOcurrences: Array<number> = Object.values(secondDigitMap)

  // Compares both arrays to see if each digit occurs the sa
  for (let i = 0; i <= firstNumDigitOcurrences.length; i++) {
    if (firstNumDigitOcurrences[i] !== secondNumDigitOcurrences[i]) return false
  }

  return true
}

// This algorithm has viritually the same performance as the HEAP ALGORITHM below
// Took ~2.5s for number 1234567890
// Taken from https://levelup.gitconnecten.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
export function findAllPermutationsOfString(string: string): Array<string> {

  if (string.length < 2) return [string]

  const permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (const permut of findAllPermutationsOfString(remainingChars)) {
      permutationsArray.push(char + permut)
    }
  }
  return permutationsArray
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
    .map((digitArray) => { return parseInt(digitArray.join(''), 10) })
    .filter((number) => {
      if (numberLength(number) !== inputNumberLength) return false
      return true
    })
  return new Set(permutationsArray.sort())
}

/**
 * Function to find the recurring sequence in a given fraction
 *
 * See [Reference](https://www.geeksforgeeks.org/find-recurring-sequence-fraction/)
 *
 * ---
 * @example
 * findRecurringSequence(1, 3) = 3 // 1/3 = 0,3333...
 *
 * @param {Number} numerator Fraction numerator
 * @param {Number} denominator Fraction denominator
 * @returns {String} The recurring sequence (if any)
 */
export function findRecurringSequence(numerator: number, denominator: number): string {

  let result = ''
  if (numerator === denominator) return result

  const sequenceMap = new Map()
  sequenceMap.clear()

  // Find first remainder
  let remainder = numerator % denominator

  // Keep finding remainder until
  //  either remainder becomes 0 or repeats
  while ((remainder !== 0) && (!sequenceMap.has(remainder))) {
    // Store this remainder
    sequenceMap.set(remainder, result.length)

    // Multiply remainder with 10
    remainder *= 10

    // Append remainder / denominator to result
    const resPart = Math.floor(remainder / denominator)
    result += resPart.toString()

    // Update remainder
    remainder %= denominator
  }

  // If 1/10, remainder is zero... but 1 should be returned.

  if (remainder === 0) return ''
  else if (sequenceMap.has(remainder)) return result.substr(sequenceMap.get(remainder))
  else return ''
}
