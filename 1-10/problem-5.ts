/*
  Problem 5 - Smallest multiple

  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/* 
  This solution is aproximately 50% slower than the original (below)
*/

(() => {
  const isEvenlyDivisibleByEveryNumberInInterval = ([lowDiv, upperDiv]: number[], [lowNum, upperNum]: number[]) => {
    let iterator: number;

    for (let k = lowNum; k <= upperNum; k++) {
      // console.log(`lowDiv:${lowDiv}, upperDiv:${upperDiv}, lowNum:${lowNum}, upperNum:${upperNum}`)
      iterator = lowDiv;

      while (iterator <= upperDiv) {
        if (iterator === upperDiv) {
          console.log(`${k} is evenly divisible by all numbers from ${lowDiv} to ${upperDiv}`);
          break;
        }

        // console.log(`k: ${k}, iterator: ${iterator}`)
        // If not divisible, break the loop
        if (k % iterator !== 0) break;
        iterator++;
      }
      // console.log(`${k} is NOT evenly divisible by all numbers from ${lowDiv} to ${upperDiv}`);
    }
  };

  const main = (): void => {
    console.time('Main execution time:');
    isEvenlyDivisibleByEveryNumberInInterval([1, 20], [1, 999999999]);
    console.timeEnd('Main execution time:');
  }
  main();
})()

// (() => {
//   const findIfEvenlyDivisibleByEveryNumberInInterval = (
//     number: number,
//     lowerBound: number,
//     upperBound: number
//   ) => {
//     let iterator = lowerBound;

//     while (iterator <= upperBound) {
//       if (number % iterator !== 0) {
//         // console.log(`Breaking. ${number} not divisible evenly by ${iterator}.`);
//         break;
//       }

//       if (iterator === upperBound) {
//         console.log(
//           `${number} is evenly divisible by all numbers from ${lowerBound} to ${upperBound}`
//         );
//         break;
//       }

//       iterator++;
//     }
//   };

//   /* 
//     Resolução do problema, escolher um número-limite para calcular
//   */
//   let maxNumber = 999999999;

//   console.time('Main execution time:');
//   for (let k = 1; k < maxNumber; k++) {
//     findIfEvenlyDivisibleByEveryNumberInInterval(k, 1, 20);
//   }
//   console.timeEnd('Main execution time:');
// })()