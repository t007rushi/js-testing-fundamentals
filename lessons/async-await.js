/**
 * Our testing framework works great for our synchronous
 * test. What if we had some asynchronous functions that
 * we wanted to test? We could make our callback functions
 * async, and then use the await keyword to wait for that
 * to resolve, then we can make our assertion on the result
 * and the expected.
 *
 * Let’s make our testing framework support promises so
 * users can use async/await.
 *
 * Task: modify `test` and `expect` to handle asynchronous
 * functions.
 *
 * Execute: Use `node lessons/async-await.js` to run the test.
 */

const {sumAsync, subtractAsync} = require('../math');

async function test(title,callback){
  try {
  await callback();
  console.log(`${title} Passed`);
  }
  catch(error) {
  console.log(`${title} Fails \n`);
  console.log(error);
  }
  }
  // console.time();
  // console.timeEnd();
test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected);
})



function expect(actual){

  return {
      toBe(expected){
if(actual !== expected){
  throw new Error(`${actual} is not equal to ${expected}`);
}
}
  }}

/**
 * Answer: Checkout the main branch for the answer.
 */
