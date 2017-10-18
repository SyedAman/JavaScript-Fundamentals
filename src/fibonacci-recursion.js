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
fibonacci(10) // 55
