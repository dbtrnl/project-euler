// Problem 25 - 1000-digit Fibonacci number

let nextFibonacciNumber: bigint = BigInt(0);
let fibonacciArray: bigint[] = new Array();
let str: string = '';

// Setting the first elements of the array cause i'm lazy
fibonacciArray[0] = BigInt(0);
fibonacciArray[1] = BigInt(1);
fibonacciArray[2] = BigInt(1);

const calcFirstFibWithNDigits = (numberOfDigits: number): void => {
  console.time();
  for (let i = 2; i <= numberOfDigits * 1000; i++) {
    nextFibonacciNumber = BigInt(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    str = nextFibonacciNumber.toString();

    if (str.length === numberOfDigits) {
      console.log(`Number Fib(${i}) has ${numberOfDigits} digits or more`);
      break;
    }
    fibonacciArray[i] = nextFibonacciNumber;
  }
  console.timeEnd();
}

calcFirstFibWithNDigits(1000);