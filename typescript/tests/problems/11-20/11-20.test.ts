import {
  answers, problem11, problem12, problem13, problem14, problem15, problem16, problem17, problem18, problem19, problem20,
} from '../../../src/problems/11-20'

describe('Problems 11-20', () => {
  test('problem11 returns the expected answer', () => { const result = problem11(); expect(result).toStrictEqual(answers[0]) })
  test('problem12 returns the expected answer', () => { const result = problem12(); expect(result).toStrictEqual(answers[1]) })
  test('problem13 returns the expected answer', () => { const result = problem13(); expect(result).toStrictEqual(answers[2]) })
  test('problem14 returns the expected answer', () => { const result = problem14(); expect(result).toStrictEqual(answers[3]) })
  test('problem15 returns the expected answer', () => { const result = problem15(); expect(result).toStrictEqual(answers[4]) })
  test('problem16 returns the expected answer', () => { const result = problem16(); expect(result).toStrictEqual(answers[5]) })
  test('problem17 returns the expected answer', () => { const result = problem17(); expect(result).toStrictEqual(answers[6]) })
  test('problem18 returns the expected answer', () => { const result = problem18(); expect(result).toStrictEqual(answers[7]) })
  test('problem19 returns the expected answer', () => { const result = problem19(); expect(result).toStrictEqual(answers[8]) })
  test('problem20 returns the expected answer', () => { const result = problem20(); expect(result).toStrictEqual(answers[9]) })
})
