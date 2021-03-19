interface CollatzSequenceObject {
  number: number;
  sequence: number[];
}

export const factorial = (number: number): number => {
  let result = 0;
  if (number == 1) return 1;
  if (number == 2) return 2;

  for (let i = number; i > 1; i--) {
    if (i == number) result += i * (i - 1);
    else result *= i - 1;
  }
  return result;
};

// See https://betterexplained.com/articles/easy-permutations-and-combinations/
export const combinationGeneral = (n: number, k: number): number => {
  return factorial(n) / (factorial(n - k) * factorial(k));
};

export const combination = (n: number, k: number): number => {
  return permutation(n, k) / factorial(k);
};

export const permutation = (n: number, k: number): number => {
  return factorial(n) / factorial(n - k);
};

/* 
  Takes O(sqrt(n)) to execute
*/
export const findAllDivisors = (number: number): Array<number> => {
  // console.log(`Calculating divisors of ${number}...`);
  let divisors: Array<number> = [1];

  if (number == 1) return divisors;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      if (number / i == i || i == 1) divisors.push(i);
      else {
        divisors.push(i);
        divisors.push(number / i);
      }
    }
  }
  // console.log(`divisors for ${number}`, divisors);
  return divisors
}

export const findAndSumAllDivisors = (number: number): number => {

  let sum: number = findAllDivisors(number)
    .reduce((total, number) => {
      return total += number;
    });

  return sum
}

/* 
  Takes O(n) to execute
*/
export const findAllDivisorsLinear = (number: number): Array<number> => {
  // console.log(`Calculating divisors of ${number}...`);
  let divisors: Array<number> = [];

  for (let i = 1; i < number; i++) {
    if (number % i == 0) divisors.push(i);
  }
  return divisors
}

/* 
  Takes O(n) to execute
*/

export const findAndSumAllDivisorsLinear = (number: number): number => {
  let divisors: Array<number> = [];
  let sum: number = 0;

  if (number == 1) return 1;

  for (let i = 1; i < number; i++) {
    if (number % i == 0) divisors.push(i);
  }
  divisors.forEach(number => {
    sum += number;
  });
  return sum
}

export const findAllPrimesSmallerThan = (limit: number): Array<number> => {
  let iterator: number = 0;
  let primeArray: number[] = [];

  while (iterator < limit) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray;
}

export const findNthPrime = (nthPrime: number): number => {
  let iterator: number = 0;
  let primeArray: number[] = [];

  while (primeArray.length < nthPrime) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray[nthPrime - 1];
}

export const findCollatzSequenceOf = (startNumber: number): CollatzSequenceObject => {
  let sequence = [startNumber];
  let number = startNumber;

  while (number > 1) {
    if (number % 2 == 0) number = number / 2;
    else number = 3 * number + 1;
    sequence.push(number);
  }

  return {
    number: startNumber,
    sequence: sequence,
  };
};

export const findLongestCollatzSequenceUnder = (limit: number): CollatzSequenceObject => {
  let longestSequence: CollatzSequenceObject = {
    number: 0,
    sequence: [],
  }

  for (let i = 1; i < limit; i++) {
    let currentSequence = findCollatzSequenceOf(i);
    if (currentSequence.sequence.length > longestSequence.sequence.length) {
      longestSequence = currentSequence;
      console.log(`Longest Collatz sequence so far: ${longestSequence.sequence.length} terms, starting at number ${longestSequence.number}`);
    }
  }
  return longestSequence;
}

export const isPrime = (num: number): number | boolean => {
  if (num <= 1) return false;

  // 2 and 3 are both primes
  if (num <= 3) return num;

  // Research this property of primes... Every prime is odd, but what about %3?
  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }
  // console.log(`Number ${num} is prime`);
  return num;
};

export const isNumberPalindrome = (input: number): number | boolean => {

  let num: string = input.toString();
  let inverseNum: string[] = [];
  let register: string = '';
  let revNum: string = '';

  let numArr: string[] = [...num];

  for (let k = 0; k <= num.length - 1; k++) {
    register = numArr.pop()!;
    inverseNum.push(register);
  }

  revNum = inverseNum.join(',').replace(/,/g, '');

  if (num == revNum) return true;

  return false;
};
