package problems

/**
 * **Problem 1 - Multiples of 3 and 5**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * The sum of these multiples is 23.
 *
 * ---
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
func Problem1() int {
	limit, multiples, result := 1000, []int{}, 0

	for num := 0; num < limit; num++ {
		if num%3 == 0 || num%5 == 0 {
			multiples = append(multiples, num)
		}
	}
	for _, num := range multiples {
		result += num
	}
	return result
}
