package main

import "fmt"

func main() {
	const ARR_SIZE int = 1000
	var arr [ARR_SIZE]int

	arr = findAllMultiplesOfThreeOrFiveUnder(ARR_SIZE, arr)

	fmt.Println(arr)
}

func findAllMultiplesOfThreeOrFiveUnder(arrSize int, arr [1000]int) [1000]int {
	var COUNTER int = 0
	var multiplesArray = arr

	for i := 1; i < arrSize; i++ {
		if i%3 == 0 || i%5 == 0 {
			multiplesArray[COUNTER] = i
			COUNTER++
		}
	}
	return multiplesArray
}
