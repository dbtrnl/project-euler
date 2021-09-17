import { expect } from 'chai'
import {
  assembleTriangle,
  extractTriangleString,
  findMaximumPathSumOfTriangle,
} from './triangleUtils'
import { problem18Input, testTriangle } from '../data'

describe('Test triangleUtils', () => {

  describe('assembleTriangle()', () => {

    it('should return testTriangle when calling function with (problem18Input, 15)', () => {
      const result = assembleTriangle(problem18Input, 15)
      expect(result).to.be.deep.equal(testTriangle)
    })
  })

  describe('extractTriangleString()', () => {

    it('should return correct BigInt when calling function with (25)', () => {
      const testString = `04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
      `
      const expected = '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'

      const result = extractTriangleString(testString)
      expect(result).to.be.deep.equal(expected)
    })
  })

  describe('findMaximumPathSumOfTriangle()', () => {

    it('should return 1074 when calling function with (testTriangle)', () => {
      const result = findMaximumPathSumOfTriangle(testTriangle); expect(result).to.be.equal(1074)
    })
  })
})
