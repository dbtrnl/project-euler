import { expect } from 'chai'
import {
  polinomialPrimeFormulaOne,
  polinomialPrimeFormulaTwo,
} from './polynomialUtils'

describe('Test polynomialUtils', () => {
  describe('polinomialPrimeFormulaOne()', () => {
    it('should return the correct 40 prime numbers when calling function with range 0-39', () => {
      const result = []
      const expected = [
        41, 43, 47, 53, 61, 71, 83, 97, 113, 131, 151, 173, 197, 223,
        251, 281, 313, 347, 383, 421, 461, 503, 547, 593, 641, 691, 743,
        797, 853, 911, 971, 1033, 1097, 1163, 1231, 1301, 1373, 1447, 1523, 1601,
      ]

      for (let i = 0; i <= 39; i++) {
        const currentNum = polinomialPrimeFormulaOne(i)
        result.push(currentNum)
      }
      expect(result).to.be.deep.equal(expected)
    })
  })

  describe('polinomialPrimeFormulaTwo()', () => {
    it('should return empty Array when calling function with 0', () => {
      const result = []
      const expected = [
        1601, 1523, 1447, 1373, 1301, 1231, 1163, 1097, 1033, 971,
        911, 853, 797, 743, 691, 641, 593, 547, 503, 461,
        421, 383, 347, 313, 281, 251, 223, 197, 173, 151,
        131, 113, 97, 83, 71, 61, 53, 47, 43, 41,
        41, 43, 47, 53, 61, 71, 83, 97, 113, 131,
        151, 173, 197, 223, 251, 281, 313, 347, 383, 421,
        461, 503, 547, 593, 641, 691, 743, 797, 853, 911,
        971, 1033, 1097, 1163, 1231, 1301, 1373, 1447, 1523, 1601,
      ]

      for (let i = 0; i <= 79; i++) {
        const currentNum = polinomialPrimeFormulaTwo(i)
        result.push(currentNum)
      }
      console.log(result)

      expect(result).to.be.deep.equal(expected)
    })
  })
})
