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
