type SimpleObject = { foo: string; bar: string };
type SimpleMap = { [key: string]: number };

const simpleObject: SimpleObject = { foo: 'foo', bar: 'bar' };
const simpleMap: SimpleMap = { foo: 1, bar: 2 };

console.log({
  simpleMap,
  simpleObject,
});
