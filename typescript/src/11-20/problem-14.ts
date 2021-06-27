/*
  Problem 14 - Longest Collatz sequence

  The following iterative sequence is defined for the set of positive integers:
  n -> n/2 (n is even)
  n -> 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:
  13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
  Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
  Which starting number, under one million, produces the longest chain?
*/

import { findLongestCollatzSequenceUnder } from '../utils'

export default function problem14(): number {
  const main = (): number => {
    const MAX_NUMBER = 1000000
    const answer = findLongestCollatzSequenceUnder(MAX_NUMBER)

    // console.log(`The answer is ${answer.number}`)
    return answer.number
  }
  const result = main()
  return result
}
