// const names: Array<string> = ["Jay", "Mindy"];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hi");
//   }, 2000);
// });
// promise.then((data) => {
//   data.split("");
// });
function merge(a, b) {
    console.log(Object.assign(a, b));
    return Object.assign(a, b);
}
console.log(merge({ name: "jay" }, { age: 20 }));
