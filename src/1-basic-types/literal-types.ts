/**
 * Literal types are types that represent exact values that a object can have.
 */

type exampleLiteral = 'example' | 1234;

const right: exampleLiteral = 'example';
const wrong: exampleLiteral = 1235; // wrong, because 12345 is not in the list

console.log({
  right,
  wrong,
});
