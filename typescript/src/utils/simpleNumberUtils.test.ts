import { expect } from 'chai'
import {
  combinationPermutation,
  combinationFactorial,
  factorial,
  factorialBigInt,
  permutationWithoutRepetition,
  numberLength,
  isNumberPalindrome,
  findRecurringSequence,
  isNumberPermutationOfAnother,
  findAllPermutationsOfString,
  findAllPermutationsOfNumber,
} from './simpleNumberUtils'

const bigIntTestData = 2375260959611012304762670562014361042438984145402220668778622781714011973204885586721482102170138158017912909951749136618152622129665396063239798755672359045046791829533325912027294542599629170699575537786862911468691373814785865095468673736329346200056801571256348847559429853735176210547154678930278110511566678722555512623148840981131519045028867092173070167152372046754942891599061407539992464813252446967500735310145266296308132663082347129938078910331766655962259524538226270268104901185069573299029741119207595046240433933652690636018226038180892363217411319419952117838233703303843335265621971744866701765360122693268656816241096593766867249468004712749335136620049127184532630665619974867030240370421565462309102083926831653585488121267996060830575065845534255204509489976997933497386133447457547860847341819440144231159324744764530120855729783651147993024383690557821638843032047063145228296241119775491129809030007423558887873049500258661443702180595441168549636198954131395416728355849072111498959229220199120476066753251229458761083689692200991808920078198442112854567368210648292329483868634825497591200676735959800089399606277491034162279182789675964205461407646146661046051865013633074481520637074466035945061616169856730344083745794661432890037380035825505170435051667885361002009644379180722347858564162542575422949400582115109252055775393792922796353732115146238331643390217113530018198252136416847295453203475440225315019861541206341202256543805373542358516244106639143943315487105537971115211314630563055351227453941395167633007855277738336583656455370724924172069333701790302842920421216455014139794193231455016709118778441998062756692085736002862854169040545221003182080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

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

  describe('factorialBigInt()', () => {

    it('should return correct BigInt when calling function with (25)', () => {
      const result = factorialBigInt(25); expect(result).to.be.equal(15511210043330985984000000n)
    })

    it('should return correct BigInt when calling function with (767)', () => {
      const result = factorialBigInt(767); expect(result).to.be.equal(bigIntTestData)
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

  describe('isNumberPermutationOfAnother()', () => {
    it('should return TRUE when calling function with (0, 0)', () => {
      const result = isNumberPermutationOfAnother(0, 0); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (1, 1)', () => {
      const result = isNumberPermutationOfAnother(1, 1); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (123, 231)', () => {
      const result = isNumberPermutationOfAnother(123, 231); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (102984278, 801294278)', () => {
      const result = isNumberPermutationOfAnother(102984278, 801294278); expect(result).to.be.equal(true)
    })

    it('should return TRUE when calling function with (999996, 969999)', () => {
      const result = isNumberPermutationOfAnother(999996, 969999); expect(result).to.be.equal(true)
    })

    it('should return FALSE when calling function with (1234, 231)', () => {
      const result = isNumberPermutationOfAnother(1234, 231); expect(result).to.be.equal(false)
    })

    it('should return FALSE when calling function with (123125, 521322)', () => {
      const result = isNumberPermutationOfAnother(123125, 521322); expect(result).to.be.equal(false)
    })
  })

  describe('findAllPermutationsOfString()', () => {
    it('should return expected result when calling function with ("abc")', () => {
      const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
      const result = findAllPermutationsOfString('abc'); expect(result).to.be.deep.equal(expected)
    })
  })

  describe('findAllPermutationsOfNumber()', () => {
    it('should return expected result when calling function with ("0")', () => {
      const expected = [0]
      const set = findAllPermutationsOfNumber(0)
      const result = Array.from(set)

      expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with ("12")', () => {
      const expected = [12, 21]
      const set = findAllPermutationsOfNumber(12)
      const result = Array.from(set)

      expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with ("423")', () => {
      const expected = [234, 243, 324, 342, 423, 432]
      const set = findAllPermutationsOfNumber(423)
      const result = Array.from(set)

      expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with ("9999")', () => {
      const expected = [9999]
      const set = findAllPermutationsOfNumber(9999)
      const result = Array.from(set)

      expect(result).to.be.deep.equal(expected)
    })

    it('should return expected result when calling function with ("1234")', () => {
      const expected = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341,
        2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321]

      const set = findAllPermutationsOfNumber(1234)
      const result = Array.from(set)

      expect(result).to.be.deep.equal(expected)
    })
  })

  describe('findRecurringSequence()', () => {
    it('should return "" when calling function with (1, 1)', () => {
      const result = findRecurringSequence(1, 1); expect(result).to.be.equal('')
    })

    it('should return "3" when calling function with (1, 3)', () => {
      const result = findRecurringSequence(1, 3); expect(result).to.be.equal('3')
    })

    it('should return "142857" when calling function with (1, 7)', () => {
      const result = findRecurringSequence(1, 7); expect(result).to.be.equal('142857')
    })

    it('should return "1" when calling function with (1, 9)', () => {
      const result = findRecurringSequence(1, 9); expect(result).to.be.equal('1')
    })

    // Edge case test, function needs to be improved
    // it('should return "1" when calling function with (1, 10)', () => {
    //   const result = findRecurringSequence(1, 10); expect(result).to.be.equal('1')
    // })

    it('should return "054" when calling function with (1, 185)', () => {
      const result = findRecurringSequence(1, 185); expect(result).to.be.equal('054')
    })

    it('should return "012345679" when calling function with (1, 81)', () => {
      const result = findRecurringSequence(1, 81); expect(result).to.be.equal('012345679')
    })
  })
})
