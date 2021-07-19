import { readFileSync } from 'fs'

/**
 * **Problem 22 - Names scores**
 *
 * ---
 * Using a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
 *
 * Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * ---
 * What is the total of all the name scores in the file?
 */
export default function problem22(): number {
  const assembleSortedNamesArray = (input: string): string[] => {
    try {
      const inputToString = readFileSync(input).toString('utf-8')
      const namesArray = inputToString.replace(/"/g, '').split(',')

      return namesArray.sort()
    } catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  const findNameScore = (name: string): number => {
    let nameScore = 0
    const nameArray: string[] = name.split('')

    nameArray.forEach((char) => {
      nameScore += (parseInt(char, 36) - 9)
    })

    return nameScore
  }

  const main = (): number => {
    const FILE_PATH = 'src/data/p22Input.txt'

    let position: number
    let finalScore = 0

    // console.time()
    const sortedNamesArray = assembleSortedNamesArray(FILE_PATH)

    for (let i = 0; i <= sortedNamesArray.length - 1; i++) {
      position = i + 1
      finalScore += (position * findNameScore(sortedNamesArray[i]))
    }
    // console.timeEnd()

    return finalScore
  }

  const result = main()
  return result
}
