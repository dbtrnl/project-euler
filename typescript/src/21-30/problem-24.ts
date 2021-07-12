/*
  A permutation is an ordered arrangement of objects.
  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
  If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
  The lexicographic permutations of 0, 1 and 2 are:

  012   021   102   120   201   210

  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

import { factorial } from '../_utils/index'

export default function problem24(): number {
  /*
  First permutations will begin with 0 = 9! = 362880 permutations beginning with 0
  362880 + 362880 + 362880 = 1088640
  So the millionth permutation has to begin with 2

  The first permutation beginning with 2 is the 725761st (725760 + 1)

  All permutations beginning with 20 = 8! = 40320
  Permutations beginning with 20 end at (725760 + 40320) = 766080
  Permutations beginning with 21 end at (766080 + 40320) = 806400
  Permutations beginning with 22 end at (806400 + 40320) = 846720
  Permutations beginning with 23 end at (846720 + 40320) = 887040
  Permutations beginning with 24 end at (887040 + 40320) = 927360
  Permutations beginning with 25 end at (927360 + 40320) = 967680
  Permutations beginning with 26 end at (967680 + 40320) = 1008000

  Permutations beginning with 260 = 7! = (967680 + 5040) = 972720
  ...
  Permutations beginning with 276 = 7! = (997920 + 5040) = 1002960

  Permutations beginning with 2760 = 6! = (997920 + 720) = 998640
  ...
  Permutations beginning with 2762 = 6! = (999360 + 720) = 1000080

  Permutations beginning with 2760 = 5! = (999360 + 720) = 1000080

  So the millionth permutation begins with 25
 */
  function main(): number {
    // Solution adapted from https://www.mathblog.dk/project-euler-24-millionth-lexicographic-permutation/
    const permutations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const N = permutations.length
    let result = ''
    let remain = 1000000 - 1

    const remainingNumbers = []
    for (let i = 0; i < N; i++) {
      remainingNumbers.push(i)
    }

    for (let i = 1; i < N; i++) {
      const j = Math.floor(remain / factorial(N - i))
      remain %= factorial(N - i)
      // console.log('appending', remainingNumbers[j], 'j:', j, 'avaliable:', remainingNumbers)
      result += remainingNumbers[j].toString()
      remainingNumbers.splice(remainingNumbers.indexOf(remainingNumbers[j]), 1)
      if (remain === 0) break
    }
    // console.log('result', result, 'remaining:', remainingNumbers)

    for (let i = 0; i < remainingNumbers.length; i++) {
      result += remainingNumbers[i]
    }
    return parseInt(result, 10)
  }
  const result = main()
  return result
}
