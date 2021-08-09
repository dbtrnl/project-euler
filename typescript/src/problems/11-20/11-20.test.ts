import { expect } from 'chai'
import {
  answers, problem11, problem12, problem13, problem14, problem15, problem16, problem17, problem18, problem19, problem20,
} from '.'

describe('Problems 11 to 20', () => {
  it('problem11', () => { const result = problem11(); expect(result).to.be.equal(answers[0]) })

  it('problem12', () => { const result = problem12(); expect(result).to.be.equal(answers[1]) })

  it('problem13', () => { const result = problem13(); expect(result).to.be.equal(answers[2]) })

  it('problem14', () => { const result = problem14(); expect(result).to.be.equal(answers[3]) })

  it('problem15', () => { const result = problem15(); expect(result).to.be.equal(answers[4]) })

  it('problem16', () => { const result = problem16(); expect(result).to.be.equal(answers[5]) })

  it('problem17', () => { const result = problem17(); expect(result).to.be.equal(answers[6]) })

  it('problem18', () => { const result = problem18(); expect(result).to.be.equal(answers[7]) })

  it('problem19', () => { const result = problem19(); expect(result).to.be.equal(answers[8]) })

  it('problem20', () => { const result = problem20(); expect(result).to.be.equal(answers[9]) })
})
