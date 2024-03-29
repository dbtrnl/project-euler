/**
 * **Problem 1 - Multiples of 3 and 5**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * The sum of these multiples is 23.
 *
 * ---
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
export default function problem1(): number {

  function main(): number {
    const LIMIT = 1000
    const multiplesOfThreeOrFiveSmallerThanLimit: number[] = []

    for (let i = 0; i < LIMIT; i++) {
      if (i % 3 === 0 || i % 5 === 0) multiplesOfThreeOrFiveSmallerThanLimit.push(i)
    }
    const finalCount = multiplesOfThreeOrFiveSmallerThanLimit.reduce((sum, number) => {
      return sum + number
    })

    return finalCount
  }

  const result = main()
  return result
}
