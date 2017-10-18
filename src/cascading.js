/**
 * Custom number class with its own modifying methods.
 * @method number
 * @param  {[type]} initialValue [description]
 * @return {[type]}              [description]
 */
function number(initialValue) {
  this.value = initialValue,

  this.add = function (addend) {
    this.value += addend
    return this
  }

  this.subtract = function (minuend) {
    this.value -= minuend
    return this
  }

  return this
}

/**
 * A method for the number class that multiplies its value property.
 * @method
 * @param  {Number} multiplier - The number to multiply value with.
 * @return {Number} - The modified number object.
 */
number.prototype.multiply = function (multiplier) {
  this.value *= multiplier
  return this
}

/**
 * A method for the number class that divides its value property.
 * @method
 * @param  {Number} dividend - The number to divide value with.
 * @return {Number} - The modified number object.
 */
number.prototype.divide = function (dividend) {
  this.value /= dividend
  return this
}

// demonstrate cascading
new number(5).add(4).subtract(10).add(7).multiply(6).divide(6).value // 6
