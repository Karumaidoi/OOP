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

console.log(jonas.sayHi("Alex", "Maina"));
alex.sayHi();
