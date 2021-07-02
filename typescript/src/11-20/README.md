### Problem 15

Notes

For a 2x2 grid, there are 3x3 routes possible:
[0,0] > [0,1] > [0,2] > [1,2] > [2,2]
... etc

So for a N x N grid, N+1 x N+1 matrix is needed

### Problem 18

- First attempt
```typescript
  /*
  // 1 - calculate prevIndex or prevIndex + 1
  // This one returns 1064
  // The problem with this solution is that ignores a number of paths
  const returnBiggestNumber = (input: TriangleRow, prevIndex: number): BiggestNumberObject => {
    let largestNum: number = 0;

    // If it's the first row of the triangle
    // if (input.length == 1) return { number: input[0], prevIndex: 0 }

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
  const findPath = (triangle: Triangle): number => {
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
  */
 ```