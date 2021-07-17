/*

Problem 30 - Digit fifth powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

    1634 = 1^4 + 6^4 + 3^4 + 4^4
    8208 = 8^4 + 2^4 + 0^4 + 8^4
    9474 = 9^4 + 4^4 + 7^4 + 4^4

As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

*/
export default function problem30(): number {
  const isNumberWrittenAsSumOfNPowerOfItsDigits = (number: number, power: number): boolean => {
    const numStr = number.toString().split('')
    let sum = 0
    let currentDigit = 0

    for (let i = 0; i < numStr.length; i++) {
      currentDigit = parseInt(numStr[i], 10)
      sum += currentDigit ** power
    }

    if (sum === number) return true
    return false
  }

  const main = (): number => {
    const MAX_VALUE = 9999999
    let iterator: boolean
    let sum = 0

    for (let i = 2; i <= MAX_VALUE; i++) {
      iterator = isNumberWrittenAsSumOfNPowerOfItsDigits(i, 5)
      if (iterator) {
        sum += i
        // console.log(`Number ${i} fulfills the conditions`)
      }
    }
    return sum
  }
  // console.time('Time elapsed on main()');
  const result = main()
  return result
  // console.timeEnd('Time elapsed on main()');
}
