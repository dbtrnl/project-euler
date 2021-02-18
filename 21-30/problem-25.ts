let currentNumber: number = 0;
let fibonacciArray: number[] = new Array();

// Setting the first elements of the array cause i'm lazy
fibonacciArray[0] = 0;
fibonacciArray[1] = 1;
fibonacciArray[2] = 1;

for (let i = 2; i <= 1500; i++) {
  currentNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];

  if (currentNumber == Infinity) {
    console.log(
      `Current number is ${currentNumber}... NodeJS broke at Fib(${fibonacciArray.length})`
    );
    break;
  }
  console.log(`Fib(${i}) = ${currentNumber}`)
  fibonacciArray[i] = currentNumber;
}
