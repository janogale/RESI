const names = ["Ahmed", "Farah", "Sagal", "Warda"];

// let firstUser = names[0];
// let secondUser = names[1];
// let thirdUser = names[2];
//let node  = fullStack[1][0]

// let [firstUser, secondUser, thirdUser] = names;

// capture third value

let [, , thirdUser, user4] = names;

// get first value and put rest in array

let [user1, ...rest] = names;

console.log(user1, rest);

// 2-dimensional array - destructuring.

const fullStack = [
  ["HTML", "CSS", "JS", "React JS"],
  ["Node JS", "Express", "MongoDB"],
];

let [[, , , react], [node, express, db]] = fullStack;

console.log(react);

//let [[htm, css, ...remaining]] = fullStack;

// destructuring with defualt value

let [fuser = "admin", , , , user5 = "Guest User"] = names;

console.log(fuser, user5);

const countries = [
  ["Somaliland", "Hargeisa"],
  ["Ethopia", "Addisaba"],
  ["Kenya", "Nairobi"],
];

// destructuring with for of

for (let [country, city] of countries) {
  //  console.log(country, city)
}

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

//   let width = rectangle.width
//   let height = rectangle.height

// let {width, height} = rectangle;

// console.log('this width is ', width, 'height is ', height)

// let {area} = rectangle;
// console.log(area)

// renaming variables.

const { area: size, width: w, height: h } = rectangle;

console.log(size, w, h);

const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 55,
  children: {
    child1: {
      name: "Sakariye",
      age: 5,
    },
    child2: {
      name: "Hamda",
      age: 12,
    },
  },
};

// let {firstName, year=2020} = person;

// console.log(firstName, year)

//  nested objects

let {
  children: {
    child1: { name: firstChild },
    child2: { name: secondChild },
  },
} = person;

console.log(firstChild, secondChild);

function getPersonInfo({ name, skills, age, title, year = 2020 }) {
  return ` I my name is ${name} and I am ${age} years old
    and my skills are ${skills.join(
      ", "
    )} I work as ${title}, current year is ${year}
    `;
}

let personInfo = {
  title: "Web Developer",
  age: 30,
  skills: ["HTML", "CSS", "JS"],
  name: "Ahmed",
};

console.log(getPersonInfo(personInfo));



// Spread Operator ...

const arr2 = [1, 2, 3, 4, 5]

const arr1 = [6, 7, 8, 9, 10]


const nums = [...arr2, ...arr1]


const evens = [0, 2, 4, 6, 8, 10];

const evenNumbers = [...evens];