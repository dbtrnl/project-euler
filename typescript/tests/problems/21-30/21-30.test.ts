import {
  answers, problem21, problem22, problem23, problem24, problem25, problem26, problem27, problem28, problem29, problem30,
} from '../../../src/problems/21-30'

describe('Problems 21-30', () => {
  test('problem21 should return expected result', () => { const result = problem21(); expect(result).toStrictEqual(answers[0]) })
  test('problem22 should return expected result', () => { const result = problem22(); expect(result).toStrictEqual(answers[1]) })
  test('problem23 should return expected result', () => { const result = problem23(); expect(result).toStrictEqual(answers[2]) })
  test('problem24 should return expected result', () => { const result = problem24(); expect(result).toStrictEqual(answers[3]) })
  test('problem25 should return expected result', () => { const result = problem25(); expect(result).toStrictEqual(answers[4]) })
  test('problem26 should return expected result', () => { const result = problem26(); expect(result).toStrictEqual(answers[5]) })
  test('problem27 should return expected result', () => { const result = problem27(); expect(result).toStrictEqual(answers[6]) })
  test.todo('problem28 should return expected result')
  test('problem29 should return expected result', () => { const result = problem29(); expect(result).toStrictEqual(answers[8]) })
  test('problem30 should return expected result', () => { const result = problem30(); expect(result).toStrictEqual(answers[9]) })
})
