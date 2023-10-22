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

// Person.hey = function () {
//   console.log('hey there');
//   console.log(this);
// };

// const jonas = new Person('Jonas', 1991);
// Person.hey();
//

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

// Person Class declaration

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
//
//   // Static method
//
//   static hey() {
//     console.log('Hey there!!');
//     console.log('this');
//   }
// }

// PersonCl.hey();

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

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK
 */

// class Car {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }
//
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} speed ${this.speed} km/h`);
//   }
//
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} speed ${this.speed} km/h`);
//   }
// }
//
// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.speedUS = 50;
// bmw.brake();
// bmw.accelerate();
/*****************************************/
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
//
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// // Linking prototypes
// // Student.prototype = Object.create(Person.prototype);
//
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// // mike.calcAge();
// Student.prototype.constructor = Student;
// console.log(mike);

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK */
//
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
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`The battery has been charged to ${this.charge}`);
// };
//
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} speed ${this.speed} km/h and charge is ${this.charge}`
//   );
// };
// // console.dir(EV.prototype.constructor);
// // EV.prototype.constructor = EV;
// // console.dir(EV.prototype.constructor);
// const tesla = new EV('Tesla', 120, 90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.chargeBattery(100);
// tesla.accelerate();
// console.log(tesla);

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first!
//     super(fullName, birthYear); //Sets up this keyword
//     this.course = course;
//   }
//
//   introduce() {
//     console.log(
//       `Hey my name ${this.fullName} and I am studying ${this.course}`
//     );
//   }
//
//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
//
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();
// console.log(martha);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//
// const steven = Object.create(PersonProto);
//
// const StudentProto = Object.create(PersonProto);
//
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
//
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
//
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // Public field definition - Only on instances, not the prototype - reference by this keyword
  locale = navigator.language;
  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property _ <-- prefix
    this.local = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods - Already in use
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  balance() {
    console.log(`${this.#movements.reduce((acc, curr) => acc + curr, 0)}`);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //Private methods, important for hiding details of methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1100);
acc1.balance();
console.log(acc1);
console.log(acc1.getMovements());
// console.log(acc1.#movements);
// console.log(acc1.#pin);
