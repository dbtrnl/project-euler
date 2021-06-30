import { factorial, factorialBigInt } from '../_utils'

/**
 * Function to show where the precision of Int goes take a walk (at 23 factorial)
 */
export default function bigIntPrecision(): void {
  const LIMIT = 25
  for (let i = 1; i <= LIMIT; i++) {
    const fac = BigInt(factorial(i))
    const facBigInt = factorialBigInt(i)
    console.log(`factorial(${i})`, fac)
    console.log(`factorialBigInt(${i})`, facBigInt)

    console.log('fac <= Number.MAX_SAFE_INTEGER?', fac <= Number.MAX_SAFE_INTEGER)
    console.log('fac <= Number.MAX_VALUE?', fac <= Number.MAX_VALUE, '\n')

    if (fac !== facBigInt) {
      console.log(`factorial diverges from factorialBigInt at ${i}`)
      break
    }
  }
}
