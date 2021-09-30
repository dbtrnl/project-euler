import { problem18Input, testTriangle } from '../../src/data'
import {
  assembleTriangle,
  extractTriangleString,
  findMaximumPathSumOfTriangle,
} from '../../src/utils/triangleUtils'

describe('Test triangleUtils', () => {
  describe('assembleTriangle()', () => {
    test('should return testTriangle when calling function with (problem18Input, 15)', () => {
      const result = assembleTriangle(problem18Input, 15)
      expect(result).toEqual(testTriangle)
    })
  })

  describe('extractTriangleString()', () => {
    test('should return correct BigInt when calling function with (25)', () => {
      const testString = `04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
      `
      const expected = '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'

      const result = extractTriangleString(testString)
      expect(result).toEqual(expected)
    })
  })

  describe('findMaximumPathSumOfTriangle()', () => {
    test('should return 1074 when calling function with (testTriangle)', () => {
      const result = findMaximumPathSumOfTriangle(testTriangle); expect(result).toEqual(1074)
    })
  })
})
