import { readFileSync } from 'fs'

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
    const FILE_PATH = 'src/_data/p22Input.txt'

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
