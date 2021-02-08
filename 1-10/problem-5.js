console.log(
  '-----\n2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?\n-----\n'
);

const findIfEvenlyDivisibleByEveryNumberInInterval = (
  number,
  lowerBound,
  upperBound
) => {
  let iterator = lowerBound;

  while (iterator <= upperBound) {
    if (number % iterator !== 0) {
      // console.log(`Breaking. ${number} not divisible evenly by ${iterator}.`);
      break;
    }

    if (iterator === upperBound) {
      console.log(
        `${number} is evenly divisible by all numbers from ${lowerBound} to ${upperBound}`
      );
      break;
    }

    iterator++;
  }
};

/* 
  Resolução do problema, escolher um número-limite para calcular
*/
let maxNumber = 99999999;

for (k = 1; k < maxNumber; k++) {
  findIfEvenlyDivisibleByEveryNumberInInterval(k, 1, 20);
}