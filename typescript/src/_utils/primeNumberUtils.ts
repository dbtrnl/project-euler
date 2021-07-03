/**
 * Checks if a given number is prime
 *
 * ---
 * @param {Number} num The number to be checked
 * @returns {Number | Boolean} The number itself (if prime) or false (if not prime)
 *
 * ---
 * @example isPrime(3) = 3
 * isPrime(4) = false
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

/**
 * Finds all prime numbers smaller than N (N >= 0)
 *
 * ---
 * @param limit
 * @returns {Array<number>} Prime number array
 *
 * ---
 * @example findAllPrimesSmallerThan(10) = [ 2, 3, 5, 7 ]
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
 * Finds the N-th prime number
 *
 * ---
 * @param nthPrime Finds the Nth prime number
 * @returns {Number} The Nth prime number
 *
 * ---
 * @example findNthPrime(50) = 229
 * // 229 is the 50th prime number
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
 *
 * ---
 * @param {Number} digits Desired number of digits
 * @returns {Number} How many prime numbers have N digits
 *
 * ---
 * @example findPrimesWithNDigits(2) = [
 * 11, 13, 17, 19, 23, 29, 31,
 * 37, 41, 43, 47, 53, 59, 61,
 * 67, 71, 73, 79, 83, 89, 97
 * ]
 */
export function findPrimesWithNDigits(digits: number): Array<number> {
  const primeArray: Array<number> = []
  let upperLimitNum: string | number = ''
  let iterator = 0

  // Defining the max number to iterate based on the number of digits desired
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

/**
 * Finds the largest Prime Factor of a given number
 *
 * ---
 * @param {Number} inputNumber Number N
 * @returns The largest prime factor of N
 *
 * ---
 * @example findLargestPrimeFactor(283) = 283
 * @example findLargestPrimeFactor(7) = 7
 * @example findLargestPrimeFactor(8) = 2
 */
export function findLargestPrimeFactor(inputNumber: number): number {
  /*
    While number is divisible by 2, divide by 2.
    In the end you have 1 or another odd number

    findLargestPrimeFactor(8) returns 1... should be 2, right?
  */
  let num = inputNumber

  while (num % 2 === 0) num /= 2

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) num /= i
  }

  if (num > 2) {
    // console.log(`Largest prime factor of ${inputNumber} = ${num}`)
  }
  return num
}
