console.log(
  '-----\nA palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers.\n-----\n'
);

const checkIfNumberIsPalindrome = (number) => {
  let num = number;
  let reverseNum = number;

  // For loop para reverter o número
  for (i = 0; i <= reverseNum.length - 1; i++) {
    console.log();
  }
  // ???

  // Final da função
  console.log(
    num === reverseNum ? 'is a palindrome' : "is NOT a palindrome"
  );
};

checkIfNumberIsPalindrome();
