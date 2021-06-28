// Problem 25 - 1000-digit Fibonacci number

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
