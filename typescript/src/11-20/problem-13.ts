/*
  Problem 13 - Large sum

  Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/

import { problem13Input as problemInput } from '../_data'

export default function problem13(): number {
  const assembleArray = (input: string): bigint[] => {
    // Creating array with 100 different memory addresses
    const array: bigint[] = [...new Array(100)]
    let currentIndex = 0
    let currentNumber = BigInt(0)
    let substring: string

    for (let i = 0; i <= array.length - 1; i++) {
      substring = input.substring(currentIndex, currentIndex + 50)
      currentNumber = BigInt(substring)
      array[i] = currentNumber
      currentIndex += 50
    }
    return array
  }

  const sumAllNumbersInArray = (inputArray: bigint[]): bigint => {
    let sum = BigInt(0)

    for (let i = 0; i <= inputArray.length - 1; i++) {
      sum += inputArray[i]
    }
    return sum
  }

  const main = (): number => {
    const array = assembleArray(problemInput)
    const sum = sumAllNumbersInArray(array)

    const answer: string = sum.toString().substring(0, 10)

    // console.log(`The answer is ${answer}`)
    return parseInt(answer, 10)
  }
  // console.time();
  const result = main()
  return result
  // console.timeEnd();
}
