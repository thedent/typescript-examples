type User = {
  firstName: string;
  lastName: string;
};

type Address = {
  street: string;
  city: string;
};

/**
 * Example of a intersection. This is a combination of multiple types.
 */
type UserWithAddress = User & Address;

const userWithAddress: UserWithAddress = {
  firstName: 'John',
  lastName: 'Doe',
  street: '123 Main St',
  city: 'Anytown',
};

type UserOrAddress = User | Address;

const user: UserOrAddress = {
  firstName: 'John',
  lastName: 'Doe',
};

const address: UserOrAddress = {
  street: '123 Main St',
  city: 'Anytown',
};

console.log({ userWithAddress, user, address });
