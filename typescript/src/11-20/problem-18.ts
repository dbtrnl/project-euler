import { Triangle, TriangleRow } from '../interfaces'
import { problem18Input as problemInput } from '../data'

export default function problem18(): number {
  // console.log('-----\nBy starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.\n\n3\n7 4\n2 4 6\n8 5 9 3\n\nThat is, 3 + 7 + 4 + 9 = 23.\nFind the maximum total from top to bottom of the triangle below:\nNOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)\n-----\n')

  const extractString = (inputString: string): string => {
    return inputString.substring(0, inputString.indexOf('\n'))
  }

  const assembleTriangle = (input: string): Array<TriangleRow> => {
    const NUMBER_OF_ROWS = 15
    const FINAL_TRIANGLE: Array<TriangleRow> = []
    let row: TriangleRow
    let strRow: string | string[]

    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      // Extracting and splitting each string row
      strRow = extractString(input).split(' ')

      row = strRow.map((num: string) => {
        return parseInt(num, 10)
      })

      FINAL_TRIANGLE.push(row)

      // Replacing the input to loop to the next string row
      input = input.replace(input.substring(0, input.indexOf('\n') + 1), '')
    }
    return FINAL_TRIANGLE
  }
  /*
  // 1 - calculate prevIndex or prevIndex + 1
  // This one returns 1064
  // The problem with this solution is that ignores a number of paths
  const returnBiggestNumber = (input: TriangleRow, prevIndex: number): BiggestNumberObject => {
    let largestNum: number = 0;

    // If it's the first row of the triangle
    // if (input.length == 1) return { number: input[0], prevIndex: 0 }

    // console.log(`${input[prevIndex]} > ${input[prevIndex + 1]} ? (${input[prevIndex] > input[prevIndex + 1]})`)
    if (input[prevIndex + 1] > input[prevIndex]) {
      largestNum = input[prevIndex + 1]
      // console.log(`returning ${largestNum} on index ${prevIndex + 1}\n`)
      return { number: largestNum, prevIndex: prevIndex + 1 };
    } else {
      largestNum = input[prevIndex];
      // console.log(`returning ${largestNum} on index ${prevIndex}\n`)
      return { number: largestNum, prevIndex: prevIndex };
    }
  }
  const findPath = (triangle: Triangle): number => {
    let sum: number = 0;
    let biggestNumber: BiggestNumberObject = {
      number: 0,
      prevIndex: 0
    };

    for (let i = 0; i < triangle.length; i++) {
      biggestNumber = returnBiggestNumber(triangle[i], biggestNumber.prevIndex);
      console.log(`Summing ${sum} + ${biggestNumber.number} (index ${biggestNumber.prevIndex})`)
      sum += biggestNumber.number;
    }
    return sum;
  }
  */

  const findMaximumPathSum = (triangle: Triangle): number => {
    // Iterates each line of the triangle
    for (let i = triangle.length - 2; i >= 0; i--) {
      // Iterates each number of the row
      for (let j = 0; j <= i; j++) {
        triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
      }
      // Removes the biggest row
      triangle.pop()
    }
    // How to cast the matrix with a single value into a number?
    return triangle[0][0]
  }

  function main(): number {
    const triangle = assembleTriangle(problemInput)
    const answer = findMaximumPathSum(triangle)
    // console.log(`The answer is ${answer}`)
    return answer
  }

  const result = main()
  return result
}
