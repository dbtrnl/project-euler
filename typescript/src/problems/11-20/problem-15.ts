import { factorial } from '../../utils'

/**
 * **Problem 15 - Lattice paths**
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 *
 * ---
 * How many such routes are there through a 20×20 grid?
 */
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
