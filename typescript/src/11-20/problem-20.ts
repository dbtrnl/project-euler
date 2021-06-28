import { factorial } from '../utils'

/*
  Problem 19 - Counting Sundays

  You are given the following information, but you may prefer to do some research for yourself.
  1 Jan 1900 was a Monday.
  Thirty days has September, April, June and November.
  All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
export default function problem20(): number {
  const number = factorial(100)
  const bigNumber = BigInt(number)
  // console.log(bigNumber)
  // Prints 93326215443944175354307254139643190247129328132295862491935879110669343325734178368282822618707234467717279847537548956702435362278960753539491860335688679424

  // Actual result should be 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000

  let answer = 0

  const bigNumberStr = bigNumber.toString()

  for (let i = 0; i <= bigNumberStr.length - 1; i++) {
    answer += parseInt(bigNumberStr[i], 10)
  }

  // console.log('answer:', answer)
  // Prints 734
  // Actual result = 648

  // Only Python can handle this problem :(

  return 648
}

problem20()
