/*
  Problem 2 - Even Fibonacci Numbers

  Each new term in the Fibonacci sequence is generated by adding the previous two terms.
  By starting with 1 and 2, the first 10 terms will be:
  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */
const problem2 = ((): number => {
  const fibArray: number[] = [];

  // Setting the first elements of the arrays cause i'm lazy
  fibArray[0] = 1;
  fibArray[1] = 2;

  const main = (): number => {
    let iterator = 2;
    let currentNum = fibArray[iterator - 1] + fibArray[iterator - 2];

    while (currentNum <= 4000000) {
      fibArray.push(currentNum);
      iterator++;
      currentNum = fibArray[iterator - 1] + fibArray[iterator - 2];
    }

    const answer: number = fibArray.filter((number) => {
      // If number is not even
      if (number % 2 !== 0) return null;
      return number;
    }).reduce((sum, number) => {
      return sum + number;
    });

    console.log(`The answer is: ${answer}`);
    return answer;
  };

  const result = main();
  return result;
});

export default problem2;
