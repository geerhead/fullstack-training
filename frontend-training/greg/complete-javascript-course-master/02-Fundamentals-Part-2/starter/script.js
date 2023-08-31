const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    return 2037 - this.birthYear;
  },
};

console.log(jonas.calcAge());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license

console.log(
  `Jonas is a ${jonas.calcAge()}-year old teacher and he ` +
    (jonas.hasDriversLicense
      ? " has a drivers license"
      : " does not have a drivers license")
);
