"use strict";
var _a;
const e1 = {
    name: "Kim",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    if ("privileges" in emp) {
        console.log("Privileges: ", emp.privileges);
    }
    if ("startDate" in emp) {
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
    loadCargo(amount) {
        console.log("loading cargo" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
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
const userInputElement = document.getElementById("user-input");
if (userInputElement)
    userInputElement.value = "helllllow world";
const errorBag = {
    1: "must start with a capital character",
    2: "must start with a capital character",
    3: "must start with a capital character",
    4: "must start with a capital character",
    email: "Not a valid email!",
    username: "must start with a capital character",
};
const result = add("jay", "kim");
console.log("function overloads: ", result);
result.split(" ");
const fetchUserData = {
    id: "u1",
    name: "jay",
    job: { title: "CEO", description: "my company" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = 0;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "default!!!";
console.log("stored data", storedData);
//# sourceMappingURL=app.js.map