package utils

import (
	"math"
	"strconv"
)

func ReturnFibonacciNumbersUntil(limit int) []int {
	fibArray := []int{1, 2}

	iterator := 2
	currentNumber := fibArray[iterator-1] + fibArray[iterator-2]

	for currentNumber <= limit {
		fibArray = append(fibArray, currentNumber)
		iterator++
		currentNumber = fibArray[iterator-1] + fibArray[iterator-2]
	}
	return fibArray
}

func FindLargestPrimeFactor(inputNum int) int {
	num := inputNum

	for num%2 == 0 { num /= 2 }

	for i := 3; i <= int(math.Sqrt(float64(num))); i += 2 {
		for num%i == 0 { num /= i }
	}
	return num
}

func IsNumberPalindrome(inputNumber int) bool {
	number := strconv.Itoa(inputNumber)
	inverseNum := ""

	for i := len(number) - 1; i >= 0; i-- {
		inverseNum += string(number[i])
	}
	return number == inverseNum
}