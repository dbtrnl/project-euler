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
  // console.log(`number=${number}---reverse=${reverseNumber}`);
  // console.log(`number=${typeof number}---reverse=${typeof reverseNumber}`);
  let largestPalindromeFound;

  if (number == reverseNumber) {
    if (reverseNumber.length > 5) {
      console.log(`Number ${number} is a palindrome`);
    }
  }
};

for (i = 100; i < 1000; i++) {
  // console.log(`i = ${i}`);
  for (j = 100; j < 1000; j++) {
    // console.log(`j = ${j}`);
    let number = i * j;
    // console.log(`number is ${i} * ${j} = ${number}`);
    checkIfNumberIsPalindrome(number);
  }
  // for (j = 0; j < 10; j++) {
  //   console.log(`j = ${j}`)
  // }
}
