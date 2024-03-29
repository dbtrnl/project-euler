import { isNumberPalindrome } from '../../utils'

/**
 * **Problem 4 - Largest palindrome product**
 *
 * A palindromic number reads the same both ways.
 *
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * ---
 * Find the largest palindrome made from the product of two 3-digit numbers
 */
export default function problem4(): number {

  function main(): number {
    let currentLargestPalindrome = 0

    for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
        const currentNumber = i * j
        if (isNumberPalindrome(currentNumber) && currentLargestPalindrome < currentNumber) {
          currentLargestPalindrome = currentNumber
        }
      }
    }
    return currentLargestPalindrome
  }

  const result = main()
  return result
}
