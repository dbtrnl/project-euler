export const factorial = (number) => {
  let result = 0;
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
export const combinationGeneral = (n, k) => {
  return factorial(n) / (factorial(n - k) * factorial(k));
};

export const combination = (n, k) => {
  return permutation(n, k) / factorial(k);
};

export const permutation = (n, k) => {
  return factorial(n) / factorial(n - k);
};