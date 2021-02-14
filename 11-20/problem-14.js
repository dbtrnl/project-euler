console.log(
  '-----\nThe following iterative sequence is defined for the set of positive integers:\nn -> n/2 (n is even)\nn -> 3n + 1 (n is odd)\nUsing the rule above and starting with 13, we generate the following sequence:\n13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1\nIt can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.\nWhich starting number, under one million, produces the longest chain?\n-----\n'
);

let findCollatzSequence = (num) => {
  let sequence = [num];

  while (num > 1) {
    if (num % 2 == 0) {
      num = num / 2;
      sequence.push(num);
    } else {
      num = 3 * num + 1;
      sequence.push(num);
    }
  }
  return {
    number: sequence[0],
    sequence: sequence,
  };
};

const main = () => {
  let iterations = 1000000;
  let longestChain = {
    number: 0,
    sequence: [],
  };

  for (let i = 0; i <= iterations; i++) {
    let k = findCollatzSequence(i);
    if (longestChain.sequence.length < k.sequence.length) {
      longestChain = k;
      console.log(
        `Longest chain so far: ${longestChain.sequence.length} with number ${longestChain.number}`
      );
    }
    if (i == iterations) {
      console.log(`The answer is ${longestChain.number}`);
    }
  }
};

main();
