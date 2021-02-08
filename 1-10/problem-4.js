console.log(
  '-----\nA palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers.\n-----\n'
);

const reverseNumberFunction = (num) => {
  num = num.toString();
  let inverseNum = [];
  let temp = '';
  let numLength = num.length;

  num = [...num];

  for (k = 0; k <= numLength - 1; k++) {
    temp = num.pop();
    inverseNum.push(temp);
  }
  return inverseNum.join(',').replace(/,/g, '');
};

const checkIfNumberIsPalindrome = (number) => {
  let reverseNumber = reverseNumberFunction(number);

  if (number == reverseNumber) {
    return true;
  }
  return false;
};

let largestPalindromeFound = 0;

for (i = 100; i < 1000; i++) {
  // console.log(`i = ${i}`);
  for (j = 100; j < 1000; j++) {
    // console.log(`j = ${j}`);
    let number = i * j;
    // console.log(`number is ${i} * ${j} = ${number}`);
    if (checkIfNumberIsPalindrome(number)) {
      console.log(`${number} is a palindrome`);

      if (largestPalindromeFound < number) {
        largestPalindromeFound = number;
      }
    }
  }
}
console.log(`largestPalindromeFound = ${largestPalindromeFound}`);
