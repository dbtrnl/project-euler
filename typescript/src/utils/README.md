# utils benchmarking

## isPrime()

```typescript
// Fastest implementation, using array to store previously calculated numbers
// ~3.3 seconds for findNthPrime(1000100) and using console.time/console.timeEnd
export function findNthPrime(nthPrime: number): number {
  const primeArray: Array<number> = []
  let iterator = 0

  while (primeArray.length < nthPrime) {
    if (isPrime(iterator)) primeArray.push(iterator)
    iterator++
  }
  return primeArray[nthPrime - 1]
}
```

```typescript
// Implementation without array is twice as slow because isPrime is called twice each iteration
// ~6.8 to ~7.4 seconds for findNthPrime(1000100) and using console.time/console.timeEnd
export function findNthPrime(nthPrime: number): number {
  let currentNumber = 1
  let counter = 0
  while (counter < nthPrime) {
    if (isPrime(currentNumber) && counter === nthPrime - 1) return currentNumber
    if (isPrime(currentNumber)) counter++
    currentNumber++
  }
  return currentNumber
}
```

```typescript
// Implementation without array but still slower than using array
// ~3.6 to ~3.9 seconds for findNthPrime(1000100) and using console.time/console.timeEnd
export function findNthPrime(nthPrime: number): number {
  let currentNumber = 1
  let counter = 0
  while (counter < nthPrime) {
    if (isPrime(currentNumber)) {
      if (counter === nthPrime - 1) return currentNumber
      counter++
    }
    currentNumber++
  }
  return currentNumber
}
```
---

## isEvenlyDivisibleByEveryNumberInInterval()
- Descending order results - `4904ms`, `4254ms`, `4911ms`
- Ascending order results - `5648ms`, `5672ms`, `5776ms`
  

## divisorsProductsUtils

### isEvenlyDivisibleByEveryNumberInInterval()

*Original implementation* (See commit 63fccd238091706f671a2add3f982fd973a96573)
It was an overly complex algorithm found somewhere in the interwebs...

Output of `time yarn test:single problem5` (Ran 3 consecutive times):

```bash
✔ problem5 (4071ms)
Done in 7.42s.
real	0m7,553s
user	0m9,839s
sys	0m0,180s

✔ problem5 (4185ms)
Done in 7.54s.
real	0m7,657s
user	0m10,015s
sys	0m0,206s

✔ problem5 (4131ms)
Done in 7.37s.
real	0m7,494s
user	0m9,776s
sys	0m0,155s
```

---

*Simplified implementation* (using isNumberEvenlyDivisibleBy)
This is only marginally slower... But needs more testing to be sure.

Output of `time yarn test:single problem5` (Ran 3 consecutive times):

```bash
✔ problem5 (4606ms)
Done in 7.88s.
real	0m8,013s
user	0m10,380s
sys	0m0,144s

✔ problem5 (4338ms)
Done in 7.60s.
real	0m7,714s
user	0m9,985s
sys	0m0,177s

✔ problem5 (4040ms)
Done in 7.28s.
real	0m7,392s
user	0m9,733s
sys	0m0,190s
```

