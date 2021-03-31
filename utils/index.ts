interface CollatzSequenceObject {
  number: number;
  sequence: Array<number>;
}

/*
  An alternative to this function is to use template string:
  const length = `${number}`.length;

  (for floating point numbers, the dot is included in this count...)
*/
export function numberLength(number: number): number {
  const num = number;
  const length = Math.ceil(Math.log10(num + 1));
  return length;
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
  const primeArray: Array<number> = [];
  let iterator = 0;

  while (iterator < limit) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray;
}

export function findNthPrime(nthPrime: number): number {
  const primeArray: Array<number> = [];
  let iterator = 0;

  while (primeArray.length < nthPrime) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray[nthPrime - 1];
}

export function findPrimesWithNDigits(digits: number): Array<number> {
  const primeArray: Array<number> = [];
  let upperLimitNum: string | number = '';
  let iterator = 0;

  // Defining the Max number dynamically (999 for 3 digits, etc)
  for (let i = 0; i < digits; i++) {
    upperLimitNum += '9';
  }
  upperLimitNum = parseInt(upperLimitNum, 10);

  while (iterator < upperLimitNum) {
    if (isPrime(iterator) && iterator.toString().length === digits) primeArray.push(iterator);
    iterator++;
  }
  return primeArray;
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

export function isNumberPermutationOfAnother(firstNum: number, secondNum: number): boolean {
  const firstNumArr = firstNum.toString().split('');
  const secondNumArr = secondNum.toString().split('');
  let includes = true;
  // console.log(`firstNumArr: ${firstNumArr}, secondNumArr: ${secondNumArr}`);

  if (firstNumArr.length !== secondNumArr.length) return false;

  // Try a for loop + break to see impact in performance
  firstNumArr.forEach((digit) => {
    if (!secondNumArr.includes(digit)) includes = false;
  });

  secondNumArr.forEach((digit) => {
    if (!firstNumArr.includes(digit)) includes = false;
  });

  return includes;
}

// This algorithm has viritually the same performance as the HEAP ALGORITHM below
// Took ~2.5s for number 1234567890
// Taken from https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
export function findAllPermutationsOfString(string: string): Set<string> {
  if (!string || typeof string !== 'string') throw new Error('Please enter a string');

  if (string.length < 2) return new Set(string);

  const permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (const permut of findAllPermutationsOfString(remainingChars)) {
      permutationsArray.push(char + permut);
    }
  }
  // Return a Set to eliminate duplicate permutations
  return new Set(permutationsArray);
}

// Uses HEAP'S ALGORITHM
// Taken from https://stackoverflow.com/a/37580979/13289772
export function findAllPermutationsOfNumber(inputNumber: number): Set<number> {
  const inputNumberLength = numberLength(inputNumber);

  const numArray = inputNumber.toString().split('');
  const numbersMatrix = [numArray.slice()];

  const numArrayLength = numArray.length;
  const zeroesArray = new Array(numArrayLength).fill(0);

  let iterator = 1;
  let registerOne;
  let registerTwo;

  while (iterator < numArrayLength) {
    if (zeroesArray[iterator] < iterator) {
      registerOne = iterator % 2 && zeroesArray[iterator];
      registerTwo = numArray[iterator];

      numArray[iterator] = numArray[registerOne];
      numArray[registerOne] = registerTwo;

      ++zeroesArray[iterator];
      iterator = 1;

      numbersMatrix.push(numArray.slice());
    } else {
      zeroesArray[iterator] = 0;
      ++iterator;
    }
  }
  /*
    map() to assemble the numbers from digit arrays
    Then filter() numbers with length smaller than the inputNumber
    (e.g. 0010 when input is 1000)
   */
  const permutationsArray = numbersMatrix
    .map((digitArray) => {
      return parseInt(digitArray.join(''), 10);
    })
    .filter((number) => {
      if (numberLength(number) !== inputNumberLength) {
        return false;
      }
      return true;
    });
  return new Set(permutationsArray.sort());
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
