import { expect } from 'chai'
import {
  combinationPermutation,
  combinationFactorial,
  factorial,
  factorialBigInt,
  permutationWithoutRepetition,
  numberLength,
  isNumberPalindrome,
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

    it('should return 120 when calling function with (5)', () => {
      const result = factorial(5); expect(result).to.be.equal(120)
    })

    it('should return 479001600 when calling function with (12)', () => {
      const result = factorial(12); expect(result).to.be.equal(479001600)
    })

    it('should return 51090942171709440000 when calling function with (21)', () => {
      const result = factorial(21); expect(result).to.be.equal(51090942171709440000)
    })

    it('should return 7.257415615308004e+306 when calling function with (170)', () => {
      const result = factorial(170); expect(result).to.be.equal(7.257415615308004e+306)
    })

    it('should throw RangeError when calling function with values >= 171', () => {
      expect(() => factorial(171)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
      expect(() => factorial(9999)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
    })
  })

  describe('permutationWithoutRepetition()', () => {

    it('should throw RangeError when calling function with values <= 0', () => {
      expect(() => permutationWithoutRepetition(-10, -2)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
      expect(() => permutationWithoutRepetition(0, 0)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
    })

    it('should return 1 when calling function with (1,1)', () => {
      const result = permutationWithoutRepetition(1, 1); expect(result).to.be.equal(1)
    })

    it('should return 90 when calling function with (10,2)', () => {
      const result = permutationWithoutRepetition(10, 2); expect(result).to.be.equal(90)
    })

    it('should return 3628800 when calling function with (10,10)', () => {
      const result = permutationWithoutRepetition(10, 10); expect(result).to.be.equal(3628800)
    })

    it('should return 2432902008176640000 when calling function with (20,20)', () => {
      const result = permutationWithoutRepetition(20, 20); expect(result).to.be.equal(2432902008176640000)
    })

    // Actually it's 7257415615307998967396728211129263114716991681296451376543577798900561843401706157852350749242617459511490991237838520776666022565442753025328900773207510902400430280058295603966612599658257104398558294257568966313439612262571094946806711205568880457193340212661452800000000000000000000000000000000000000000
    it('should return 7.257415615308004e+306 when calling function with (20,20)', () => {
      const result = permutationWithoutRepetition(170, 170); expect(result).to.be.equal(7.257415615308004e+306)
    })

    it('should throw RangeError when calling function with (10,11)', () => {
      expect(() => permutationWithoutRepetition(10, 11)).to.throw(
        RangeError, 'Number N should be equal or greater than K',
      )
    })
  })

  describe('combinationFactorial()', () => {

    it('should throw RangeError when calling function with values <= 0', () => {
      expect(() => combinationFactorial(-3, -10)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
      expect(() => combinationFactorial(0, 0)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
    })

    it('should throw RangeError when calling function with (3, 10)', () => {
      expect(() => combinationFactorial(3, 10)).to.throw(
        RangeError, 'Number N should be equal or greater than K',
      )
    })

    it('should return 120 when calling function with (10, 3)', () => {
      const result = combinationFactorial(10, 3); expect(result).to.be.equal(120)
    })

    it('should return 10 when calling function with (10, 9)', () => {
      const result = combinationFactorial(10, 9); expect(result).to.be.equal(10)
    })

    it('should return 1 when calling function with (10, 10)', () => {
      const result = combinationFactorial(10, 10); expect(result).to.be.equal(1)
    })

    it('should return 435 when calling function with (30, 2)', () => {
      const result = combinationFactorial(30, 2); expect(result).to.be.equal(435)
    })

    it('should throw RangeError when calling function with (171, 1)', () => {
      expect(() => combinationFactorial(171, 1)).to.throw(
        RangeError, 'Number is too big, use factorialBigInt() instead',
      )
    })
  })

  describe('combinationPermutation()', () => {

    it('should throw RangeError when calling function with values <= 0', () => {
      expect(() => combinationPermutation(-3, -10)).to.throw(
        RangeError, 'N and K must be positive integers',
      )
    })

    it('should throw RangeError when calling function with (3, 10)', () => {
      expect(() => combinationPermutation(3, 10)).to.throw(
        RangeError, 'Number N should be equal or greater than K',
      )
    })

    it('should return 120 when calling function with (10, 3)', () => {
      const result = combinationPermutation(10, 3); expect(result).to.be.equal(120)
    })

    it('should return 10 when calling function with (10, 9)', () => {
      const result = combinationPermutation(10, 9); expect(result).to.be.equal(10)
    })

    it('should return 1 when calling function with (10, 10)', () => {
      const result = combinationPermutation(10, 10); expect(result).to.be.equal(1)
    })

    it('should return 435 when calling function with (30, 2)', () => {
      const result = combinationPermutation(30, 2); expect(result).to.be.equal(435)
    })
  })

  describe('numberLength()', () => {

    it('should return 30 when calling function with (-123456789009876543211234567890)', () => {
      const result = numberLength(-123456789009876543211234567890); expect(result).to.be.equal(30)
    })

    it('should return 10 when calling function with (-1234567890)', () => {
      const result = numberLength(-1234567890); expect(result).to.be.equal(10)
    })

    it('should return 4 when calling function with (-2832)', () => {
      const result = numberLength(-2832); expect(result).to.be.equal(4)
    })

    it('should return 1 when calling function with (-1)', () => {
      const result = numberLength(-1); expect(result).to.be.equal(1)
    })

    it('should return 1 when calling function with (0)', () => {
      const result = numberLength(0); expect(result).to.be.equal(0)
    })

    it('should return 1 when calling function with (1)', () => {
      const result = numberLength(1); expect(result).to.be.equal(1)
    })

    it('should return 4 when calling function with (1000)', () => {
      const result = numberLength(1000); expect(result).to.be.equal(4)
    })

    it('should return 10 when calling function with (9999999999)', () => {
      const result = numberLength(9999999999); expect(result).to.be.equal(10)
    })

    it('should return 30 when calling function with (123456789009876543211234567890)', () => {
      const result = numberLength(123456789009876543211234567890); expect(result).to.be.equal(30)
    })
  })

  describe('isNumberPalindrome()', () => {

    it('should return TRUE when calling function with (9)', () => {
      const result = isNumberPalindrome(9); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (12)', () => {
      const result = isNumberPalindrome(12); expect(result).to.be.equal(false)
    })

    it('should return TRUE when calling function with (12321)', () => {
      const result = isNumberPalindrome(12321); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (9999999999)', () => {
      const result = isNumberPalindrome(9999999999); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (1234567887654321)', () => {
      const result = isNumberPalindrome(1234567887654321); expect(result).to.be.equal(true)
    })

    it('should return FALSE when calling function with (89)', () => {
      const result = isNumberPalindrome(89); expect(result).to.be.equal(false)
    })

    it('should return FALSE when calling function with (123124)', () => {
      const result = isNumberPalindrome(123124); expect(result).to.be.equal(false)
    })

    it('should return FALSE when calling function with (134567890987654321)', () => {
      const result = isNumberPalindrome(134567890987654321); expect(result).to.be.equal(false)
    })
  })

})
