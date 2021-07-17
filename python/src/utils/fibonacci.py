def returnFibonacciNumbersUntil(limit) -> list:
  fibArray = [1, 2]
  iterator = 2
  currentNumber = fibArray[iterator - 1] + fibArray[iterator - 2]

  while (currentNumber <= limit):
    fibArray.append(currentNumber)
    iterator += 1
    currentNumber = fibArray[iterator - 1] + fibArray[iterator - 2]

  return fibArray
