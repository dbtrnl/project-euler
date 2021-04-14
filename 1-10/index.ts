import assert from 'assert';

import problem1 from './problem-1';
import problem2 from './problem-2';
import problem3 from './problem-3';
import problem4 from './problem-4';
import problem5 from './problem-5';
import problem6 from './problem-6';
import problem7 from './problem-7';
import problem8 from './problem-8';
import problem9 from './problem-9';
import problem10 from './problem-10';

const projectEulerProblems1to10 = [
  problem1, problem2, problem3, problem4, problem5,
  problem6, problem7, problem8, problem9, problem10,
];
let counter = 0;

const projectEulerProblems1to10Answers = [
  233168, 4613732, 6857, 906609, 232792560,
  25164150, 104743, 23514624000, null, 142913828922,
];

projectEulerProblems1to10.forEach((problem) => {
  const currentProblemAsnwer = problem();
  console.log(`problem ${counter + 1} answer = `, currentProblemAsnwer);
  console.assert(currentProblemAsnwer === projectEulerProblems1to10Answers[counter]);
  counter++;
  console.log('\n');
});
