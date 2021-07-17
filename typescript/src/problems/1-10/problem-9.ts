import { TripletSetObject } from '../../interfaces'
import { isSetPythagoreanTriplet } from '../../utils'

/**
 * **Problem 9 - Special pythagorean triplet**
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a^2 + b^2 = c^2
 *
 * For example, 3^2+ 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *
 * ---
 * Find the product abc.
 */
export default function problem9(): number {
  const main = (): number => {
    const MAX_ITERATIONS = 1000
    const pythagoreanSetArray: Array<TripletSetObject> = []
    let desiredPythagoreanTriplet: TripletSetObject = { a: 0, b: 0, c: 0 }
    let answer = 0

    for (let c = 3; c <= MAX_ITERATIONS; c++) {
      for (let b = 2; b < c; b++) {
        for (let a = 1; a < b; a++) {
          if (isSetPythagoreanTriplet({ a, b, c })) pythagoreanSetArray.push({ a, b, c })
        }
      }
    }

    pythagoreanSetArray.forEach((set) => {
      if (set.a + set.b + set.c === 1000) desiredPythagoreanTriplet = set
    })

    answer = desiredPythagoreanTriplet.a * desiredPythagoreanTriplet.b * desiredPythagoreanTriplet.c

    return answer
  }

  const result = main()
  return result
}
