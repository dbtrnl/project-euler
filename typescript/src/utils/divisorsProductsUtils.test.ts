import { expect } from 'chai'
import { AllDivisors, AmicableNumberObject, NumberClassification } from 'src/interfaces'
import { findAbundantNumbersUntil } from '.'
import {
  findAllDivisors,
  findAllProperDivisors,
  findAmicableNumbersUnder,
  findAndSumAllDivisors,
  findAndSumAllProperDivisors,
  isAmicableNumber,
  isEvenlyDivisibleByEveryNumberInInterval,
  isNumberAbundant,
  isNumberDeficientPerfectOrAbundant,
  isNumberEvenlyDivisibleBy,
} from './divisorsProductsUtils'

describe('Test divisorsProductsUtils', () => {

  describe('findAllProperDivisors()', () => {
    it('should return NULL when calling function with (0)', () => {
      const expected: AllDivisors = null
      const result = findAllProperDivisors(0); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1)', () => {
      const expected: AllDivisors = [1]
      const result = findAllProperDivisors(1); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (2)', () => {
      const expected: AllDivisors = [1]
      const result = findAllProperDivisors(2); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (8)', () => {
      const expected: AllDivisors = [1, 2, 4]
      const result = findAllProperDivisors(8); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (15)', () => {
      const expected: AllDivisors = [1, 3, 5]
      const result = findAllProperDivisors(15); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (16)', () => {
      const expected: AllDivisors = [1, 2, 4, 8]
      const result = findAllProperDivisors(16); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (100)', () => {
      const expected: AllDivisors = [1, 2, 4, 5, 10, 20, 25, 50]
      const result = findAllProperDivisors(100); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1000)', () => {
      const expected: AllDivisors = [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500]
      const result = findAllProperDivisors(1000); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1001)', () => {
      const expected: AllDivisors = [1, 7, 11, 13, 77, 91, 143]
      const result = findAllProperDivisors(1001); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1003)', () => {
      const expected: AllDivisors = [1, 17, 59]
      const result = findAllProperDivisors(1003); expect(result).to.have.members(expected)
    })
  })

  describe('findAllDivisors()', () => {
    it('should return NULL when calling function with (0)', () => {
      const expected: AllDivisors = null
      const result = findAllDivisors(0); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1)', () => {
      const expected: AllDivisors = [1]
      const result = findAllDivisors(1); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (2)', () => {
      const expected: AllDivisors = [1, 2]
      const result = findAllDivisors(2); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (8)', () => {
      const expected: AllDivisors = [1, 2, 4, 8]
      const result = findAllDivisors(8); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (15)', () => {
      const expected: AllDivisors = [1, 3, 5, 15]
      const result = findAllDivisors(15); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (16)', () => {
      const expected: AllDivisors = [1, 2, 4, 8, 16]
      const result = findAllDivisors(16); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (100)', () => {
      const expected: AllDivisors = [1, 2, 4, 5, 10, 20, 25, 50, 100]
      const result = findAllDivisors(100); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1000)', () => {
      const expected: AllDivisors = [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500, 1000]
      const result = findAllDivisors(1000); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1001)', () => {
      const expected: AllDivisors = [1, 7, 11, 13, 77, 91, 143, 1001]
      const result = findAllDivisors(1001); expect(result).to.have.members(expected)
    })

    it('should return expected result when calling function with (1003)', () => {
      const expected: AllDivisors = [1, 17, 59, 1003]
      const result = findAllDivisors(1003); expect(result).to.have.members(expected)
    })
  })

  describe('findAndSumAllProperDivisors', () => {
    it('should return NULL when calling function with (0)', () => {
      const expected: AllDivisors = null
      const result = findAndSumAllProperDivisors(0); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1)', () => {
      const expected = 1
      const result = findAndSumAllProperDivisors(1); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (2)', () => {
      const expected = 1
      const result = findAndSumAllProperDivisors(2); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (8)', () => {
      const expected = 7
      const result = findAndSumAllProperDivisors(8); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (15)', () => {
      const expected = 9
      const result = findAndSumAllProperDivisors(15); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (16)', () => {
      const expected = 15
      const result = findAndSumAllProperDivisors(16); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (100)', () => {
      const expected = 117
      const result = findAndSumAllProperDivisors(100); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1000)', () => {
      const expected = 1340
      const result = findAndSumAllProperDivisors(1000); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1001)', () => {
      const expected = 343
      const result = findAndSumAllProperDivisors(1001); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1003)', () => {
      const expected = 77
      const result = findAndSumAllProperDivisors(1003); expect(result).to.be.equal(expected)
    })
  })

  describe('findAndSumAllDivisors', () => {
    it('should return NULL when calling function with (0)', () => {
      const expected: AllDivisors = null
      const result = findAndSumAllDivisors(0); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1)', () => {
      const expected = 1
      const result = findAndSumAllDivisors(1); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (2)', () => {
      const expected = 3
      const result = findAndSumAllDivisors(2); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (8)', () => {
      const expected = 15
      const result = findAndSumAllDivisors(8); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (15)', () => {
      const expected = 24
      const result = findAndSumAllDivisors(15); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (16)', () => {
      const expected = 31
      const result = findAndSumAllDivisors(16); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (100)', () => {
      const expected = 217
      const result = findAndSumAllDivisors(100); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1000)', () => {
      const expected = 2340
      const result = findAndSumAllDivisors(1000); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1001)', () => {
      const expected = 1344
      const result = findAndSumAllDivisors(1001); expect(result).to.be.equal(expected)
    })

    it('should return expected result when calling function with (1003)', () => {
      const expected = 1080
      const result = findAndSumAllDivisors(1003); expect(result).to.be.equal(expected)
    })
  })

  describe('isNumberEvenlyDivisibleBy()', () => {
    it('should throw RangeError when calling function with zero and/or negative values', () => {
      expect(() => isNumberEvenlyDivisibleBy(-238293, -23234)).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
      expect(() => isNumberEvenlyDivisibleBy(-1, 0)).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
      expect(() => isNumberEvenlyDivisibleBy(0, -1)).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
      expect(() => isNumberEvenlyDivisibleBy(0, 0)).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
    })

    it('should return TRUE result when calling function with (1, 1)', () => {
      const result = isNumberEvenlyDivisibleBy(2, 2); expect(result).to.be.equal(true)
    })

    it('should return TRUE result when calling function with (2, 2)', () => {
      const result = isNumberEvenlyDivisibleBy(2, 2); expect(result).to.be.equal(true)
    })

    it('should return TRUE result when calling function with (200, 4)', () => {
      const result = isNumberEvenlyDivisibleBy(200, 4); expect(result).to.be.equal(true)
    })

    it('should return FALSE result when calling function with (4, 200)', () => {
      const result = isNumberEvenlyDivisibleBy(4, 200); expect(result).to.be.equal(false)
    })

    it('should return FALSE result when calling function with (2, 4)', () => {
      const result = isNumberEvenlyDivisibleBy(2, 4); expect(result).to.be.equal(false)
    })
  })

  describe('isEvenlyDivisibleByEveryNumberInInterval()', () => {
    it('should throw RangeError when calling function with invalid interval', () => {
      expect(() => isEvenlyDivisibleByEveryNumberInInterval(100, [2, 3], 'ascending')).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
      expect(() => isEvenlyDivisibleByEveryNumberInInterval(100, [0, 2323], 'descending')).to.throw(
        RangeError, 'Both arguments must be greater than zero!',
      )
    })

    it('should return TRUE when calling function with (100, [1, 2], "ascending")', () => {
      const result = isEvenlyDivisibleByEveryNumberInInterval(100, [1, 2], 'ascending'); expect(result).to.be.equal(true)
    })

    it('should return FALSE when calling function with (100, [1, 4], "ascending")', () => {
      const result = isEvenlyDivisibleByEveryNumberInInterval(100, [1, 4], 'ascending'); expect(result).to.be.equal(true)
    })

    it('should return FALSE when calling function with (1432, [1, 1432], "descending")', () => {
      const result = isEvenlyDivisibleByEveryNumberInInterval(1432, [1, 1432], 'descending'); expect(result).to.be.equal(true)
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

  describe('findAmicableNumbersUnder()', () => {
    it('should throw RangeError when calling function with negative values', () => {
      expect(() => findAmicableNumbersUnder(-238293)).to.throw(
        RangeError, 'Number must be greater or equal than zero',
      )
      expect(() => findAmicableNumbersUnder(-1)).to.throw(
        RangeError, 'Number must be greater or equal than zero',
      )
    })

    it('should return expected result when calling function with (0)', () => {
      const expected: Array<number> = []
      const result = findAmicableNumbersUnder(0); expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with (220)', () => {
      const expected = [220, 284]
      const result = findAmicableNumbersUnder(221); expect(result).to.be.deep.equal(expected)
    })

    it('should return 20 first amicable numbers when calling function with (66993)', () => {
      const expected = [
        220, 284, 1184, 1210, 2620, 2924, 5020, 5564, 6232, 6368,
        10744, 10856, 12285, 14595, 17296, 18416, 63020, 76084, 66928, 66992,
      ]
      const result = findAmicableNumbersUnder(66993); expect(result).to.be.deep.equal(expected)
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
      const result = isNumberDeficientPerfectOrAbundant(13); expect(result).to.be.equal(expected)
    })
  })

  describe('isNumberAbundant()', () => {
    it('should throw RangeError when calling function with zero', () => {
      expect(() => isNumberAbundant(0)).to.throw(
        RangeError, 'Number must be different from zero!',
      )
    })

    it('should return TRUE when calling function with (12)', () => {
      const expected = true
      const result = isNumberAbundant(12); expect(result).to.be.deep.equal(expected)
    })

    it('should return TRUE when calling function with (40)', () => {
      const expected = true
      const result = isNumberAbundant(40); expect(result).to.be.deep.equal(expected)
    })

    it('should return TRUE when calling function with (120)', () => {
      const expected = true
      const result = isNumberAbundant(120); expect(result).to.be.deep.equal(expected)
    })

    it('should return TRUE when calling function with (5775)', () => {
      const expected = true
      const result = isNumberAbundant(5775); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (10)', () => {
      const expected = false
      const result = isNumberAbundant(10); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (13)', () => {
      const expected = false
      const result = isNumberAbundant(13); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (28)', () => {
      const expected = false
      const result = isNumberAbundant(28); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (8128)', () => {
      const expected = false
      const result = isNumberAbundant(8128); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (33550336)', () => {
      const expected = false
      const result = isNumberAbundant(33550336); expect(result).to.be.deep.equal(expected)
    })

    it('should return FALSE when calling function with (137438691328)', () => {
      const expected = false
      const result = isNumberAbundant(137438691328); expect(result).to.be.deep.equal(expected)
    })
  })

  describe('findAbundantNumbersUntil()', () => {
    it('should return the expected abundant number array when called with (54)', () => {

      const expected: Array<number> = [12, 18, 20, 24, 30, 36, 40, 42, 48, 54]
      const result = findAbundantNumbersUntil(54); expect(result).to.be.deep.equal(expected)
    })

    it('should return the expected abundant number array when called with (270)', () => {

      const expected: Array<number> = [12, 18, 20, 24, 30, 36, 40, 42,
        48, 54, 56, 60, 66, 70, 72, 78, 80, 84, 88, 90, 96, 100, 102, 104,
        108, 112, 114, 120, 126, 132, 138, 140, 144, 150, 156, 160, 162,
        168, 174, 176, 180, 186, 192, 196, 198, 200, 204, 208, 210, 216, 220,
        222, 224, 228, 234, 240, 246, 252, 258, 260, 264, 270,
      ]
      const result = findAbundantNumbersUntil(270); expect(result).to.be.deep.equal(expected)
    })
  })

})
