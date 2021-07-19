import { isPrime } from '../../utils'
/**
 * **Problem 27 - Quadratic Primes**
 *
 * ---
 * Euler discovered the remarkable quadratic formula:
 *
 * n^2 + n + 41
 *
 * ---
 * It turns out that the formula will produce 40 primes for the consecutive integer values 0 <= n <= 39.
 *
 * However, when n = 40, 40^2 + 40 + 41 = 40(40+1) + 41 is divisible by 41,
 * and certainly when n = 41, n^2 + 41 + 41 is clearly divisible by 41.
 *
 * The incredible formula n^2 - 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 <= n <= 79.
 * The product of the coefficients, −79 and 1601, is −126479.
 *
 * ---
 * Considering quadratics of the form:
 *
 * n^2 + an + b, where |a| < 1000 and |b| <= 1000
 *
 * where |n| is the modulus/absolute value of n (e.g. |11| = 11 and |-4| = 4)
 *
 * ---
 * Find the product of the coefficients, a and b,
 * for the quadratic expression that produces the maximum number of primes for consecutive values of n
 * starting with n = 0
 */
export default function problem27(): number {
  function problemPolinomialPrimeFormula(n: number, a: number, b: number): number {
    return (n ** 2) + (a * n) + b
  }

  const main = (): number => {
    const MIN_A = -999
    const MAX_A = 999

    const MIN_B = -1000
    const MAX_B = 1000

    const object = {
      a: 0,
      b: 0,
      SequenceSize: 0,
    }

    for (let a = MIN_A; a <= MAX_A; a++) {
      for (let b = MIN_B; b <= MAX_B; b++) {
        let n = 0
        while (isPrime(problemPolinomialPrimeFormula(n, a, b))) {
          n++
        }
        if (n > object.SequenceSize) {
          object.a = a
          object.b = b
          object.SequenceSize = n
          // console.log(`n^2 + ${a}n + ${b} polynome produces a sequence of size ${n}`)
        }
      }
    }

    const answer = object.a * object.b
    return answer
  }
  const result = main()
  return result
}
