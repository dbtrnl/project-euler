/*
  Problem 95 - Amicable chains

  The proper divisors of a number are all the divisors excluding the number itself.
  For example, the proper divisors of 28 are 1, 2, 4, 7, and 14.
  As the sum of these divisors is equal to 28, we call it a perfect number.

  Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers.
  For this reason, 220 and 284 are called an amicable pair.

  Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

  12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

  Since this chain returns to its starting point, it is called an amicable chain.

  Find the smallest member of the longest amicable chain with no element exceeding one million.
*/

import { AmicableChainObject } from '../../interfaces'
import {
  findAmicableChain,
} from '../../utils'

export default function problem95(): number {
  const NO_ELEMENT_EXCEEDING = 1000000
  let longestChain: AmicableChainObject = {
    number: 0,
    chain: [],
    chainLength: 0,
  }

  // Longest chain below 10.000 = 3594 - 87 numbers

  for (let i = 4; i < 1000000; i++) {
    const currentChain = findAmicableChain(i, NO_ELEMENT_EXCEEDING)
    if (currentChain.chainLength > longestChain.chainLength) longestChain = currentChain

    if (i === 200000) console.warn('200.000 iterations')
    if (i === 400000) console.warn('400.000 iterations')
    if (i === 600000) console.warn('600.000 iterations')
    if (i === 800000) console.warn('800.000 iterations')
  }

  // longestChain = findAmicableChain(12496, NO_ELEMENT_EXCEEDING)

  console.warn('longestChain', longestChain)
  const { chain } = longestChain
  let result = 0

  // eslint-disable-next-line prefer-destructuring
  if (chain) result = chain[0]
  if (!chain) throw new Error('Something went wrong (chain shouldn\'t be null')

  for (let k = 0; k < longestChain.chainLength; k++) {
    const currentNumber = chain[k]
    // console.warn('k', k, 'current', currentNumber)
    if (currentNumber < result) result = currentNumber
  }

  return result
}
