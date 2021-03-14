/*
  Problem 4 - Largest palindrome product

  A palindromic number reads the same both ways.
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers
*/

import { isNumberPalindrome } from '../utils';

(() => {
  const main = (): void => {
    let largestPalindrome: number = 0;

    for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
        let currentNumber = i * j;

        if (isNumberPalindrome(currentNumber)) {
          // console.log(`${currentNumber} is a palindrome`);
          if (largestPalindrome < currentNumber) largestPalindrome = currentNumber;
        }
      }
    }
    console.log(`largestPalindrome = ${largestPalindrome}`);
  }
  main();
})()