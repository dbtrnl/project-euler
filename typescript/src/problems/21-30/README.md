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
