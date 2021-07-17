import { findLargestPrimeFactor } from '../../utils'

/**
 * **Problem 3 - Largest Prime Factor**
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * ---
 * What is the largest prime factor of the number 600851475143?
 */
export default function problem3(): number {
  const PROBLEM_INPUT = 600851475143

  const result = findLargestPrimeFactor(PROBLEM_INPUT)
  return result
}
