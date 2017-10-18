import './curry'

/**
 * Calculates the sum of two numbers.
 * @method add
 * @param  {Number} x - The augend.
 * @param  {Number} y - The addend.
 */
function add(x, y) {
  return x + y
}

const add1 = add.curry(1)
add1(5) // 6
