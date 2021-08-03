import { expect } from 'chai'
import {
  combinationPermutation,
  combinationFactorial,
  factorial,
  factorialBigInt,
} from './simpleNumberUtils'

describe('Test simpleNumberUtils', () => {

  describe('factorial()', () => {

    it('should throw RangeError when calling function with n <= 0', () => {
      expect(() => factorial(0)).to.throw(
        RangeError, 'Number should be greater than zero',
      )
      expect(() => factorial(-200)).to.throw(
        RangeError, 'Number should be greater than zero',
      )
    })

    it('should return 120 when calling function with n = 5', () => {
      const result = factorial(5); expect(result).to.be.equal(120)
    })

    it('should return 479001600 when calling function with n = 12', () => {
      const result = factorial(12); expect(result).to.be.equal(479001600)
    })

    it('should return 51090942171709440000 when calling function with n = 21', () => {
      const result = factorial(21); expect(result).to.be.equal(51090942171709440000)
    })

    it('should return 7.257415615308004e+306 when calling function with n = 170', () => {
      const result = factorial(170); expect(result).to.be.equal(7.257415615308004e+306)
    })

    it('should throw RangeError when calling function with n >= 171', () => {
      expect(() => factorial(171)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
      expect(() => factorial(9999)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
    })
  })

  describe('combinationPermutation()', () => {

    it('should throw RangeError when calling function with n = -3 and k = -10', () => {
      expect(() => combinationPermutation(-3, -10)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
    })

    it('should throw RangeError when calling function with n = 3 and k = 10', () => {
      expect(() => combinationPermutation(3, 10)).to.throw(
        RangeError, 'Number N should be equal or greater than K',
      )
    })

    it('should return 120 when calling function with n = 10 and k = 3', () => {
      const result = combinationPermutation(10, 3); expect(result).to.be.equal(120)
    })

    it('should return 10 when calling function with n = 10 and k = 9', () => {
      const result = combinationPermutation(10, 9); expect(result).to.be.equal(10)
    })

    it('should return 1 when calling function with n = 10 and k = 10', () => {
      const result = combinationPermutation(10, 10); expect(result).to.be.equal(1)
    })

    it('should return 435 when calling function with n = 30 and k = 2', () => {
      const result = combinationPermutation(30, 2); expect(result).to.be.equal(435)
    })
  })

  describe('combinationFactorial()', () => {

    it('should throw RangeError when calling function with n = 3 and k = 10', () => {
      expect(() => combinationFactorial(3, 10)).to.throw(
        RangeError, 'Number N should be equal or greater than K',
      )
    })

    it('should throw RangeError when calling function with n = -3 and k = -10', () => {
      expect(() => combinationFactorial(-3, -10)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
    })

    it('should return 120 when calling function with n = 10 and k = 3', () => {
      const result = combinationFactorial(10, 3); expect(result).to.be.equal(120)
    })

    it('should return 10 when calling function with n = 10 and k = 9', () => {
      const result = combinationFactorial(10, 9); expect(result).to.be.equal(10)
    })

    it('should return 1 when calling function with n = 10 and k = 10', () => {
      const result = combinationFactorial(10, 10); expect(result).to.be.equal(1)
    })

    it('should return 435 when calling function with n = 30 and k = 2', () => {
      const result = combinationFactorial(30, 2); expect(result).to.be.equal(435)
    })

    it('should throw RangeError when calling function with n = 171 and k = 1', () => {
      expect(() => combinationFactorial(171, 1)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
    })
  })
})
