/**
 * These are the primitive types that are available in TypeScript.
 */
const amount: number = 1;
const name: string = 'John Doe';
const symbol: symbol = Symbol('key');
const sum: bigint = BigInt(100);
const isTrue: boolean = true;
const nothing: undefined = undefined;
const empty: null = null;

console.log({
  amount,
  name,
  symbol,
  sum,
  isTrue,
  nothing,
  empty,
});
