### Project Euler solutions

#### Further reading

- **Problem 14** (Collatz Problem) - [The Collatz Conjecture](https://medium.com/cantors-paradise/the-collatz-conjecture-some-shocking-results-from-180-000-iterations-7fea130d0377)
- **Problem 15** - Try different approaches such as [Pascal Triangle](https://researchideas.ca/wmt/c6b3.html)
  - Or try [different approaches](https://betterexplained.com/articles/navigate-a-grid-using-combinations-and-permutations/)
- **Problem 18/67** - It uses Dynamic Programming (breaking problem into subproblems)
  - See [these approaches](https://www.mathblog.dk/project-euler-18/), also see [optimal substructures](https://en.wikipedia.org/wiki/Optimal_substructure), graph theory and greedy algorithms.
- **Problem 21** - [Amicable numbers](https://primes.utm.edu/glossary/page.php?sort=AmicableNumber)
- **Problem 22** - Using [Base36](https://en.wikipedia.org/wiki/Base36) to find the numeric position of each char.

#### Notes

- Some exercises used typescript/ts-node, hence the packages.json
- Some JS/TS files use IIFEs (Immediately Invoked Function Expression) to avoid function and variable collision


#### Benchmarking

- Problem 7
  - First solution takes ~11 seconds to execute
  - Refactored code takes ~10 miliseconds (~1000 times faster)

- Problem 25 (with typescript):
  - Calculating the first Fibonacci Number to have N digits.
  ```bash
  - `$ Number Fib(4782) has 1000 digits or more default: 112.99ms`
  - `$ Number Fib(9567) has 2000 digits or more default: 826.671ms`
  - `$ Number Fib(14352) has 3000 digits or more default: 2.301s`
  - `$ Number Fib(19137) has 4000 digits or more default: 5.464s`
  - `$ Number Fib(23922) has 5000 digits or more default: 11.048s`
  - `$ Number Fib(28707)) has 6000 digits or more default: 17.485s`
  - `$ Number Fib(33492) has 7000 digits or more default: 29.132s`
  - `$ Number Fib(38277) has 8000 digits or more default: 44.357s`
  - `$ Number Fib(43062) has 9000 digits or more default: 59.722s`
  - `$ Number Fib(47847) has 10000 digits or more default: 1:24.364 (m:ss.mmm)`
  ```