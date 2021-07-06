export type TriangleRow = Array<number>
export type Triangle = Array<TriangleRow>

export type BiggestNumberObject = {
  number: number;
  prevIndex: number;
}

/**
 * The Collatz Sequence of a given number
 * @param number The number that originated the sequence
 * @param sequence The full Collatz sequence
 */
export type CollatzSequenceObject = {
  number: number;
  sequence: Array<number>;
}

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

export type AmicableChainObject = {
  number: number;
  chain: number[];
  chainLength: number
}

export type NumberClassification = 'perfect' | 'abundant' | 'deficient' | null

export type NumberMatrix = Array<number[]>

export type NullMatrix = Array<null[] | number[]>
