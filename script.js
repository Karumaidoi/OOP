"use strict";

const Person = function (firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
};

console.log(new Person("Alex", "Maina"));
