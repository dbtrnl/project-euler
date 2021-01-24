console.log(
  '-----\nIf we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.\nThe sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000.\n-----\n'
);

let multiplesOfThreeOrFive = [];

for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    multiplesOfThreeOrFive.push(i);
  }
}

console.log(`final array length = ${multiplesOfThreeOrFive.length}`);

let finalCount = 0;

multiplesOfThreeOrFive.map((number) => {
  console.log(`summing ${finalCount} with ${number}`);
  finalCount += number;
  console.log(finalCount);
});

console.log(`Final Count = ${finalCount}`);
