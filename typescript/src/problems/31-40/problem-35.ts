import { isPrime, isPrimeCircular } from '../../utils/primeNumberUtils'

/**
 * **Problem 35 - Circular primes**
 *
 * ---
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 *
 * ---
 * How many circular primes are there below one million?
 *
 */
export default function problem35(): number {
  function main(): number {
    const result = 0
    const LIMIT = 1000

    for (let i = 1; i < LIMIT; i++) {
      if (!isPrime(i)) continue
      const currentNumber = isPrimeCircular(i)
      console.log(currentNumber)
    }
    return result
  }
  const result = main()
  return result
}
problem35()
