/*
  Problem 3 - Largest Prime Factor
  The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143?

  -----

  Explanation
  13195 / 29 = 455
  455 / 13 = 35
  35 / 7 = 5
  5 / 5 = 1

  References
  https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
  https://www.mathsisfun.com/prime-factorization.html
*/

(() => {
  const findLargestPrimeFactor = (num: number) => {
    /*
      While number is divisible by 2, divide by 2.
      In the end you have 1 or another odd number
    */

    let firstIterCounter = 0;
    let secondIterCounter = 0;
    let thirdIterCounter = 0;
    let originalNumber = num;

    while (num % 2 === 0) {
      num = num / 2;
      firstIterCounter++;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      while (num % i === 0) {
        num = num / i;
        secondIterCounter++;
      }
      thirdIterCounter++;
    }

    if (num > 2) {
      console.log(
        `Largest prime factor of ${originalNumber} = ${num}\nIterations in 1st loop - ${firstIterCounter}\nIterations in 2nd loop - ${secondIterCounter}\nIterations in 3rd loop - ${thirdIterCounter}`
      );
    }
  };
  findLargestPrimeFactor(600851475143);
})()