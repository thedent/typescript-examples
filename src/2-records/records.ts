type Status = 'active' | 'inactive';

type System = Record<Status, boolean>;

const system: System = {
  active: true,
  inactive: false,
};
