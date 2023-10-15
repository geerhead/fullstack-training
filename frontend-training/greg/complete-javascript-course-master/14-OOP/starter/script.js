'use strict';
//
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never do this - never put methods in function constructors
//   // this.calcAge = function() {
//   //     console.log(2037 - this.birthYear)
//   // }
// };
//
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
//
// // Behind the scenes steps
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} is linked to prototype
// // 4. function automatically returns the {}
//
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);
//
// console.log(jonas instanceof Person);
//
// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// jonas.calcAge();
// matilda.calcAge();
//
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
//
// console.log(Person.prototype.isPrototypeOf(jonas));
//
// //.prototypeOfLinkedObjects
//
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// // Object prototype, which is top of the chain
// console.log(jonas.__proto__);
// // Null, since object is the highest prototype in the chain
// console.log(jonas.__proto__.__proto__.__proto__);
//
// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);
//
// const arr = [3, 6, 4, 5, 6, 6, 6, 9, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
//
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
//
// console.log(arr.unique());
//
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
//   this.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} speed ${this.speed} km/h`);
//   };
//   this.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} speed ${this.speed} km/h`);
//   };
// }
//
// const bmw = new Car('BMW', 120);
// const merc = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// merc.accelerate();
// merc.accelerate();
// merc.accelerate();
// merc.brake();
// merc.brake();
// merc.brake();

// class expression
// const PersonCl = class {};

// class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//
//   // Methods will be added to the prototype of the class since it's outside the constructor
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//
//   get age() {
//     return 2037 - this.birthYear;
//   }
//
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.age);
// console.log(jessica);
// console.log(jessica.fullName);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

// const walter = new PersonCl('Walter White', 1965);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
// Personal preference for using constructor functions

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],
//
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
//
// console.log(account.latest);
// account.latest = 3000;
// console.log(account.latest);
