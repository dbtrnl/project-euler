/*
  Problem 17 - Number letter counts

  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
  NOTE: Do not count spaces or hyphens.
  For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
  The use of "and" when writing out numbers is in compliance with British usage.
*/

interface letterObject {
  [key: string]: number;
}

const lettersUsed: letterObject = {
  0: 4,
  1: 3,
  2: 3,
  3: 5,
  4: 4,
  5: 4,
  6: 3,
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 6,
  12: 6,
  13: 8,
  14: 8,
  15: 7,
  16: 7,
  17: 9,
  18: 8,
  19: 8,
  20: 6,
  30: 6,
  40: 6,
  50: 5,
  60: 5,
  70: 7,
  80: 6,
  90: 6,
  100: 10,
  '00': 7,
  '000': 8,
}

export default function problem17(): number {
  const numberOfLettersInWrittenNumber = (num: number): number | null => {
    if (lettersUsed[num]) {
      return lettersUsed[num]
    }
    let answer: number | null = null
    const string = num.toString()

    // If it's a two-digit number:
    if (string.length === 2) {
      switch (string[0]) {
        case '2':
          answer = lettersUsed[20] + lettersUsed[string[1]]
          break
        case '3':
          answer = lettersUsed[30] + lettersUsed[string[1]]
          break
        case '4':
          answer = lettersUsed[40] + lettersUsed[string[1]]
          break
        case '5':
          answer = lettersUsed[50] + lettersUsed[string[1]]
          break
        case '6':
          answer = lettersUsed[60] + lettersUsed[string[1]]
          break
        case '7':
          answer = lettersUsed[70] + lettersUsed[string[1]]
          break
        case '8':
          answer = lettersUsed[80] + lettersUsed[string[1]]
          break
        case '9':
          answer = lettersUsed[90] + lettersUsed[string[1]]
          break
        default:
          null
      }
    }
    if (string.length === 3) {
      switch (string.substr(1)) {
        case '00':
          answer = lettersUsed[string[0]] + lettersUsed['00']
          break
        default:
          null
      }
    }
    return answer
  }

  const main = (): number | null => {
    let iterator: number | null = null

    for (let i = 0; i <= 1000; i++) {
      iterator = numberOfLettersInWrittenNumber(i)
      if (iterator == null) continue
      // console.log(`${i} has ${iterator} letters`)
    }
    return iterator
  }
  const result = main()

  if (result === null) return 0
  return result
}
