/*

  Problem 28 - Number spiral diagonals

  Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

  21 22 23 24 25
  20  7  8  9 10
  19  6  1  2 11
  18  5  4  3 12
  17 16 15 14 13

  It can be verified that the sum of the numbers on the diagonals is 101.

  What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

*/

/*
For purely mathematical solutions, see: https://www.mathblog.dk/project-euler-28-sum-diagonals-spiral/
and https://www.xarg.org/puzzle/project-euler/problem-28/

*/

import { NullMatrix, NumberMatrix } from '../_interfaces'
import { initializeMatrix } from '../_utils'

export default function problem28(): number {
  function fillMatrix(nullMatrix: NullMatrix): NumberMatrix {
    const matrix = <NumberMatrix> nullMatrix
    const center = Math.ceil(matrix.length / 2) - 1

    matrix[center][center] = 1

    for (let i = center; i <= matrix.length - 1; i++) {
      // console.log(i)
    }

    return matrix
  }

  function main(): number {
    const matrix = initializeMatrix(5, null)
    const filledMatrix = fillMatrix(matrix)

    // Function to fill the matrix in a spiral

    // Sum the diagonals

    // console.log(filledMatrix)
    return 0
  }

  const result = main()
  return result
}
