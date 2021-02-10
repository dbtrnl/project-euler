console.log(
  '-----\nThe sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\nFind the sum of all the primes below two million.\n-----\n'
);

/* 
  Research
  Source - https://byjus.com/maths/prime-numbers/
    - Except 2, all other prime numbers are odd. In other words, we can say that 2 is the only even prime number.
  Optimization
  See - https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr
*/

/* 
const func1 = (number) => {
  for (i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      return false;
    }
  }
  console.log(`Number ${number} is prime`);
  return number;
};

const func2 = (number) => {
  for (i = number - 1; i > 1; i--) {
    
    // What prperty of prime numbers is this?
    if (number % 2 == 0 || number % 3 == 0) return false;

    if (number % i == 0) {
      return false;
    }
  }
  console.log(`Number ${number} is prime`);
  return number;
};
*/

/*
**Performance**

Original (func1 above)
  Takes ~51s to execute to 200 thousand primes

With check of %2 and %3 (func 2 above)
  Takes ~23s to execute 200 thousand primes

  Optimized algorithm
    207.251ms - 2 million
    4.913s - 20 million
    2:26.069min - 200 million
*/

const findIfNumberIsPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) {
    // console.log(`Number ${number} is prime`);
    return number;
  }
  // Research this property of primes... Every prime is odd, but what about %3?
  if (number % 2 == 0 || number % 3 == 0) return false;

  for (i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  // console.log(`Number ${number} is prime`);
  return number;
};

let primeNumberSum = 0;

// Beginning at 2 since 1 isn't a prime number
let iterator = 0;

console.time('time elapsed iterating');
// This will take O(n) to finish...
while (iterator < 200000000) {
  let prime = findIfNumberIsPrime(iterator);
  iterator++;

  if (prime !== false) {
    primeNumberSum += prime;
  }
}
console.timeEnd('time elapsed iterating');
console.log(primeNumberSum);
