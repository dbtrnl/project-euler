// Problem 22 - Names scores

import { readFileSync } from 'fs';

const FILE_PATH = './assets/p022_names.txt';

(() => {
  let input = readFileSync(FILE_PATH).toString();
  console.log(typeof input);
})();