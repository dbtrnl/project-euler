interface CollatzSequenceObject {
  number: number;
  sequence: number[];
}

export function factorial(number: number): number {
  let result = 0;
  if (number === 1) return 1;
  if (number === 2) return 2;

  for (let i = number; i > 1; i--) {
    if (i === number) result += i * (i - 1);
    else result *= i - 1;
  }
  return result;
}

export function permutation(n: number, k: number): number {
  return factorial(n) / factorial(n - k);
}

// See https://betterexplained.com/articles/easy-permutations-and-combinations/
export function combinationGeneral(n: number, k: number): number {
  return factorial(n) / (factorial(n - k) * factorial(k));
}

export function combination(n: number, k: number): number {
  return permutation(n, k) / factorial(k);
}

export function isPrime(num: number): number | boolean {
  if (num <= 1) return false;

  // 2 and 3 are both primes
  if (num <= 3) return num;

  // Research this property of primes... Every prime is odd, but what about %3?
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  // console.log(`Number ${num} is prime`);
  return num;
}

/*
  Takes O(sqrt(n)) to execute
*/
export function findAllProperDivisors(number: number): Array<number> {
  const divisors: Array<number> = [1];

  if (number === 1) return divisors;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (number / i === i || i === 1) divisors.push(i);
      else {
        divisors.push(i);
        divisors.push(number / i);
      }
    }
  }
  return divisors;
}

export function findAndSumAllProperDivisors(number: number): number {
  const sum: number = findAllProperDivisors(number)
    .reduce((total, num) => {
      return total + num;
    });
  return sum;
}

/*
  Takes O(n) to execute
*/
export function findAllDivisorsLinear(number: number): Array<number> {
  // console.log(`Calculating divisors of ${number}...`);
  const divisors: Array<number> = [];

  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i);
  }
  return divisors;
}

/*
  Takes O(n) to execute
*/
export function findAndSumAllDivisorsLinear(number: number): number {
  const divisors: Array<number> = [];
  let sum = 0;

  if (number === 1) return 1;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i);
  }
  divisors.forEach((num) => {
    sum += num;
  });
  return sum;
}

export function findAllPrimesSmallerThan(limit: number): Array<number> {
  const primeArray: number[] = [];
  let iterator = 0;

  while (iterator < limit) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray;
}

export function findNthPrime(nthPrime: number): number {
  const primeArray: number[] = [];
  let iterator = 0;

  while (primeArray.length < nthPrime) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray[nthPrime - 1];
}

export function findCollatzSequenceOf(startNumber: number): CollatzSequenceObject {
  const sequence = [startNumber];
  let number = startNumber;

  while (number > 1) {
    if (number % 2 === 0) number /= 2;
    else number = 3 * number + 1;
    sequence.push(number);
  }
  return {
    number: startNumber,
    sequence,
  };
}

export function findLongestCollatzSequenceUnder(limit: number): CollatzSequenceObject {
  let longestSequence: CollatzSequenceObject = {
    number: 0,
    sequence: [],
  };

  for (let i = 1; i < limit; i++) {
    const currentSequence = findCollatzSequenceOf(i);
    if (currentSequence.sequence.length > longestSequence.sequence.length) {
      longestSequence = currentSequence;
      console.log(`Longest Collatz sequence so far: ${longestSequence.sequence.length} terms, starting at number ${longestSequence.number}`);
    }
  }
  return longestSequence;
}

export function isNumberPalindrome(input: number): number | boolean {
  const num: string = input.toString();
  const numArr: string[] = [...num];
  const inverseNum: string[] = [];

  let register = '';
  let revNum = '';

  for (let k = 0; k <= num.length - 1; k++) {
    register = numArr.pop()!;
    inverseNum.push(register);
  }

  revNum = inverseNum.join(',').replace(/,/g, '');

  if (num === revNum) return true;
  return false;
}

export function polinomialPrimeFormula1One(n: number): number {
  // 0 <= N <= 39
  const number = (n ** 2) + n + 41;
  return number;
}

export function polinomialPrimeFormulaTwo(n: number): number {
  // 0 <= N <= 79
  const number = (n ** 2) - (79 * n) + 1601;
  return number;
}
