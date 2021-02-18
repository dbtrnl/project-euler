print(
  '-----\nThe series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.\nFind the last ten digits of the series, 11 + 22 + 33 + ... + 1000^1000.\n-----\n'
)

exponent = 1000
answer = 0

for base in range(1, exponent + 1):
  answer += pow(base, base)
  base + 1

answer = str(answer)

print(f'The answer is {answer[-10:]}')
