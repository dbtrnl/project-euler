/*
  Problem 16 - 	Power digit sum

  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.\nWhat is the sum of the digits of the number 2^1000?
*/
(() => {
  const main = () => {
    let answer = 0;
    let number: number | bigint = BigInt(Math.pow(2, 1000));
    const numberString: string = number.toString();

    for (let i = 0; i < numberString.length; i++) {
      answer += parseInt(numberString[i]);
    }

    console.log(`The answer is ${answer}`);
  }
  main();
})()