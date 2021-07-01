import { findAllProperDivisors } from '../_utils'

/**
 * **Problem 12 - Highly divisible triangular number**
 *
 * ---
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * ---
 * Let us list the factors of the first seven triangle numbers:
 *
 * **1:** 1
 *
 * **3:** 1,3
 *
 * **6:** 1,2,3,6
 *
 * **10**: 1,2,5,10
 *
 * **15**: 1,3,5,15
 *
 * **21**: 1,3,7,21
 *
 * **28**: 1,2,4,7,14,28
 *
 * ---
 * We can see that 28 is the first triangle number to have over five divisors.
 *
 * ---
 * What is the value of the first triangle number to have over five hundred divisors?
 */
export default function problem12(): number {
  const generateTriangleNumbersSequence = (sequenceSize: number): number[] => {
    /*
    The generated sequence will be:

    REGISTER:1, i:0
    REGISTER:1, i:1
    REGISTER:1, i:2
    REGISTER:3, i:3
    REGISTER:6, i:4
    REGISTER:10, i:5
    REGISTER:15, i:6
    REGISTER:21, i:7
    REGISTER:28, i:8
    [...]
    */
    const sequence: number[] = []
    let sequenceNumber = 1
    let divisorsOfSequenceNumber: number[] = []

    for (let i = 0; i <= sequenceSize; i++) {
      // console.log(`sequenceNumber:${sequenceNumber}, i:${i}`);
      if (i === 0) continue
      if (i === 1) { sequence.push(sequenceNumber); continue }

      sequenceNumber += i
      sequence.push(sequenceNumber)

      divisorsOfSequenceNumber = findAllProperDivisors(sequenceNumber)

      if (divisorsOfSequenceNumber.length > 500) {
        break
      }
    }
    return sequence
  }

  const main = (): number => {
    const sequence = generateTriangleNumbersSequence(999999)
    // console.log(`The first triangle number to have over 500 divisors is: ${sequence[sequence.length - 1]}`)
    return sequence[sequence.length - 1]
  }
  // console.time('Main execution time:');
  const result = main()
  return result
  // console.timeEnd('Main execution time:');
}
