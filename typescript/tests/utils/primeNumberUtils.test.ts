import {
  isPrime,
  findAllPrimesSmallerThan,
  findNthPrime,
  findLargestPrimeFactor,
  findPrimesWithNDigits,
  isPrimeCircular,
} from '../../src/utils/primeNumberUtils'

describe('Test primeNumberUtils', () => {
  describe('isPrime()', () => {
    test('should return false when calling function with -200', () => {
      const result = isPrime(-200); expect(result).toEqual(false)
    })

    // See https://en.wikipedia.org/wiki/Prime_number#Primality_of_one
    test('should return false when calling function with 1', () => {
      const result = isPrime(1); expect(result).toEqual(false)
    })

    test('should return true when calling function with 2', () => {
      const result = isPrime(7); expect(result).toEqual(true)
    })

    test('should return true when calling function with 7', () => {
      const result = isPrime(7); expect(result).toEqual(true)
    })

    test('should return false when calling function with 10022', () => {
      const result = isPrime(10022); expect(result).toEqual(false)
    })

    test('should return true when calling function with 65789', () => {
      const result = isPrime(65789); expect(result).toEqual(true)
    })
  })

  describe('findAllPrimesSmallerThan()', () => {
    test('should throw RangeError when calling function with -238293', () => {
      expect(() => findAllPrimesSmallerThan(-238293)).toThrow(RangeError)
      expect(() => findAllPrimesSmallerThan(-238293)).toThrow('Argument must be greater or equal than zero')
    })

    test('should return empty Array when calling function with 0', () => {
      const expected: Array<number> = []
      const result = findAllPrimesSmallerThan(0); expect(result).toEqual(expected)
    })

    test('should return correct Array when calling function with 17', () => {
      const expected: Array<number> = [2, 3, 5, 7, 11, 13]
      const result = findAllPrimesSmallerThan(17)

      expect(result).toEqual(expected)
      expect(result.length).toEqual(6)
    })

    test('should return correct Array when calling function with 174', () => {
      const expected: Array<number> = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
        83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
      ]
      const result = findAllPrimesSmallerThan(174)

      expect(result).toEqual(expected)
      expect(result.length).toEqual(40)
    })
  })

  describe('findNthPrime()', () => {
    test('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findNthPrime(0)).toThrow(RangeError)
      expect(() => findNthPrime(0)).toThrow('Argument must be greater than zero')

      expect(() => findNthPrime(-5)).toThrow(RangeError)
      expect(() => findNthPrime(-5)).toThrow('Argument must be greater than zero')
    })

    test('should return 2 as the 1st prime', () => {
      const result = findNthPrime(1); expect(result).toEqual(2)
    })

    test('should return 229 as the 50th prime', () => {
      const result = findNthPrime(50); expect(result).toEqual(229)
    })

    test('should return 86719 as the 8428th prime', () => {
      const result = findNthPrime(8428); expect(result).toEqual(86719)
    })
  })

  describe('findPrimesWithNDigits()', () => {
    test('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findPrimesWithNDigits(0)).toThrow(RangeError)
      expect(() => findPrimesWithNDigits(0)).toThrow('Argument must be greater than zero')

      expect(() => findPrimesWithNDigits(-42)).toThrow(RangeError)
      expect(() => findPrimesWithNDigits(-42)).toThrow('Argument must be greater than zero')
    })

    test('should correct Array when calling function with 1', () => {
      const expected = [2, 3, 5, 7]
      const result = findPrimesWithNDigits(1); expect(result).toEqual(expected)
    })

    test('should correct Array when calling function with 2', () => {
      const expected = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
      const result = findPrimesWithNDigits(2); expect(result).toEqual(expected)
    })
  })

  describe('findLargestPrimeFactor()', () => {
    test('should throw RangeError when calling function with values less than or equal than zero', () => {
      expect(() => findLargestPrimeFactor(0)).toThrow(RangeError)
      expect(() => findLargestPrimeFactor(0)).toThrow('Argument must be greater than zero')

      expect(() => findLargestPrimeFactor(-42)).toThrow(RangeError)
      expect(() => findLargestPrimeFactor(-42)).toThrow('Argument must be greater than zero')
    })

    test('should return 1 as the largest prime factor of 8', () => {
      const result = findLargestPrimeFactor(8); expect(result).toEqual(1)
    })

    test('should return 5 as the largest prime factor of 15', () => {
      const result = findLargestPrimeFactor(15); expect(result).toEqual(5)
    })

    test('should return 41 as the largest prime factor of 42435', () => {
      const result = findLargestPrimeFactor(42435); expect(result).toEqual(41)
    })

    test('should return 65789 as the largest prime factor of 4243587867', () => {
      const result = findLargestPrimeFactor(4243587867); expect(result).toEqual(65789)
    })
  })

  describe('isPrimeCircular()', () => {
    test('should throw Error when calling function with numbers that are NOT PRIME', () => {
      expect(() => isPrimeCircular(-42)).toThrow(Error)
      expect(() => isPrimeCircular(-42)).toThrow('input number must be prime!')

      expect(() => isPrimeCircular(0)).toThrow(Error)
      expect(() => isPrimeCircular(0)).toThrow('input number must be prime!')

      expect(() => isPrimeCircular(4)).toThrow(Error)
      expect(() => isPrimeCircular(4)).toThrow('input number must be prime!')
    })

    test('should return TRUE when calling function with (7)', () => {
      const result = isPrimeCircular(7); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (197)', () => {
      const result = isPrimeCircular(197); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (3779)', () => {
      const result = isPrimeCircular(3779); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (199933)', () => {
      const result = isPrimeCircular(199933); expect(result).toEqual(true)
    })

    test('should return FALSE when calling function with (23)', () => {
      const result = isPrimeCircular(23); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (163)', () => {
      const result = isPrimeCircular(163); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (3823)', () => {
      const result = isPrimeCircular(3823); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (27644437)', () => {
      const result = isPrimeCircular(27644437); expect(result).toEqual(false)
    })
  })
})
