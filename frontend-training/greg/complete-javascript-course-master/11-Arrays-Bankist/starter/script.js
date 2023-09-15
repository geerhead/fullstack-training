'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i}</div>
          <div class="movements__value">${mov}</div>
        </div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; /// stw
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
//
// const juliaDogs = [3, 5, 2, 12, 7];
// const kateDogs = [4, 1, 15, 8, 3];
// const juliaDogsFixed = juliaDogs.slice(1, -2);
//
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsCombined = [...dogsJulia, ...dogsKate];
//   dogsCombined.forEach(function (age) {
//     if (age > 3) {
//       console.log(`This dog is ${age} years old`);
//       console.log('This dog is not a puppy');
//     } else {
//       console.log(`This dog is ${age} years old`);
//       console.log('This dog is a puppy');
//     }
//   });
// };
//
// checkDogs(juliaDogsFixed, kateDogs);

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUsd = movements.map(mov => {
  return mov * euroToUsd;
});

// console.log(movements);
// console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * euroToUsd);
}
//
// console.log(movementsUsdfor);

const movementDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}:You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}:You withdrew ${mov}`;
  }
});

// console.log(movementDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
// console.log(withdrawals);

// accumulator --> Snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// console.log(balance);

const max = movements.reduce((acc, mov, i, arr) => {
  return acc > mov ? acc : mov;
}, movements[0]);

// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//----------------------------------
// const calcAverageHumanAge = function (ages) {
//   const dogAgeInHumanAges = [];
//   ages.map((age, i, arr) => {
//     let d2hAge = age <= 2 ? 2 * age : 16 + age * 4;
//     d2hAge >= 18 ? dogAgeInHumanAges.push(d2hAge) : '';
//   });
//   // console.log(dogAgeInHumanAges);
//   return (
//     dogAgeInHumanAges.reduce((acc, curr, i, arr) => {
//       return acc + curr;
//     }, 0) / dogAgeInHumanAges.length
//   );
// };

//Optimized code
// const calcAverageHumanAge = function (ages) {
//   return (
//       ages.reduce((acc, curr, i, arr) => {
//         acc = curr > 2 ? acc + (16 + curr * 4) : acc;
//         return acc;
//       }, 0) / ages.filter(age => age > 2).length
//   );
// };
//
// const doggies = [5, 2, 4, 1, 15, 8, 3];
// const doggies2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(calcAverageHumanAge(doggies));
// console.log(calcAverageHumanAge(doggies2));

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

const calcDisplaySummary = function (movemnets) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int > 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);
