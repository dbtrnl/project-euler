"""
 * **Problem 1 - Multiples of 3 and 5**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * The sum of these multiples is 23.
 *
 * ---
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
"""
def problem1() -> int:
  def main() -> int:
    LIMIT = 1000
    multiplesOfThreeOrFive = []

    for currentNumber in range(0, LIMIT):
      if (currentNumber % 3 == 0 or currentNumber % 5 == 0):
        multiplesOfThreeOrFive.append(currentNumber)

    totalSum: int = sum(multiplesOfThreeOrFive)
    return totalSum
  
  result = main()
  return result

print(f'problem 1 answer = {problem1()}')