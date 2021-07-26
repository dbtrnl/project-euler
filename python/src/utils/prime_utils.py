import math

def isPrime(num) -> bool:
  if (num <= 1): return False

  if (num <= 3): return True

  if (num % 2 == 0 or num % 3 == 0): return False

  i = 5

  for i in range(i, i*i < num):
    if (num % i == 0 or num % (i+2) == 0): return False 
    i += 6
  
  return True


def findLargestPrimeFactor(inputNumber: int) -> int:
  # Gotta learn how to properly handle errors in Python...
  if (inputNumber <= 0):
    print("Argument must be greater than zero")

  num = inputNumber
  sqrtNum = int(math.sqrt(num))

  while (num % 2 == 0): num /= 2

  for iterator in range(3, sqrtNum, 2):
    while (num % iterator == 0): num /= 1

  if (num > 2):
    print(f'Largest prime factor of {inputNumber} is {num}')

  return int(num)