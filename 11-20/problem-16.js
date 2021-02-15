console.log(
  '-----\n2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.\nWhat is the sum of the digits of the number 2^1000?\n-----\n'
);

let answer = 0;
let problemInput = Math.pow(2, 1000);

problemInput = problemInput.toString();
problemInput = problemInput
  .replace('.', '')
  .replace(problemInput.substr(problemInput.indexOf('e')), '');

for (let i = 0; i < problemInput.length; i++) {
  answer += parseInt(problemInput[i]);
}

console.log(answer);
