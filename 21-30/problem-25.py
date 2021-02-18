print(
  '-----\nThe Fibonacci sequence is defined by the recurrence relation:\nFn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.\nThe 12th term, F12, is the first term to contain three digits (144).\nWhat is the index of the first term in the Fibonacci sequence to contain 1000 digits?\n-----\n'
)

import math
import sys

def fibonacci(num):
  if num == 1 or num == 2:
    return 1
  else:
    return (fibonacci(num - 1) + fibonacci(num - 2))

total_iterations = 10

# for i in range(total_iterations):
#   print(fibonacci(i))

# Printing the recursion limit (1000)
print (sys.getrecursionlimit())