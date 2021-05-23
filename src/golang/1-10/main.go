package main

import "fmt"

func main() {
	const ARR_SIZE int = 1000
	var (
		bufferArrSlice []int
		bufferArr      [ARR_SIZE]int
	)

	bufferArr = findAllMultiplesOfThreeOrFiveUnder(ARR_SIZE, bufferArr)
	bufferArrSlice = bufferArr[0:100]

	fmt.Println(bufferArrSlice)
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
