import { findAllPrimesSmallerThan } from '../_utils'
/**
 * Problem 10 - Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million
 */
export default function problem10(): number {
  const main = (): number => {
    const MAX_PRIME_VALUE = 2000000
    const primesArray = findAllPrimesSmallerThan(MAX_PRIME_VALUE)

    const answer = primesArray
      .reduce((sum, number) => {
        return sum + number
      })

    return answer
  }
  const result = main()
  return result
}
