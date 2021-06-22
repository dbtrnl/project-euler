package main

import "fmt"

func main() {
	/*
		The sum of all divisors of 0 >= number < 1000 can't be greater than 533
		(1000/5) + (1000/3) = 533,3...
	*/
	const maxArraySize int = 533
	var (
		answer                 int = 0
		bufferArray            [maxArraySize]int
		max_size               int = 0
		mutiplesOfThreeandFive []int
	)

	bufferArray, max_size = findAllMultiplesOfThreeOrFiveUnder(maxArraySize, bufferArray)
	mutiplesOfThreeandFive = bufferArray[0:max_size]

	for i := 0; i < len(mutiplesOfThreeandFive); i++ {
		answer += mutiplesOfThreeandFive[i]
	}
	fmt.Println("The answer is:", answer)
}

func findAllMultiplesOfThreeOrFiveUnder(arrSize int, arr [533]int) ([533]int, int) {
	var currentIndex int = 0
	var max int = 0
	var multiplesArray = arr

	for i := 0; i < 1000; i++ {
		// If i is 0, skip iteration
		if i == 0 { continue }

		// Else, check if divisible by 3 or 5
		if i%3 == 0 || i%5 == 0 {
			multiplesArray[currentIndex] = i
			currentIndex++
			}
		}

	for i, number := range multiplesArray {
		if number == 0 { max = i; break }
	}
	return multiplesArray, max
}
