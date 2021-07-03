/**
 * Polynomial formula for numbers 0 <= N <= 39
 *
 * ---
 * @param {Number} n The starting number
 * @returns {Number}
 */
export function polinomialPrimeFormula1One(n: number): number {
  const number = (n ** 2) + n + 41
  return number
}

/**
 * Polynomial formula for numbers 0 <= N <= 79
 *
 * ---
 * @param {Number} n The starting number
 * @returns {Number}
 */
export function polinomialPrimeFormulaTwo(n: number): number {
  const number = (n ** 2) - (79 * n) + 1601
  return number
}
