type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  user: DeletableUserInstance;
  car: DeletableCarInstance;
}

const profile = new Profile();
profile.user = new DeletableUser("John");
profile.car = new DeletableCar("Lamborghini");
