type Identity = { id: number };
type PersonalInfo = { firstName: string; lastName: string };
type Permission = { canAccess: boolean };

type UserProfile = Identity & PersonalInfo & Permission;

interface Base {
  id: string;
  postedAt: string;
}

interface Article extends Base {
  headline: string;
  content: string;
}

interface Feedback extends Base {
  username: string;
  comment: string;
}

type Gamma = { common: string; extraOne: boolean };
type Delta = { common: string; extraTwo: number };

type UnionType = Gamma | Delta;
type KeysOfUnion = keyof UnionType;

type ContactInfo = { email: string; phone: string };
type WorkInfo = { email: string; phone: number };

type Individual = ContactInfo & WorkInfo;

type Phone = Individual['phone'];

const test: Individual = {
  email: '',
  phone: 1,
};
