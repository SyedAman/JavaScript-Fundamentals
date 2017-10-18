/**
 * Definition and demonstration of the curry method.
 */

/**
 * Augments Function.prototype to add in a curry method.
 * @method
 * @return {Function} - A function that already has one argument passed but
 * needs the rest of its arguments.
 */
Function.prototype.curry = function () {
  /**
   * The function's arguments converted into an array.
   * @type {Array}
   */
  const args = [...arguments]
  /**
   * The function that curry is being called upon.
   * @type {Function}
   */
  const that = this

  // combine that's arguments with the returned functions arguments
  return function () {
    return that.apply(null, args.concat(...arguments))
  }
}

/**
 * Calculates the sum of two numbers.
 * @method add
 * @param  {Number} x - The augend.
 * @param  {Number} y - The addend.
 */
function add(x, y) {
  return x + y
}

// demonstrate currying
const add1 = add.curry(1)
add1(5) // 6
