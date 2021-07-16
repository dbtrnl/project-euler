import { returnFibonacciNumbersUntil } from '../_utils'

/**
 * **Problem 2 - Even Fibonacci Numbers**
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * ---
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *
 */
export default function problem2(): number {
  const main = (): number => {
    const LIMIT = 4000000

    const fibArray = returnFibonacciNumbersUntil(LIMIT)

    const answer: number = fibArray.filter((number) => {
      // If number is not even
      if (number % 2 !== 0) return null
      else return number
    }).reduce((sum, number) => {
      return sum + number
    })
    return answer
  }

  const result = main()
  return result
}
