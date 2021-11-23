// @intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // object type makes combination

const e1: ElevatedEmployee = {
  name: "Kim",
  privileges: ["create-server"],
  startDate: new Date(),
};

// @More on Type Guards

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // union type finds intersection! -> number

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is called "type guard"
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  if ("privileges" in emp) {
    // it can check props in object
    console.log("Privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    // console.log("Start Date: ", emp.startDate);
  }
}

printEmployeeInformation({ name: "Jay", startDate: new Date() });

class Car {
  drive() {
    console.log("driving!");
  }
}

class Truck {
  drive() {
    console.log("driving truck!");
  }
  loadCargo(amount: number) {
    console.log("loading cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    //type guard
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// @Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  //interface is not compiled to javascript thus impossible to use instanceof
  //in this case, we can use switch!
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("moving at speed: ", speed);
}

moveAnimal({ type: "horse", runningSpeed: 1000 });

// @Type Casting

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
const userInputElement = document.getElementById("user-input");
if (userInputElement)
  (userInputElement as HTMLInputElement).value = "helllllow world";

// @Index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  // number type value can be converted to String type
  // no limit on how many props you add in index properties
  1: "must start with a capital character",
  2: "must start with a capital character",
  3: "must start with a capital character",
  4: "must start with a capital character",
  email: "Not a valid email!",
  username: "must start with a capital character",
};

// @Function Overloads
const result = add("jay", "kim"); // we don't expect this works without function overloads
console.log("function overloads: ", result);
result.split(" ");

// @Optional Chaining: this prevents run-time error
const fetchUserData = {
  id: "u1",
  name: "jay",
  job: { title: "CEO", description: "my company" },
};

console.log(fetchUserData?.job?.title);

//@Nullish Coalescing
const userInput = 0;

const storedData = userInput ?? "default!!!";
// different from ||, it just skips null and undefined
console.log("stored data", storedData);
