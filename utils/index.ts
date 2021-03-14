const factorial = (number: number): number => {
  let result = 0;

  if (number == 1) {
    return 1;
  }

  for (let i = number; i > 1; i--) {
    if (i == number) {
      result += i * (i - 1);
    } else {
      result *= i - 1;
    }
  }
  return result;
};

// See https://betterexplained.com/articles/easy-permutations-and-combinations/
const combinationGeneral = (n: number, k: number): number => {
  return factorial(n) / (factorial(n - k) * factorial(k));
};

const combination = (n: number, k: number): number => {
  return permutation(n, k) / factorial(k);
};

const permutation = (n: number, k: number): number => {
  return factorial(n) / factorial(n - k);
};

// O(n) - need to refactor
const findAllDivisors = (number: number): Array<number> => {
  let divisors: Array<number> = [];

  for (let i = 1; i < number; i++) {
    if (number % i == 0) divisors.push(i);
  }
  return divisors
}

const findAllDivisorsSqrt = (number: number): Array<number> => {
  let divisors: Array<number> = [];

  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      divisors.push(i);
      divisors.push(number / i);
    }
  }
  return divisors
}

// O(n) - need to refactor
const findAndSumAllDivisors = (number: number): number => {
  let divisors: Array<number> = [];
  let sum: number = 0;

  for (let i = 1; i < number; i++) {
    if (number % i == 0) divisors.push(i);
  }

  divisors.forEach(number => {
    sum += number;
  })
  return sum
}

const findAndSumAllDivisorsSqrt = (number: number): number => {
  let divisors: Array<number> = [];
  let sum: number = 0;

  if (number == 1) return 1;

  for (let i = 1; i < Math.sqrt(number); i++) {

    // If i = 1, doesn't push number itself to divisors array
    if (number % i == 0 && i == 1) {
      divisors.push(i);
    } else if (number % i == 0) {
      divisors.push(i);
      divisors.push(number / i);
    }
  }

  divisors.forEach(number => {
    sum += number;
  });

  return sum
}

const findAllPrimesSmallerThan = (limit: number): Array<number> => {
  let iterator: number = 0;
  let primeArray: number[] = [];

  while (iterator < limit) {
    if (isPrime(iterator)) primeArray.push(iterator);
    iterator++;
  }
  return primeArray;
}

const isPrime = (num: number): number | boolean => {
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

const isNumberPalindrome = (input: number): number | boolean => {

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

export {
  factorial,
  combinationGeneral,
  combination,
  permutation,
  findAllDivisors,
  findAllDivisorsSqrt,
  findAndSumAllDivisors,
  findAndSumAllDivisorsSqrt,
  findAllPrimesSmallerThan,
  isPrime,
  isNumberPalindrome
};
