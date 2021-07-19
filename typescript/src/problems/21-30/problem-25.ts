/**
 * **Problem 25 - 1000-digit Fibonacci number**
 *
 * ---
 * The Fibonacci sequence is defined by the recurrence relation:
 *
 * Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
 *
 * ---
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 *
 * F2 = 1
 *
 * F3 = 2
 *
 * F4 = 3
 *
 * F5 = 5
 *
 * F6 = 8
 *
 * F7 = 13
 *
 * F8 = 21
 *
 * F9 = 34
 *
 * F10 = 55
 *
 * F11 = 89
 *
 * F12 = 144
 *
 * ---
 * The 12th term, F12, is the first term to contain three digits.
 *
 * ---
 * What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */
export default function problem25(): number {
  let nextFibonacciNumber = BigInt(0)
  const fibonacciArray: bigint[] = []
  let str = ''

  // Setting the first elements of the array cause i'm lazy
  fibonacciArray[0] = BigInt(0)
  fibonacciArray[1] = BigInt(1)
  fibonacciArray[2] = BigInt(1)

  const main = (numberOfDigits: number): number => {
    let answer = 0
    // console.time()
    for (let i = 2; i <= numberOfDigits * 1000; i++) {
      nextFibonacciNumber = BigInt(fibonacciArray[i - 1] + fibonacciArray[i - 2])
      str = nextFibonacciNumber.toString()

      if (str.length === numberOfDigits) {
        answer = i
        // console.log(`Number Fib(${i}) has ${numberOfDigits} digits or more`)
        break
      }
      fibonacciArray[i] = nextFibonacciNumber
    }
    // console.timeEnd()
    return answer
  }

  const result = main(1000)
  return result
}
