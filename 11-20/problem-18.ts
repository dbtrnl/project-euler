console.log(
  '-----\nBy starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.\n\n3\n7 4\n2 4 6\n8 5 9 3\n\nThat is, 3 + 7 + 4 + 9 = 23.\nFind the maximum total from top to bottom of the triangle below:\nNOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)\n-----\n'
);

// import problem67Input from ('../assets/problem67-input');

let problemInput = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`;

let testInput = `3
7 4
2 4 6
8 5 9 3
`

type Triangle = Int8Array[];
type TriangleRow = Int8Array;

interface BiggestNumberObject {
  number: number;
  prevIndex: number;
}

const extractString = (inputString: string): string => {
  return inputString.substring(0, inputString.indexOf('\n'));
};

const assembleTriangle = (input: string): Array<Int8Array> => {
  let str: string;
  let splitStr: any;
  let strArr: Int8Array;
  let triangle: Array<Int8Array> = [];
  let numberOfRows: number = 15;

  for (let i = 0; i < numberOfRows; i++) {
    // Extracting and splitting each string row
    str = extractString(input);
    splitStr = str.split(' ');

    // Creating the number array
    strArr = new Int8Array([...splitStr]);
    triangle.push(strArr);

    // Replacing the input to loop to the next string row
    input = input.replace(input.substring(0, input.indexOf('\n') + 1), '');
  }
  return triangle;
};
/* 
// Top down solutions

// 1 - calculate prevIndex or prevIndex + 1
// This one returns 1064
const returnBiggestNumber = (input: TriangleRow, prevIndex: number): BiggestNumberObject => {
  let largestNum: number = 0;

  // If it's the first row of the triangle
  if (input.length == 1) return { number: input[0], prevIndex: 0 }

  // console.log(`${input[prevIndex]} > ${input[prevIndex + 1]} ? (${input[prevIndex] > input[prevIndex + 1]})`)
  if (input[prevIndex + 1] > input[prevIndex]) {
    largestNum = input[prevIndex + 1]
    // console.log(`returning ${largestNum} on index ${prevIndex + 1}\n`)
    return { number: largestNum, prevIndex: prevIndex + 1 };
  } else {
    largestNum = input[prevIndex];
    // console.log(`returning ${largestNum} on index ${prevIndex}\n`)
    return { number: largestNum, prevIndex: prevIndex };
  }
}

// 2 - calculation prevIndex, prevIndex+1 and prevIndex-1 (every iteration has 3 possibilities)
// This one returns 1088
const returnBiggestNumber = (input: TriangleRow, prevIndex: number): BiggestNumberObject => {
  let largestNum: number = 0;
  let currentIndex: number = 0;

  // If it's the first row of the triangle
  if (input.length == 1) return { number: input[0], prevIndex: 0 }

  // Search the adjacent numbers of the next row (index-1, index, and index+1)
  for (let i = prevIndex - 1; i <= prevIndex + 1; i++) {
    if (input[i] > largestNum) {
      largestNum = input[i];
      currentIndex = i;
    }
  }
  return { number: largestNum, prevIndex: currentIndex };
}
 */

const returnBiggestNumber = (input: TriangleRow, prevIndex: number): BiggestNumberObject => {
  let largestNum: number = 0;
  let currentIndex: number = 0;

  // If it's the first row of the triangle
  if (input.length == 1) return { number: input[0], prevIndex: 0 }

  return { number: largestNum, prevIndex: currentIndex };
}


const maximumPathSum = (triangle: Triangle): number => {
  let sum: number = 0;
  let biggestNumber: BiggestNumberObject = {
    number: 0,
    prevIndex: 0
  };

  for (let i = 0; i < triangle.length; i++) {
    biggestNumber = returnBiggestNumber(triangle[i], biggestNumber.prevIndex);
    console.log(`Summing ${sum} + ${biggestNumber.number} (index ${biggestNumber.prevIndex})`)
    sum += biggestNumber.number;
  }
  return sum;
}

const main = (): void => {
  const triangle = assembleTriangle(problemInput);
  const answer = maximumPathSum(triangle);

  console.log(`The answer is ${answer}`)
};

main();
