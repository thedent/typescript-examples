/**
 * @description How to extract keys from an object
 */

type Car = {
  brand: string;
  year: number;
  model: string;
};

type CarKeys = keyof Car;

type CarValues = Car[keyof Car];

type ValueFrom<T> = T[keyof T];

type CarValue = ValueFrom<Car>;
