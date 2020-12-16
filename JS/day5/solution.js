// let course = "Learning Javascript";
// function greate() {
//   let message = "Hello Students";

//   console.log(message);
//   console.log(course);
// }

// // console.log(message);

// greate();

// parsing, interpreting, execution.
/*
function salaan(name, course = "Web Development", shift = "Morning") {
  console.log(`Hello, I am  ${name}, and Learning ${course}, ${shift}`);
}

salaan("Abdi", "PHP");
salaan("Hamda", "Python", "afternoon");

function addNumber(num1 = 0, num2 = 0) {
  if (typeof num1 == "string") return "please use number";

  let result = num1 + num2;
  return result;
  console.log("after return key");
}

addNumber(20, 30);

let total = addNumber("abd", 4);

total;

const showMessage = function () {
  return "Hello Web Developers";
};

showMessage();
*/

function convertAgeToDays(age) {
  if (typeof age != "number") return "please use number";
  let days = age * 365;
  return `You are ${days} days old`;
}

convertAgeToDays(20);

function getBirthYear(age) {
  // only accept number data
  if (typeof age != "number") return "please use number";

  //   get current year.
  let currentYear = new Date().getFullYear();

  return currentYear - age;
}

getBirthYear(30);

//  exchange dollar to shilling

function exchangeDollarShilling(amount, currencyType = "dollar") {
  // only accept number data from amount parameter
  if (typeof amount != "number") return "please use number";

  //   accept only dollar and shilling in currency type
  if (currencyType != "shilling" || currencyType != "dollar") {
    return "only dollar and shilling are supported";
  }

  if (currencyType == "shilling") return amount / 8500;

  if (currencyType == "dollar") {
    return amount * 8500;
  }
}

exchangeDollarShilling(85000, "euro");

function capitalize(name = "") {
  if (typeof name == "string") return "please use string";

  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

capitalize("sOmaliLand");

function getInitials(fname, lname) {
  return fname[0].toUpperCase() + lname[0].toUpperCase();
}

getInitials("jama", "muse");
