// const names: Array<string> = ["Jay", "Mindy"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hi");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split("");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "jay", hobby: ["soccer"] }, { age: 20 });
// console.log(mergeObj);

//Another Generic Function ==========================================================================
interface Lengthy {
  length: number;
  slice: (e: number) => void;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "got no value";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = "Got " + element.length + " element";
  }
  console.log(element.slice(1));

  return [element, description];
}

console.log(countAndDescribe([1, 2, 3]));

//"keyof" Constraints ==========================================================================
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Jay" }, "name");

// Generic Classes ============================================================================
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>(); //lock parameters in string type
textStorage.addItem("Jay");
textStorage.addItem("Mindy");
textStorage.removeItem("Jay");

console.log(textStorage.getItems()); //["Mindy"]

// it cannot find same address if not same variable whose value is located at same address
// In removeItem, this.data.indexOf(item) turns out -1.
// this is the reason that necessary to set as T extends string | number | undefined
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Jay" });
// objStorage.addItem({ name: "Mindy" });
// objStorage.removeItem({ name: "Jay" });

// Generic Utility Types ============================================================================
interface CourseGoal {
  title?: string;
  description?: string;
  completeUntil?: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  //Partial => can use optional properties
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal;
}

const names: Readonly<string[]> = ["Jay", "Mindy"];
// names.push("Anna"); makes error

// Generic Types vs Union Types ========================================================================
// Generic Type is good to lock in a certain type.
// below is the example of Union Type

class DataStorageUnionType {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }
  removeItem(item: string | number | boolean) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const unionStorage = new DataStorageUnionType(); //flexible parameters in types
unionStorage.addItem("Jay");
unionStorage.addItem(0);
unionStorage.removeItem("Jay");
console.log(unionStorage.getItems()); // [0]
