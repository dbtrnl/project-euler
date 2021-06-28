## utils benchmarking

### isPrime()

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
// ~6.8 seconds for findNthPrime(1000100) and using console.time/console.timeEnd
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
// Implementation without array but still slower that using array
// ~3.6 seconds for findNthPrime(1000100) and using console.time/console.timeEnd
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
---