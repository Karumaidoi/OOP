"use strict";

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayHi = function () {
    console.log();
    return `My name is ${firstName} and ${lastName}`;
  };
};

const Person2 = function (age) {};

const jonas = new Person("Alex", "Maina");
console.log(jonas.sayHi());
console.log();
