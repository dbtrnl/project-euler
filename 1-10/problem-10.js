console.log(
  '-----\nThe sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\nFind the sum of all the primes below two million.\n-----\n'
);

// process.on('SIGINT', () => {
//   console.log('asdasdasdasdasdasdasdasdas');
//   process.kill(process.pid, 'SIGTERM');
// });


const findIfNumberIsPrime = (number) => {
  for (i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      return false;
    }
  }
  console.log(`Number ${number} is prime`);
  return number;
};

let primeNumberSum = 0;

// Beginning at 2 since 1 isn't a prime number
let iterator = 2;

console.time('time elapsed iterating');
// This will take O(n) to finish...
while (iterator < 2000) {
  let prime = findIfNumberIsPrime(iterator);
  iterator++;

  if (prime !== false) {
    primeNumberSum += prime;
  }
}
console.timeEnd('time elapsed iterating');
console.log(primeNumberSum);
