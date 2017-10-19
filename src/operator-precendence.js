/**
 * Because grouping has a higher precendence than exponentiation, (10 - 5) is
 * evaluated first. Because exponentiation has a higher precendence than
 * multiplication and division, 5 ** 2 is evaluated beforehand. Because
 * multiplication and division have the same level of precendence, they are
 * evaluated by association from left to right, therefore 2 * 25 is evaluated
 * first, then 50 / 5. This is similar to PEMDAS.
 */
2 * 5 ** 2 / (10 - 5) // 10
