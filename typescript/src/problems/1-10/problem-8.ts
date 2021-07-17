import { problem8Input as PROBLEM_INPUT } from '../../data'
import { findProductOfDigitsInNumberSeries } from '../../utils'

/**
 * **Problem 8 - Largest product in a series**
 *
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 *
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
 *
 * ---
 * What is the value of this product?
 */
export default function problem8(): number {
  const main = (): number => {
    const SERIES_SIZE = 13
    let greatestProduct = 0

    for (let j = 0; j < PROBLEM_INPUT.length - SERIES_SIZE - 1; j++) {
      const currentSeries = PROBLEM_INPUT.substring(j, j + SERIES_SIZE)
      const currentSeriesSum = findProductOfDigitsInNumberSeries(currentSeries)

      if (currentSeriesSum !== 0 && currentSeriesSum > greatestProduct) {
        greatestProduct = currentSeriesSum
        // console.log(`greatest product so far: ${greatestProduct} on iteration ${j}`);
      }
    }
    return greatestProduct
  }
  const result = main()
  return result
}
