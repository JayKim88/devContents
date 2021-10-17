"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: "jay", hobby: ["soccer"] }, { age: 20 });
function countAndDescribe(element) {
    var description = "got no value";
    if (element.length === 1) {
        description = "Got 1 element";
    }
    else if (element.length > 1) {
        description = "Got " + element.length + " element";
    }
    console.log(element.slice(1));
    return [element, description];
}
console.log(countAndDescribe([1, 2, 3]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Jay" }, "name");
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Jay");
textStorage.addItem("Mindy");
textStorage.removeItem("Jay");
console.log(textStorage.getItems());
function createCourseGoal(title, description, completeUntil) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
var names = ["Jay", "Mindy"];
var DataStorageUnionType = (function () {
    function DataStorageUnionType() {
        this.data = [];
    }
    DataStorageUnionType.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorageUnionType.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorageUnionType.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorageUnionType;
}());
var unionStorage = new DataStorageUnionType();
unionStorage.addItem("Jay");
unionStorage.addItem(0);
unionStorage.removeItem("Jay");
console.log(unionStorage.getItems());
//# sourceMappingURL=app.js.map