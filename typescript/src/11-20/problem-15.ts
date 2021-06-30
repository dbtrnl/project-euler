/*

Problem 15 - Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

/*
  Notes

  For a 2x2 grid, there are 3x3 routes possible:
  [0,0] > [0,1] > [0,2] > [1,2] > [2,2]
  ... etc

  So for a N x N grid, N+1 x N+1 matrix is needed
*/

import { factorial } from '../_utils'

export default function problem15(): number {
  const main = () => {
    const gridRowSize = 20
    const gridColumnSize = 20

    let answer = factorial(gridRowSize + gridColumnSize) / factorial(gridRowSize) / factorial(gridColumnSize)
    answer = Math.round(answer)

    // console.log(`For a ${gridRowSize} by ${gridColumnSize} grid, there are ${answer} possible paths;`)
    return answer
  }
  const result = main()
  return result
}
