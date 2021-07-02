import { expect } from 'chai'
import {
  answers, problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10,
} from '../1-10'

describe('Problems 1 to 10', () => {
  it('problem 1', () => { const result = problem1(); expect(result).to.be.equal(answers[0]) })

  it('problem 2', () => { const result = problem2(); expect(result).to.be.equal(answers[1]) })

  it('problem 3', () => { const result = problem3(); expect(result).to.be.equal(answers[2]) })

  it('problem 4', () => { const result = problem4(); expect(result).to.be.equal(answers[3]) })

  it('problem 5', () => { const result = problem5(); expect(result).to.be.equal(answers[4]) })

  it('problem 6', () => { const result = problem6(); expect(result).to.be.equal(answers[5]) })

  it('problem 7', () => { const result = problem7(); expect(result).to.be.equal(answers[6]) })

  it('problem 8', () => { const result = problem8(); expect(result).to.be.equal(answers[7]) })

  it('problem 9', () => { const result = problem9(); expect(result).to.be.equal(answers[8]) })

  it('problem 10', () => { const result = problem10(); expect(result).to.be.equal(answers[9]) })
})

/*
const problemsArray = [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10]

describe('Problems 1 to 10', () => {
  let CURRENT_PROBLEM = 1
  let ITERATOR = 0

  problemsArray.forEach((problem) => {
    // If CURRENT_PROBLEM has an answer (if i already solved that problem)
    if (answers[ITERATOR] !== undefined) {
      it(`problem ${CURRENT_PROBLEM}`, () => {
        const result: () => number = problemsArray[ITERATOR].prototype()
        expect(result).to.be.equal(answers[ITERATOR])
      })
    }
    CURRENT_PROBLEM++
    ITERATOR++
  })
})
 */
