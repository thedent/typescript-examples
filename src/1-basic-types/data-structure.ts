/**
 * The following data structures are supported in TypeScript:
 */

type ObjectDataStructure = {
  foo: string;
  bar: number;
};

const exampleObject: ObjectDataStructure = {
  foo: 'foo',
  bar: 1,
};

type RecordDataStructure = { [key: string]: string };

const exampleRecord: RecordDataStructure = {
  foo: 'foo',
  bar: 'bar',
  hello: 'world',
};

type TupleDataStructure = [number, boolean];

const exampleTuple: TupleDataStructure = [1, true];

type ArrayDataStructure = string[];

const exampleArray: ArrayDataStructure = ['foo', 'bar'];

console.log({
  exampleObject,
  exampleRecord,
  exampleTuple,
  exampleArray,
});
