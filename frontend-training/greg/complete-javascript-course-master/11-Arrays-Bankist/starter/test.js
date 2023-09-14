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
// Original code that worked (ugly)
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

//Optimized code that is failing - big derp
const calcAverageHumanAge = function (ages) {
  return (
    ages.reduce((acc, curr, i, arr) => {
      acc = curr > 2 ? acc + (16 + curr * 4) : acc;
      return acc;
    }, 0) / ages.filter(age => age > 2).length
  );
};

const doggies = [5, 2, 4, 1, 15, 8, 3];
const doggies2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(doggies));
console.log(calcAverageHumanAge(doggies2));
