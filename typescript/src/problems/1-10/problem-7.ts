import { findNthPrime } from '../../utils'

/**
 * **Problem 7 - 10001st prime**
 *
 * By listing the first six prime numbers:
 * 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * ---
 * What is the 10.001st prime number?
 */
export default function problem7(): number {
  // Execution time: ~10 miliseconds
  const main = (): number => {
    const nth = 10001
    const nthPrime = findNthPrime(nth)

    return nthPrime
  }

  const result = main()
  return result
}
