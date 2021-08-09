import { expect } from 'chai'
import { AllProperDivisorsResult, AmicableNumberObject, NumberClassification } from 'src/interfaces'
import {
  findAllProperDivisors,
  isAmicableNumber,
  isNumberDeficientPerfectOrAbundant,
} from './divisorsProductsUtils'

describe('Test divisorsProductsUtils', () => {

  describe('findAllProperDivisors()', () => {
    it('should return NULL when calling function with (0)', () => {
      const expected: AllProperDivisorsResult = null
      const result = findAllProperDivisors(0); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1)', () => {
      const expected: AllProperDivisorsResult = [1]
      const result = findAllProperDivisors(1); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (2)', () => {
      const expected: AllProperDivisorsResult = [1, 2]
      const result = findAllProperDivisors(2); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (8)', () => {
      const expected: AllProperDivisorsResult = [1, 2, 4]
      const result = findAllProperDivisors(8); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (15)', () => {
      const expected: AllProperDivisorsResult = [1, 3, 5]
      const result = findAllProperDivisors(15); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (16)', () => {
      const expected: AllProperDivisorsResult = [1, 2, 4, 8]
      const result = findAllProperDivisors(16); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (100)', () => {
      const expected: AllProperDivisorsResult = [1, 2, 4, 5, 10, 20, 25, 50]
      const result = findAllProperDivisors(100); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1000)', () => {
      const expected: AllProperDivisorsResult = [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500]
      const result = findAllProperDivisors(1000); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1001)', () => {
      const expected: AllProperDivisorsResult = [1, 7, 11, 13, 77, 91, 143]
      const result = findAllProperDivisors(1001); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1003)', () => {
      const expected: AllProperDivisorsResult = [1, 17, 59]
      const result = findAllProperDivisors(1003); expect(result).to.have.members(expected)
    })
  })

  describe('isAmicableNumber()', () => {
    it('should throw RangeError when calling function with negative values', () => {
      expect(() => isAmicableNumber(-238293)).to.throw(
        RangeError, 'Number must be greater or equal than zero',
      )
      expect(() => isAmicableNumber(-1)).to.throw(
        RangeError, 'Number must be greater or equal than zero',
      )
    })

    it('should return expected result when calling function with (220)', () => {
      const expected: AmicableNumberObject = { isAmicable: true, pair: [220, 284] }
      const result = isAmicableNumber(220); expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with (2620)', () => {
      const expected: AmicableNumberObject = { isAmicable: true, pair: [2620, 2924] }
      const result = isAmicableNumber(2620); expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with (79750)', () => {
      const expected: AmicableNumberObject = { isAmicable: true, pair: [79750, 88730] }
      const result = isAmicableNumber(79750); expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with (221)', () => {
      const expected: AmicableNumberObject = { isAmicable: false, pair: null }
      const result = isAmicableNumber(221); expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with (0)', () => {
      const expected: AmicableNumberObject = { isAmicable: false, pair: null }
      const result = isAmicableNumber(0); expect(result).to.be.deep.equal(expected)
    })
  })

  describe('isNumberDeficientPerfectOrAbundant()', () => {
    it('should return "perfect" when calling function with (28)', () => {
      const expected: NumberClassification = 'perfect'
      const result = isNumberDeficientPerfectOrAbundant(28); expect(result).to.be.equal(expected)
    })

    it('should return "perfect" when calling function with (8128)', () => {
      const expected: NumberClassification = 'perfect'
      const result = isNumberDeficientPerfectOrAbundant(8128); expect(result).to.be.equal(expected)
    })

    it('should return "perfect" when calling function with (33550336)', () => {
      const expected: NumberClassification = 'perfect'
      const result = isNumberDeficientPerfectOrAbundant(33550336); expect(result).to.be.equal(expected)
    })

    it('should return "perfect" when calling function with (137438691328)', () => {
      const expected: NumberClassification = 'perfect'
      const result = isNumberDeficientPerfectOrAbundant(137438691328); expect(result).to.be.equal(expected)
    })

    it('should return "abundant" when calling function with (12)', () => {
      const expected: NumberClassification = 'abundant'
      const result = isNumberDeficientPerfectOrAbundant(12); expect(result).to.be.equal(expected)
    })

    it('should return "abundant" when calling function with (40)', () => {
      const expected: NumberClassification = 'abundant'
      const result = isNumberDeficientPerfectOrAbundant(40); expect(result).to.be.equal(expected)
    })

    it('should return "abundant" when calling function with (120)', () => {
      const expected: NumberClassification = 'abundant'
      const result = isNumberDeficientPerfectOrAbundant(120); expect(result).to.be.equal(expected)
    })

    it('should return "abundant" when calling function with (5775)', () => {
      const expected: NumberClassification = 'abundant'
      const result = isNumberDeficientPerfectOrAbundant(5775); expect(result).to.be.equal(expected)
    })

    it('should return "abundant" when calling function with (5985)', () => {
      const expected: NumberClassification = 'abundant'
      const result = isNumberDeficientPerfectOrAbundant(5985); expect(result).to.be.equal(expected)
    })

    it('should return "deficient" when calling function with (0)', () => {
      const expected: NumberClassification = 'deficient'
      const result = isNumberDeficientPerfectOrAbundant(10); expect(result).to.be.equal(expected)
    })

    it('should return "deficient" when calling function with (10)', () => {
      const expected: NumberClassification = 'deficient'
      const result = isNumberDeficientPerfectOrAbundant(10); expect(result).to.be.equal(expected)
    })

    it('should return "deficient" when calling function with (13)', () => {
      const expected: NumberClassification = 'deficient'
      const result = isNumberDeficientPerfectOrAbundant(10); expect(result).to.be.equal(expected)
    })
  })

})
