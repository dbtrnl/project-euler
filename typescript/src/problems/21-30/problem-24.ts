import { factorial } from '../../utils'

/**
 * **Problem 24 - Lexicographic permutations**
 *
 * ---
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
 *
 * The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * ---
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */
export default function problem24(): number {
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
