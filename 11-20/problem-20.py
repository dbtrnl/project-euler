# -*- coding: utf-8 -*-
import math

print(
  '-----\nn! means n x (n − 1) x ... x 3 x 2 x 1\nFor example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.\nFind the sum of the digits in the number 100!\n-----\n'
)

base = 100
answer = 0

factorial = str(math.factorial(base))

for n in factorial:
  answer += int(n)

print(f'The sum of all digits in {base}! is {answer}')