/**
 * Memory is allocated for function a() before the code is even executed.
 * Since function a() is just a statement not a function expression, there is
 * nothing left to do after allocation. Thus when the code executes after all
 * memory is allocated, and a() runs before the definition, it works as
 * intended.
 */
a() // 7

function a() {
  return 7
}

/**
 * Memory is allocated for variable x and assigned to undefined. Then code is
 * executed line by line. So before the code assigning x to 10 was executed,
 * x was allocated and still assigned to undefined.
 */

x // undefined

var x = 10
