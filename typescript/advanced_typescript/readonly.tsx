interface Fruit {
  name: string;
  color: string;
}

const object: Readonly<Fruit> = {
  name: "apple",
  color: "red",
};

object.name = "banana";
// Cannot assign to 'name' because it is a read-only property.
