import { expect } from 'chai'
import {
  isPrime,
  findAllPrimesSmallerThan,
  findNthPrime,
  findLargestPrimeFactor,
  findPrimesWithNDigits,
} from './primeNumberUtils'

describe('Test primeNumberUtils', () => {
  describe('isPrime()', () => {
    it('should return false when calling function with -200', () => {
      const result = isPrime(-200); expect(result).to.be.equal(false)
    })

    // See https://en.wikipedia.org/wiki/Prime_number#Primality_of_one
    it('should return false when calling function with 1', () => {
      const result = isPrime(1); expect(result).to.be.equal(false)
    })

    it('should return true when calling function with 2', () => {
      const result = isPrime(7); expect(result).to.be.equal(true)
    })

    it('should return true when calling function with 7', () => {
      const result = isPrime(7); expect(result).to.be.equal(true)
    })

    it('should return false when calling function with 10022', () => {
      const result = isPrime(10022); expect(result).to.be.equal(false)
    })

    it('should return true when calling function with 65789', () => {
      const result = isPrime(65789); expect(result).to.be.equal(true)
    })
  })

  describe('findAllPrimesSmallerThan()', () => {
    it('should throw RangeError when calling function with -238293', () => {
      expect(() => findAllPrimesSmallerThan(-238293)).to.throw(
        RangeError, 'Argument must be greater or equal than zero',
      )
    })

    it('should return empty Array when calling function with 0', () => {
      const expected: Array<number> = []
      const result = findAllPrimesSmallerThan(0); expect(result).to.be.deep.equal(expected)
    })

    it('should return correct Array when calling function with 17', () => {
      const expected: Array<number> = [2, 3, 5, 7, 11, 13]
      const result = findAllPrimesSmallerThan(17)

      expect(result).to.be.deep.equal(expected)
      expect(result.length).to.be.deep.equal(6)
    })

    it('should return correct Array when calling function with 174', () => {
      const expected: Array<number> = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
        83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
      ]
      const result = findAllPrimesSmallerThan(174)

      expect(result).to.be.deep.equal(expected)
      expect(result.length).to.be.equal(40)
    })
  })

  describe('findNthPrime()', () => {
    it('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findNthPrime(0)).to.throw(RangeError, 'Argument must be greater than zero')
      expect(() => findNthPrime(-5)).to.throw(RangeError, 'Argument must be greater than zero')
    })

    it('should return 2 as the 1st prime', () => {
      const result = findNthPrime(1); expect(result).to.be.equal(2)
    })

    it('should return 229 as the 50th prime', () => {
      const result = findNthPrime(50); expect(result).to.be.equal(229)
    })

    it('should return 86719 as the 8428th prime', () => {
      const result = findNthPrime(8428); expect(result).to.be.equal(86719)
    })
  })

  describe('findPrimesWithNDigits()', () => {
    it('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findPrimesWithNDigits(0)).to.throw(RangeError, 'Argument must be greater than zero')
      expect(() => findPrimesWithNDigits(-42)).to.throw(RangeError, 'Argument must be greater than zero')
    })

    it('should correct Array when calling function with 1', () => {
      const expected = [2, 3, 5, 7]
      const result = findPrimesWithNDigits(1); expect(result).to.be.deep.equal(expected)
    })

    it('should correct Array when calling function with 2', () => {
      const expected = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
      const result = findPrimesWithNDigits(2); expect(result).to.be.deep.equal(expected)
    })
  })

  describe('findLargestPrimeFactor()', () => {
    it('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findLargestPrimeFactor(0)).to.throw(RangeError, 'Argument must be greater than zero')
      expect(() => findLargestPrimeFactor(-42)).to.throw(RangeError, 'Argument must be greater than zero')
    })

    it('should return 1 as the largest prime factor of 8', () => {
      const result = findLargestPrimeFactor(8); expect(result).to.be.equal(1)
    })

    it('should return 5 as the largest prime factor of 15', () => {
      const result = findLargestPrimeFactor(15); expect(result).to.be.equal(5)
    })

    it('should return 41 as the largest prime factor of 42435', () => {
      const result = findLargestPrimeFactor(42435); expect(result).to.be.equal(41)
    })

    it('should return 65789 as the largest prime factor of 4243587867', () => {
      const result = findLargestPrimeFactor(4243587867); expect(result).to.be.equal(65789)
    })
  })
})
