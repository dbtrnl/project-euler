console.log(
  '-----\nThe prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?\n-----\n'
);

/*
  Explicação
  13195 / 29 = 455
  455 / 13 = 35
  35 / 7 = 5
  5 / 5 = 1

  Foi usada a lógica descrita em https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
*/

const findLargestPrime = (number) => {
  // While number is divisible by 2, divide by 2.
  // In the end you have 1 or another odd number
  let firstIterCounter = 0;
  let secondIterCounter = 0;
  let thirdIterCounter = 0;
  let inputNumber = number;

  while (number % 2 === 0) {
    number = number / 2;
    firstIterCounter++;
  }

  for (i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      number = number / i;
      secondIterCounter++;
    }
    thirdIterCounter++;
  }

  // Se número for maior que 2, finaliza o loop
  if (number > 2) {
    console.log(
      `End of loop. Largest prime factor of ${inputNumber} = ${number}\nIterations in 1st loop - ${firstIterCounter}\nIterations in 2nd loop - ${secondIterCounter}\nIterations in 3rd loop - ${thirdIterCounter}`
    );
  }
};

findLargestPrime(600851475143);
