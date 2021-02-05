console.log(
  '-----\nA palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers.\n-----\n'
);

const reverseNumber = (num) => {
  let inverseNum = [];
  let temp = '';
  let numLength = num.length;

  num = num.split('');

  for (i = 0; i <= numLength - 1; i++) {
    temp = num.pop();
    inverseNum.push(temp);
  }
  return inverseNum.join(',').replace(/,/g, '');
};

const checkIfNumberIsPalindrome = (number) => {
  let reverseNumber = reverseNumber(number);
  let largestPalindromeFound;

  if (number === reverseNumber) {
    console.log(`Number ${number} is a palindrome`);
    largestPalindromeFound = number;
  }

  // ???

  // Final da função
  // console.log(num === reverseNum ? 'is a palindrome' : 'is NOT a palindrome');
};

checkIfNumberIsPalindrome();

reverseNumber('212443');
