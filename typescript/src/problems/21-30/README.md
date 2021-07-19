### Problem 23
It was greatly optimized using Set()
- Execution time went from ~4 minutes to < 1 second

- Problem: Had to sum all possible combinations of 2 numbers in a 6965 number array (all abundant numbers >= 0 and <= 28123)
  - Without set, there were `24294140` numbers (Why? `6965*6965= 48511225` and `24294140*2 = 48588280`)
  - Using set, there were only `26667` Unique numbers which were sums of any two abundant numbers <= 28123

  - Original attempt: Find all abundant numbers <= 28123 = `6965` numbers (execution time < 100ms)
    - forEach number in abundantNumberArray, sum that number with each other number in the array (`6965 * 6964 = 48504260` iterations)
    - Then, iterate abundantNumberArray and push to final array (`"positive integers which cannot be written as the sum of two abundant numbers"`) every number not included in this array (*HUGE* time complexity)
    - Then sum every number in the final array
    - Total execution time, ~4 minutes

- Further research - see another implementation at https://www.youtube.com/watch?v=gTZ-oWwidu4

### Problem 24

First permutations will begin with 0 = 9! = 362880 permutations beginning with 0
362880 + 362880 + 362880 = 1088640
So the millionth permutation has to begin with 2

The first permutation beginning with 2 is the 725761st (725760 + 1)

All permutations beginning with 20 = 8! = 40320
Permutations beginning with 20 end at (725760 + 40320) = 766080
Permutations beginning with 21 end at (766080 + 40320) = 806400
Permutations beginning with 22 end at (806400 + 40320) = 846720
Permutations beginning with 23 end at (846720 + 40320) = 887040
Permutations beginning with 24 end at (887040 + 40320) = 927360
Permutations beginning with 25 end at (927360 + 40320) = 967680
Permutations beginning with 26 end at (967680 + 40320) = 1008000

Permutations beginning with 260 = 7! = (967680 + 5040) = 972720
...
Permutations beginning with 276 = 7! = (997920 + 5040) = 1002960

Permutations beginning with 2760 = 6! = (997920 + 720) = 998640
...
Permutations beginning with 2762 = 6! = (999360 + 720) = 1000080

Permutations beginning with 2760 = 5! = (999360 + 720) = 1000080

So the millionth permutation begins with 25

### Problem 28

For purely mathematical solutions, see: https://www.mathblog.dk/project-euler-28-sum-diagonals-spiral/
and https://www.xarg.org/puzzle/project-euler/problem-28/
