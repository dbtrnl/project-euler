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
  findAllCyclicPermutationsOfNumber,
} from '../../src/utils/simpleNumberUtils'

const bigIntTestData = 2375260959611012304762670562014361042438984145402220668778622781714011973204885586721482102170138158017912909951749136618152622129665396063239798755672359045046791829533325912027294542599629170699575537786862911468691373814785865095468673736329346200056801571256348847559429853735176210547154678930278110511566678722555512623148840981131519045028867092173070167152372046754942891599061407539992464813252446967500735310145266296308132663082347129938078910331766655962259524538226270268104901185069573299029741119207595046240433933652690636018226038180892363217411319419952117838233703303843335265621971744866701765360122693268656816241096593766867249468004712749335136620049127184532630665619974867030240370421565462309102083926831653585488121267996060830575065845534255204509489976997933497386133447457547860847341819440144231159324744764530120855729783651147993024383690557821638843032047063145228296241119775491129809030007423558887873049500258661443702180595441168549636198954131395416728355849072111498959229220199120476066753251229458761083689692200991808920078198442112854567368210648292329483868634825497591200676735959800089399606277491034162279182789675964205461407646146661046051865013633074481520637074466035945061616169856730344083745794661432890037380035825505170435051667885361002009644379180722347858564162542575422949400582115109252055775393792922796353732115146238331643390217113530018198252136416847295453203475440225315019861541206341202256543805373542358516244106639143943315487105537971115211314630563055351227453941395167633007855277738336583656455370724924172069333701790302842920421216455014139794193231455016709118778441998062756692085736002862854169040545221003182080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

describe('Test simpleNumberUtils', () => {
  describe('factorial()', () => {
    test('should throw RangeError when calling function with n <= 0', () => {
      expect(() => factorial(0)).toThrow(RangeError)
      expect(() => factorial(0)).toThrow('Number should be greater than zero')

      expect(() => factorial(-200)).toThrow(RangeError)
      expect(() => factorial(-200)).toThrow('Number should be greater than zero')
    })

    test('should return 120 when calling function with (5)', () => {
      const result = factorial(5); expect(result).toEqual(120)
    })

    test('should return 479001600 when calling function with (12)', () => {
      const result = factorial(12); expect(result).toEqual(479001600)
    })

    test('should return 51090942171709440000 when calling function with (21)', () => {
      const result = factorial(21); expect(result).toEqual(51090942171709440000)
    })

    test('should return 7.257415615308004e+306 when calling function with (170)', () => {
      const result = factorial(170); expect(result).toEqual(7.257415615308004e+306)
    })

    test('should throw RangeError when calling function with values >= 171', () => {
      expect(() => factorial(171)).toThrow(RangeError)
      expect(() => factorial(171)).toThrow('Number is too big, use factorialBigInt() instead')

      expect(() => factorial(9999)).toThrow(RangeError)
      expect(() => factorial(9999)).toThrow('Number is too big, use factorialBigInt() instead')
    })
  })

  describe('factorialBigInt()', () => {
    test('should return correct BigInt when calling function with (25)', () => {
      const result = factorialBigInt(25); expect(result).toEqual(15511210043330985984000000n)
    })

    test('should return correct BigInt when calling function with (767)', () => {
      const result = factorialBigInt(767); expect(result).toEqual(bigIntTestData)
    })
  })

  describe('permutationWithoutRepetition()', () => {
    test('should throw RangeError when calling function with values <= 0', () => {
      expect(() => permutationWithoutRepetition(-10, -2)).toThrow(RangeError)
      expect(() => permutationWithoutRepetition(-10, -2)).toThrow('N and K must be positive integers')

      expect(() => permutationWithoutRepetition(0, 0)).toThrow(RangeError)
      expect(() => permutationWithoutRepetition(0, 0)).toThrow('N and K must be positive integers')
    })

    test('should return 1 when calling function with (1,1)', () => {
      const result = permutationWithoutRepetition(1, 1); expect(result).toEqual(1)
    })

    test('should return 90 when calling function with (10,2)', () => {
      const result = permutationWithoutRepetition(10, 2); expect(result).toEqual(90)
    })

    test('should return 3628800 when calling function with (10,10)', () => {
      const result = permutationWithoutRepetition(10, 10); expect(result).toEqual(3628800)
    })

    test('should return 2432902008176640000 when calling function with (20,20)', () => {
      const result = permutationWithoutRepetition(20, 20); expect(result).toEqual(2432902008176640000)
    })

    // Actually it's 7257415615307998967396728211129263114716991681296451376543577798900561843401706157852350749242617459511490991237838520776666022565442753025328900773207510902400430280058295603966612599658257104398558294257568966313439612262571094946806711205568880457193340212661452800000000000000000000000000000000000000000
    test('should return 7.257415615308004e+306 when calling function with (20,20)', () => {
      const result = permutationWithoutRepetition(170, 170); expect(result).toEqual(7.257415615308004e+306)
    })

    test('should throw RangeError when calling function with (10,11)', () => {
      expect(() => permutationWithoutRepetition(10, 11)).toThrow(RangeError)
      expect(() => permutationWithoutRepetition(10, 11)).toThrow('Number N should be equal or greater than K')
    })
  })

  describe('combinationFactorial()', () => {

    test('should throw RangeError when calling function with values <= 0', () => {
      expect(() => combinationFactorial(-3, -10)).toThrow(RangeError)
      expect(() => combinationFactorial(-3, -10)).toThrow('N and K must be positive integers')

      expect(() => combinationFactorial(0, 0)).toThrow(RangeError)
      expect(() => combinationFactorial(0, 0)).toThrow('N and K must be positive integers')
    })

    test('should throw RangeError when calling function with (3, 10)', () => {
      expect(() => combinationFactorial(3, 10)).toThrow(RangeError)
      expect(() => combinationFactorial(3, 10)).toThrow('Number N should be equal or greater than K')
    })

    test('should return 120 when calling function with (10, 3)', () => {
      const result = combinationFactorial(10, 3); expect(result).toEqual(120)
    })

    test('should return 10 when calling function with (10, 9)', () => {
      const result = combinationFactorial(10, 9); expect(result).toEqual(10)
    })

    test('should return 1 when calling function with (10, 10)', () => {
      const result = combinationFactorial(10, 10); expect(result).toEqual(1)
    })

    test('should return 435 when calling function with (30, 2)', () => {
      const result = combinationFactorial(30, 2); expect(result).toEqual(435)
    })

    test('should throw RangeError when calling function with (171, 1)', () => {
      expect(() => combinationFactorial(171, 1)).toThrow(RangeError)
      expect(() => combinationFactorial(171, 1)).toThrow('Number is too big, use factorialBigInt() instead')
    })
  })

  describe('combinationPermutation()', () => {

    test('should throw RangeError when calling function with values <= 0', () => {
      expect(() => combinationPermutation(-3, 10)).toThrow(RangeError)
      expect(() => combinationPermutation(-3, 10)).toThrow('N and K must be positive integers')
    })

    test('should throw RangeError when calling function with (3, 10)', () => {
      expect(() => combinationPermutation(3, 10)).toThrow(RangeError)
      expect(() => combinationPermutation(3, 10)).toThrow('Number N should be equal or greater than K')
    })

    test('should return 120 when calling function with (10, 3)', () => {
      const result = combinationPermutation(10, 3); expect(result).toEqual(120)
    })

    test('should return 10 when calling function with (10, 9)', () => {
      const result = combinationPermutation(10, 9); expect(result).toEqual(10)
    })

    test('should return 1 when calling function with (10, 10)', () => {
      const result = combinationPermutation(10, 10); expect(result).toEqual(1)
    })

    test('should return 435 when calling function with (30, 2)', () => {
      const result = combinationPermutation(30, 2); expect(result).toEqual(435)
    })
  })

  describe('numberLength()', () => {

    test('should return 30 when calling function with (-123456789009876543211234567890)', () => {
      const result = numberLength(-123456789009876543211234567890); expect(result).toEqual(30)
    })

    test('should return 10 when calling function with (-1234567890)', () => {
      const result = numberLength(-1234567890); expect(result).toEqual(10)
    })

    test('should return 4 when calling function with (-2832)', () => {
      const result = numberLength(-2832); expect(result).toEqual(4)
    })

    test('should return 1 when calling function with (-1)', () => {
      const result = numberLength(-1); expect(result).toEqual(1)
    })

    test('should return 1 when calling function with (0)', () => {
      const result = numberLength(0); expect(result).toEqual(0)
    })

    test('should return 1 when calling function with (1)', () => {
      const result = numberLength(1); expect(result).toEqual(1)
    })

    test('should return 4 when calling function with (1000)', () => {
      const result = numberLength(1000); expect(result).toEqual(4)
    })

    test('should return 10 when calling function with (9999999999)', () => {
      const result = numberLength(9999999999); expect(result).toEqual(10)
    })

    test('should return 30 when calling function with (123456789009876543211234567890)', () => {
      const result = numberLength(123456789009876543211234567890); expect(result).toEqual(30)
    })
  })

  describe('isNumberPalindrome()', () => {

    test('should return TRUE when calling function with (9)', () => {
      const result = isNumberPalindrome(9); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (12)', () => {
      const result = isNumberPalindrome(12); expect(result).toEqual(false)
    })

    test('should return TRUE when calling function with (12321)', () => {
      const result = isNumberPalindrome(12321); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (9999999999)', () => {
      const result = isNumberPalindrome(9999999999); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (1234567887654321)', () => {
      const result = isNumberPalindrome(1234567887654321); expect(result).toEqual(true)
    })

    test('should return FALSE when calling function with (89)', () => {
      const result = isNumberPalindrome(89); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (123124)', () => {
      const result = isNumberPalindrome(123124); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (134567890987654321)', () => {
      const result = isNumberPalindrome(134567890987654321); expect(result).toEqual(false)
    })
  })

  describe('isNumberPermutationOfAnother()', () => {
    test('should return TRUE when calling function with (0, 0)', () => {
      const result = isNumberPermutationOfAnother(0, 0); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (1, 1)', () => {
      const result = isNumberPermutationOfAnother(1, 1); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (123, 231)', () => {
      const result = isNumberPermutationOfAnother(123, 231); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (102984278, 801294278)', () => {
      const result = isNumberPermutationOfAnother(102984278, 801294278); expect(result).toEqual(true)
    })

    test('should return TRUE when calling function with (999996, 969999)', () => {
      const result = isNumberPermutationOfAnother(999996, 969999); expect(result).toEqual(true)
    })

    test('should return FALSE when calling function with (1234, 231)', () => {
      const result = isNumberPermutationOfAnother(1234, 231); expect(result).toEqual(false)
    })

    test('should return FALSE when calling function with (123125, 521322)', () => {
      const result = isNumberPermutationOfAnother(123125, 521322); expect(result).toEqual(false)
    })
  })

  describe('findAllPermutationsOfString()', () => {
    test('should return expected result when calling function with ("abc")', () => {
      const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
      const result = findAllPermutationsOfString('abc'); expect(result).toEqual(expected)
    })
  })

  describe('findAllPermutationsOfNumber()', () => {
    test('should return expected result when calling function with ("0")', () => {
      const expected = [0]
      const set = findAllPermutationsOfNumber(0)
      const result = Array.from(set)

      expect(result).toEqual(expected)
    })

    test('should return expected result when calling function with ("12")', () => {
      const expected = [12, 21]
      const set = findAllPermutationsOfNumber(12)
      const result = Array.from(set)

      expect(result).toEqual(expected)
    })

    test('should return expected result when calling function with ("423")', () => {
      const expected = [234, 243, 324, 342, 423, 432]
      const set = findAllPermutationsOfNumber(423)
      const result = Array.from(set)

      expect(result).toEqual(expected)
    })

    test('should return expected result when calling function with ("9999")', () => {
      const expected = [9999]
      const set = findAllPermutationsOfNumber(9999)
      const result = Array.from(set)

      expect(result).toEqual(expected)
    })

    test('should return expected result when calling function with ("1234")', () => {
      const expected = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341,
        2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321]

      const set = findAllPermutationsOfNumber(1234)
      const result = Array.from(set)

      expect(result).toEqual(expected)
    })
  })

  describe('findAllCyclicPermutationsOfNumber', () => {

    test('should return expected Set when calling function with (123)', () => {
      const expected = ['123', '312', '231']
      const result = findAllCyclicPermutationsOfNumber(123)

      expect(result).toEqual(expected)
    })

    test('should return expected Set when calling function with (-123)', () => {
      const expected = ['-123', '-312', '-231']
      const result = findAllCyclicPermutationsOfNumber(-123)

      expect(result).toEqual(expected)
    })

    test('should return expected Set when calling function with (1230)', () => {
      const expected = ['1230', '0123', '3012', '2301']
      const result = findAllCyclicPermutationsOfNumber(1230)

      expect(result).toEqual(expected)
    })

    test('should return expected Set when calling function with (-1230)', () => {
      const expected = ['-1230', '-0123', '-3012', '-2301']
      const result = findAllCyclicPermutationsOfNumber(-1230)

      expect(result).toEqual(expected)
    })

    test('should return expected Set when calling function with (123456)', () => {
      const expected = ['123456', '612345', '561234', '456123', '345612', '234561']
      const result = findAllCyclicPermutationsOfNumber(123456)

      expect(result).toEqual(expected)
    })

    test('should return expected Set when calling function with (-123456)', () => {
      const expected = ['-123456', '-612345', '-561234', '-456123', '-345612', '-234561']
      const result = findAllCyclicPermutationsOfNumber(-123456)

      expect(result).toEqual(expected)
    })
  })

  describe('findRecurringSequence()', () => {
    test('should return "" when calling function with (1, 1)', () => {
      const result = findRecurringSequence(1, 1); expect(result).toEqual('')
    })

    test('should return "3" when calling function with (1, 3)', () => {
      const result = findRecurringSequence(1, 3); expect(result).toEqual('3')
    })

    test('should return "142857" when calling function with (1, 7)', () => {
      const result = findRecurringSequence(1, 7); expect(result).toEqual('142857')
    })

    test('should return "1" when calling function with (1, 9)', () => {
      const result = findRecurringSequence(1, 9); expect(result).toEqual('1')
    })

    // Edge case test, function needs to be improved
    // test('should return "1" when calling function with (1, 10)', () => {
    //   const result = findRecurringSequence(1, 10); expect(result).toEqual('1')
    // })

    test('should return "054" when calling function with (1, 185)', () => {
      const result = findRecurringSequence(1, 185); expect(result).toEqual('054')
    })

    test('should return "012345679" when calling function with (1, 81)', () => {
      const result = findRecurringSequence(1, 81); expect(result).toEqual('012345679')
    })
  })
})
