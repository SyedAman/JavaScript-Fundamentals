/**
 * Intuitively, one would expect this expression to evaluate to false. However,
 * operators work just like functions. And according to operator associativity,
 * these two less-than operators are evaluated from left to right. 3 < 2
 * evaluates to false. The remainding expression becomes false < 1. False is
 * then coerced to 0 so the expression becomes 0 < 1, which evaluates to true.
 */
3 < 2 < 1 // true

/**
 * Intuitively, one would expect this expression to be true. But because of
 * operator associativity, 3 > 2 evaluates to true which is coerced to 1. The
 * remainding expression becomes true > 1. True is coerced to 1 which evaluates
 * the expression 1 > 1 to false.
 */
3 > 2 > 1 // false
