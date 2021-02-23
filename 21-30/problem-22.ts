// Problem 22 - Names scores

import { readFileSync } from 'fs';

const FILE_PATH = './assets/p022_names.txt';
const problemInput = readFileSync(FILE_PATH).toString('utf-8');
const testStringLower = 'abcdefghijklmnopqrstuvwxyz'
const testStringUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const namesArray = problemInput.replace(/"/g, '').split(',');

const sortedNamesArray = namesArray.sort();

const findNameScore = (name: string): number => {
  // let score = [];
  let splitName = [];
  splitName = name.split('');

  // parseInt in Base 36 returns the numeric code
  splitName.forEach(char => {
    console.log(`parsing ${char} to ${(parseInt(char, 36) - 9)}`)
    return (parseInt(char, 36) - 9)
  });

  return 1;
}

const main = (): void => {
  let position;
  let score: number;

  findNameScore(testStringLower);
  findNameScore(testStringUpper);

  // for (let i = 0; i <= sortedNamesArray.length - 1; i++) {
  //   position = i + 1;
  //   findNameScore(sortedNamesArray[i])
  // }
}

main();