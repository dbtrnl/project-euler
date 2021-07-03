/**
 * **Problem 19 - Counting Sundays**
 *
 * You are given the following information, but you may prefer to do some research for yourself.
 *
 * - 1 Jan 1900 was a Monday.
 *
 * - Thirty days has September, April, June and November.
 *
 * All the rest have thirty-one, Saving February alone,
 *
 * Which has twenty-eight, rain or shine. And on leap years, twenty-nine.
 *
 * - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 *
 * ---
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */
// export default function problem19(): number {
//   function isYearLeapYear(year: number): boolean {
//     const isCentury = year.toString().substr(2) === '00'
//     const isDivisibleByFour = isNumberEvenlyDivisibleBy(year, 4)

//     if (isDivisibleByFour && isCentury) return true
//     if (isDivisibleByFour) return true
//     else return false
//   }

//   function main(): void {
//     const START = 1901
//     const END = 2000
//     for (let i = START; i <= END; i++) {
//       const isLeap = isYearLeapYear(i)
//       console.warn(i, isLeap)
//     }
//   }
//   const result = main()
//   return 0
// }

export default function problem19(): number {
  /*
    Lazy solution using JS new Date()
  */
  function main(): number {
    const START = 1901
    const END = 2000
    let answer = 0

    for (let year = START; year <= END; year++) {
      for (let month = 1; month <= 12; month++) {
        const date = new Date(`${month} / 01 / ${year}`)
        const wasFirstOfMonthASunday = date.getDay() === 0

        if (wasFirstOfMonthASunday) {
          // console.warn('date', date, date.getDay())
          answer++
        }
      }
    }
    return answer
  }
  const result = main()
  return result
}
