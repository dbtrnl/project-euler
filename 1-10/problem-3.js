console.log(
  '-----\nThe prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?\n-----\n'
);

/*
  13195 / 29 = 455
  455 / 13 = 35
  35 / 7 = 5
  5 / 5 = 1

  Como resolver?

  1. Calcular uma lista de números primos?

  2. Usar lógica descrita em https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
*/

const findLargestPrime = (number) => {
  // While number is divisible by 2...
  // In the end you have 1 or another odd number
  while (number % 2 === 0) {
    console.log(`2 `);
    number = number / 2;
  }

  console.log(`number after first while = ${number}`);

  for (i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      console.log(`${i} `);
      number = number / i;
    }
    console.log(
      `i after second while = ${i}\nnumber after second while = ${number}`
    );
  }

  if (number > 2) {
    console.log(`number = ${number}`);
  }
};

findLargestPrime(600851475143);
