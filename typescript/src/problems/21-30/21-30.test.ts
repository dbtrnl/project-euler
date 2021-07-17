import { expect } from 'chai'
import {
  answers, problem21, problem22, problem23, problem24, problem25, problem26, problem27, problem28, problem29, problem30,
} from '.'

describe('Problems 21 to 30', () => {
  it('problem 21', () => { const result = problem21(); expect(result).to.be.equal(answers[0]) })

  it('problem 22', () => { const result = problem22(); expect(result).to.be.equal(answers[1]) })

  it('problem 23', () => { const result = problem23(); expect(result).to.be.equal(answers[2]) })

  it('problem 24', () => { const result = problem24(); expect(result).to.be.equal(answers[3]) })

  it('problem 25', () => { const result = problem25(); expect(result).to.be.equal(answers[4]) })

  it('problem 26', () => { const result = problem26(); expect(result).to.be.equal(answers[5]) })

  it('problem 27', () => { const result = problem27(); expect(result).to.be.equal(answers[6]) })

  it('problem 28', () => { const result = problem28(); expect(result).to.be.equal(answers[7]) })

  it('problem 29', () => { const result = problem29(); expect(result).to.be.equal(answers[8]) })

  it('problem 30', () => { const result = problem30(); expect(result).to.be.equal(answers[9]) })
})
