interface letterObject {
  [key: string]: string;
}

const numberMap: letterObject = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  '00': 'hundred',
  '000': 'thousand',
}
export default function problem17(): number {
  const numberOfLettersInWrittenNumber = (num: number): string => {
    if (numberMap[num]) {
      return numberMap[num]
    }
    let currentNumber = ''
    const currNumStr = num.toString()

    // If it's a two-digit number:
    if (currNumStr.length === 2) {
      // Extracting digits
      const firstDigit = currNumStr[0]
      const secondDigit = currNumStr[1]

      switch (firstDigit) {
        case '2':
          currentNumber = `${numberMap[20]} ${numberMap[secondDigit]}`
          break
        case '3':
          currentNumber = `${numberMap[30]} ${numberMap[secondDigit]}`
          break
        case '4':
          currentNumber = `${numberMap[40]} ${numberMap[secondDigit]}`
          break
        case '5':
          currentNumber = `${numberMap[50]} ${numberMap[secondDigit]}`
          break
        case '6':
          currentNumber = `${numberMap[60]} ${numberMap[secondDigit]}`
          break
        case '7':
          currentNumber = `${numberMap[70]} ${numberMap[secondDigit]}`
          break
        case '8':
          currentNumber = `${numberMap[80]} ${numberMap[secondDigit]}`
          break
        case '9':
          currentNumber = `${numberMap[90]} ${numberMap[secondDigit]}`
          break
        default:
          ''
      }
    }
    // If a three-digit number
    if (currNumStr.length === 3) {
      // Extracting digits
      const firstDigit = currNumStr[0]
      const secondDigit = currNumStr[1]
      const thirdDigit = currNumStr[2]
      const twoDigitCardinal = `${currNumStr[1]}0`
      const twoLastDigits = currNumStr.substr(1)

      switch (currNumStr.substr(1)) {
        case '00':
          currentNumber = `${numberMap[currNumStr[0]]} ${numberMap['00']}`
          break
        default:
          if (numberMap[num]) {
            currentNumber = numberMap[num]
          } else if (twoLastDigits === '00') {
            currentNumber = `${numberMap[firstDigit]} ${numberMap['00']} and ${numberMap[twoDigitCardinal]}`
          } else if (numberMap[twoLastDigits]) {
            currentNumber = `${numberMap[firstDigit]} ${numberMap['00']} and ${numberMap[twoLastDigits]}`
          } else if (secondDigit === '0') {
            currentNumber = `${numberMap[firstDigit]} ${numberMap['00']} and ${numberMap[thirdDigit]}`
          } else {
            currentNumber = `${numberMap[firstDigit]} ${numberMap['00']} and ${numberMap[twoDigitCardinal]} ${numberMap[thirdDigit]}`
          }
      }
    }
    if (currNumStr.length === 4) currentNumber = 'one thousand'
    return currentNumber
  }

  const main = (): number => {
    let currentNumber = ''
    let answer = 0

    for (let i = 1; i <= 1000; i++) {
      currentNumber = numberOfLettersInWrittenNumber(i)
      const currentNumberLength = currentNumber.replace(/\s+/g, '').length
      answer += currentNumberLength
    }
    return answer
  }
  const result = main()
  return result
}
