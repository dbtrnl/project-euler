import { Triangle, TriangleRow } from '../_interfaces'

/**
 * Extracts a string line from a multi-line string
 *
 * Used in assembly of triangles (from string to matrix)
 *
 * ---
 * @param inputString String on format "02 03 99"
 */
export function extractTriangleString(inputString: string): string {
  return inputString.substring(0, inputString.indexOf('\n'))
}

/**
 * Assembles a triangle with N rows from an input string
 * @param {String} inputString Input with format '00 23 46 ...'
 * @param rows number N
 * @returns {Array<TriangleRow>}
 */
export function assembleTriangle(inputString: string, rows: number): Array<TriangleRow> {
  const NUMBER_OF_ROWS = rows
  const FINAL_TRIANGLE: Array<TriangleRow> = []
  let input = inputString
  let row: TriangleRow
  let strRow: string | string[]

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    // Extracting and splitting each string row
    strRow = extractTriangleString(input).split(' ')

    row = strRow.map((num: string) => {
      return parseInt(num, 10)
    })

    FINAL_TRIANGLE.push(row)

    // Eliminating the pushed row
    input = input.replace(input.substring(0, input.indexOf('\n') + 1), '')
  }
  return FINAL_TRIANGLE
}

export function findMaximumPathSumOfTriangle(inputTriangle: Triangle): number {
  const triangle = inputTriangle
  // Iterates each line of the triangle
  for (let i = triangle.length - 2; i >= 0; i--) {
    // Iterates each number of the row
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
    // Removes the biggest row
    triangle.pop()
  }
  const [[SUM]] = triangle
  return SUM
}
