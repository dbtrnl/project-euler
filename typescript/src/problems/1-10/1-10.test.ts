import { expect } from 'chai'
import {
  answers, problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10,
} from '.'

describe('Problems 1 to 10', () => {
  it('problem1', () => { const result = problem1(); expect(result).to.be.equal(answers[0]) })

  it('problem2', () => { const result = problem2(); expect(result).to.be.equal(answers[1]) })

  it('problem3', () => { const result = problem3(); expect(result).to.be.equal(answers[2]) })

  it('problem4', () => { const result = problem4(); expect(result).to.be.equal(answers[3]) })

  it('problem5', () => { const result = problem5(); expect(result).to.be.equal(answers[4]) })

  it('problem6', () => { const result = problem6(); expect(result).to.be.equal(answers[5]) })

  it('problem7', () => { const result = problem7(); expect(result).to.be.equal(answers[6]) })

  it('problem8', () => { const result = problem8(); expect(result).to.be.equal(answers[7]) })

  it('problem9', () => { const result = problem9(); expect(result).to.be.equal(answers[8]) })

  it('problem10', () => { const result = problem10(); expect(result).to.be.equal(answers[9]) })
})
/*
const problemsArray = [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10]

// It works, but requires further investigation
// The tests are passing too quickly (< 1ms), problem 4 should be ~500, 600ms
// The total suite run time is similar though (~4.4 secs)
// But each it is apparently hoisted and executed after the whole describe function
// So is there a solution to log each test elapsed time?

console.time()
describe('Problems 1 to 10', () => {
  let CURRENT_PROBLEM = 1

  problemsArray.forEach(async (problem, index) => {
    // console.log('forEach CURRENT_PROBLEM value', CURRENT_PROBLEM)

    const result = problem()
    // console.log(result)
    // console.log(index)

    if (answers[index] !== undefined) {
      it(`problem ${CURRENT_PROBLEM}`, () => {
        // console.log('result:', result, ', index:', index, ', answers[index]:', answers[index])
        expect(result).to.be.equal(answers[index])
      }).timeout(0)
    }
    CURRENT_PROBLEM++
  })
})
console.timeEnd()
 */
