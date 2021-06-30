import { factorialBigInt } from '../_utils'

/**
 * Problem 20 - Factorial digit sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */
export default function problem20(): number {
  /*
    Uncomment this code to see problems with Int to BigInt conversion (loss os precision)

    import { factorial } from '../utils'
    const wrongNum = factorial(100)
    const correctNum = factorialBigInt(100)
    const wrongNumToBigInt = BigInt(wrongNum)
    console.warn('correctNum\n', correctNum)
    console.warn('wrongNumToBigInt\n', wrongNumToBigInt)
    // Returns 93326215443944175354307254139643190247129328132295862491935879110669343325734178368282822618707234467717279847537548956702435362278960753539491860335688679424n
    // Should be 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n
    */
  const number = factorialBigInt(100)
  let answer = 0
  const bigNumberStr = number.toString()

  for (let i = 0; i <= bigNumberStr.length - 1; i++) {
    answer += parseInt(bigNumberStr[i], 10)
  }
  return answer
}
