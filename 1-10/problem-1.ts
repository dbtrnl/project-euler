/*
  Problem 1 - Multiples of 3 and 5
  
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
  The sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000.
*/
(() => {
  const main = (): void => {
    const LIMIT = 1000;
    let multiplesOfThreeOrFive: number[] = [];

    for (let i = 0; i < LIMIT; i++) {
      if (i % 3 == 0 || i % 5 == 0) multiplesOfThreeOrFive.push(i);
    }

    console.log(`Multiples of 3 or 5 under ${LIMIT}: ${multiplesOfThreeOrFive.length}`);

    const finalCount = multiplesOfThreeOrFive.reduce((sum, number) => {
      sum += number;
      return sum;
    });

    console.log(`Final Count = ${finalCount}`);
  }

  main();
})()
