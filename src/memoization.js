/**
 * Recursively calculates the fibonacci number requested. 2 should return 1. 3
 * should return 2. 4 should return 3. 5 should return 5. 6 should return 8 etc.
 * @method fibonacci
 * @param  {Number} x - The fibonacci to calculate.
 * @return {Number} The value of the fibonacci number.
 */
function fibonacci (x) {
  // fibonacci numbers 0 is 0 and 1 is 1, but 2 is 1.
  return x < 2 ? x : fibonacci(x - 1) + fibonacci(x - 2)
}

// demonstrate fibonacci recursion
fibonacci(10) // result: 55, called: 354 times




/**
 * Stores the calculated fibonacci's for re-use.
 * @type {Array}
 */
const memo = [0, 1]

/**
 * Recursively calculates an optimized version of the above fibonacci recursive
 * function. Makes use of storing individual calculation results in an array
 * to re-use and save process cycles.
 * @method memoizeFibonacci
 * @param  {Number} x - The fibonacci to calculate.
 * @return {Number} The value of the fibonacci number.
 */
function memoizeFibonacci (x) {
  if (!memo[x] && memo[x] !== 0) {
    memo[x] = memoizeFibonacci(x - 1) + memoizeFibonacci(x - 2)
  }

  return memo[x]
}

// demonstrate memoization recursion optimization
memoizeFibonacci(10) // result: 55, called: 19 times only
