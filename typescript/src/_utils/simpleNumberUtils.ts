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
 * @param firstNum number N
 * @param secondNum number M
 * @returns {Boolean} true | false
 *
 * ---
 * @example isNumberPermutationOfAnother(2223, 2232) = true
 * @example isNumberPermutationOfAnother(2224, 2232) = false
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
