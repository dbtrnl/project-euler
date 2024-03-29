/**
 * **Problem 16 - Power digit sum**
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * ---
 * What is the sum of the digits of the number 2^1000?
 */
export default function problem16(): number {

  function main() {
    let answer = 0
    const number = BigInt(2 ** 1000)
    const numberString: string = number.toString()

    for (let i = 0; i < numberString.length; i++) {
      answer += parseInt(numberString[i], 10)
    }

    return answer
  }

  const result = main()
  return result
}
