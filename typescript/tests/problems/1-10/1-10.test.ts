import {
  answers, problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10,
} from '../../../src/problems/1-10'

describe('Problems 1-10', () => {
  test('problem1 returns the expected answer', () => { const result = problem1(); expect(result).toStrictEqual(answers[0]) })
  test('problem2 returns the expected answer', () => { const result = problem2(); expect(result).toStrictEqual(answers[1]) })
  test('problem3 returns the expected answer', () => { const result = problem3(); expect(result).toStrictEqual(answers[2]) })
  test('problem4 returns the expected answer', () => { const result = problem4(); expect(result).toStrictEqual(answers[3]) })
  test('problem5 returns the expected answer', () => { const result = problem5(); expect(result).toStrictEqual(answers[4]) })
  test('problem6 returns the expected answer', () => { const result = problem6(); expect(result).toStrictEqual(answers[5]) })
  test('problem7 returns the expected answer', () => { const result = problem7(); expect(result).toStrictEqual(answers[6]) })
  test('problem8 returns the expected answer', () => { const result = problem8(); expect(result).toStrictEqual(answers[7]) })
  test('problem9 returns the expected answer', () => { const result = problem9(); expect(result).toStrictEqual(answers[8]) })
  test('problem10 returns the expected answer', () => { const result = problem10(); expect(result).toStrictEqual(answers[9]) })
})
