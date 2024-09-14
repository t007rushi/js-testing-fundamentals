/**
 * One of the limitations of the way that this test is
 * written is that as soon as one of these assertions
 * experiences an error, the other tests are not run.
 * It can really help developers identify what the problem
 * is if they can see the results of all of the tests.
 *
 * Let’s create our own test function to allow us to
 * encapsulate our automated tests, isolate them from other
 * tests in the file, and ensure we run all the tests in the
 * file with more helpful error messages.
 *
 * Task: Encapsulate and Isolate Tests so that we can work
 *       around those failed tests.
 *
 * Execute: Use `node lessons/testing-framework.js` to run the test.
 */

const {sum, subtract} = require('../math');
const {expect} = require('./assertion-library');
// import expect from './assertion-library'


function test(title,callback){
try {
callback();
console.log(`${title} Passed`);
}
catch(error) {
console.log(`${title} Fails `);
console.log('%c', error.message, '\n', "color:red;" );
}
}
function sumtest() {
    const result = sum(3, 7)
    const expected = 9
    expect(result).toBe(expected)
  }
  console.time();
test('sum adds numbers', sumtest)

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})
console.timeEnd();
// function expect(actual){

//   return {
//       toBe(expected){
// if(actual !== expected){
//   throw new Error(`${actual} is not equal to ${expected}`)
// }
// }
//   }}
/**
 * Answer: Checkout the main branch for the answer.
 */
