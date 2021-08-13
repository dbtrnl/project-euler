export type TriangleRow = Array<number>
export type Triangle = Array<TriangleRow>

export type BiggestNumberObject = {
  number: number;
  prevIndex: number;
}

/**
 * The Collatz Sequence of a given number
 *
 * ---
 * @param number The number that originated the sequence
 * @param sequence The full Collatz sequence os that number
 */
export type CollatzSequenceObject = {
  number: number;
  sequence: Array<number>;
}

/**
 * Number triplet set
 *
 * ---
 * Used in problem 9
 */
export type TripletSetObject = {
  a: number;
  b: number;
  c: number;
}

/**
 * Describes if number is amicable.
 *
 * If true, a pair of numbers is returned
 */
export type AmicableNumberObject = {
  isAmicable: boolean;
  pair: number[] | null;
}

/**
 * Amicable chain object - Used in problem 95
 *
 */
export type AmicableChainObject = {
  number: number;
  /**
   * Null in case of zero
   */
  chain: number[] | null;
  /**
   * Zero in case of zero
   */
  chainLength: number
}

/**
 * A digit map object, mapping how many times each digit repeats in a single number.
 *
 * ---
 * Used in utils
 */
export type DigitMapObject = {
  [key: string]: number
}

/**
 * A letter map object, mapping each number to it's written form.
 *
 * ---
 * Used in problem 17
 */
export type LetterMapObject = {
  [key: string]: string;
}

/**
 * Simple type used on findAllProperDivisors() util
 */
export type AllDivisors = Array<number> | null

/**
 * Divisor type. A number in the case of numbers which have divisors
 *
 * Null in case of 0
 */
export type Divisors = number | null

/**
 * A two-number array representing a number interval
 */
export type Interval = [number, number]

/**
 * The classification of a number according to the sum of it's divisors
 *
 * ---
 * Used in utils
 */
export type NumberClassification = 'perfect' | 'abundant' | 'deficient' | null

export type NumberMatrix = Array<number[]>

export type NullMatrix = Array<null[] | number[]>

/**
 * Enum used in iteration of large arrays.
 *
 * ---
 * Used in utils
 */
export type OrderEnum = 'ascending' | 'descending'
