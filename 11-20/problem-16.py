base = 2
power = 1000
problemInput = str(pow(base, power))

answer = 0

for num in problemInput:
  answer += int(num)

print(f'The sum of all digits in {base}^{power} is {answer}')