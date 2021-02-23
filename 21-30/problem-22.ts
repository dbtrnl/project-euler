// Problem 22 - Names scores

import { readFileSync } from 'fs';

const assembleSortedNamesArray = (input: string): string[] => {
  const problemInput = readFileSync(input).toString('utf-8');
  const namesArray = problemInput.replace(/"/g, '').split(',');
  return namesArray.sort();
}

const findNameScore = (name: string): number => {
  let nameScore: number = 0;
  let iterator: number = 0;
  let nameArray = [];
  nameArray = name.split('');

  nameArray.forEach(char => {
    iterator = parseInt(char, 36) - 9;
    nameScore += iterator;
    return;
  });
  return nameScore;
}

const main = (): void => {
  let position;
  let finalScore: number = 0;
  const FILE_PATH = './data/p022_names.txt';

  console.time();
  const sortedNamesArray = assembleSortedNamesArray(FILE_PATH);

  for (let i = 0; i <= sortedNamesArray.length - 1; i++) {
    position = i + 1;
    finalScore += (position * findNameScore(sortedNamesArray[i]));
  }

  console.timeEnd();
  console.log(`Final score is ${finalScore}`);
}

main();