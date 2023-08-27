"use strict";

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const jonas = new Person("Alex", "Maina");
const alex = new Person("Maina", "Mwangi");

Person.prototype.sayHi = function (firstName, lastName) {
  console.log("Here");
  return `My name is ${firstName} and ${lastName}`;
};

Person.prototype.species = "Homo sapiens";

console.log(jonas.sayHi("Alex", "Maina"));
alex.sayHi();

console.log(alex.hasOwnProperty("firstName"));
console.log(alex.__proto__.__proto__);
console.log(Object.prototype);
console.log(Array.prototype);

///////////////////////////////////////////
// Adding Methods to arr prototypes

const arr = [1, 2, 2, 3, 4, 2, 3, 4];

Array.prototype.unique = function () {
  console.log(this);
  return [...new Set(this)];
};

console.log(arr.unique());

////////////////////////////////////
// Classes

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const alex2 = new Person2("Alex", "Maina");
console.log(alex2.name);
