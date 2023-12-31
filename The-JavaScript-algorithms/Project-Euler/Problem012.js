/**
 * Problem 12 - Highly divisible triangular number
 *
 * https://projecteuler.net/problem=11
 *
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
 *
 * The first ten terms would be: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * Let us list the factors of the first seven triangle numbers:
 *
 * 1: 1
 * 3: 1,3
 * 6: 1,2,3,6
 * 10: 1,2,5,10
 * 15: 1,3,5,15
 * 21: 1,3,7,21
 * 28: 1,2,4,7,14,28
 *
 * We can see that 28 is the first triangle number to have over five divisors.
 *
 * What is the value of the first triangle number to have over five hundred divisors?
 */

/**
 * Gets number of divisors of a given number
 * @params num The number whose divisors to find
 */
const getNumOfDivisors = (num) => {
  // initialize numberOfDivisors
  let numberOfDivisors = 0

  // if one divisor less than sqrt(num) exists
  // then another divisor greater than sqrt(n) exists and its value is num/i
  const sqrtNum = Math.sqrt(num)
  for (let i = 0; i <= sqrtNum; i++) {
    // check if i divides num
    if (num % i === 0) {
      if (i === sqrtNum) {
        // if both divisors are equal, i.e., num is perfect square, then only 1 divisor
        numberOfDivisors++
      } else {
        // 2 divisors, one of them is less than sqrt(n), other greater than sqrt(n)
        numberOfDivisors += 2
      }
    }
  }
  return numberOfDivisors
}

/**
 * Loops till first triangular number with 500 divisors is found
 */
const firstTriangularWith500Divisors = () => {
  let triangularNum
  // loop forever until numOfDivisors becomes greater than or equal to 500
  for (let n = 1; ; n++) {
    // nth triangular number is (1/2)*n*(n+1) by Arithmetic Progression
    triangularNum = (1 / 2) * n * (n + 1)
    if (getNumOfDivisors(triangularNum) >= 500) return triangularNum
  }
}

export { firstTriangularWith500Divisors }
