// object literal { }
// key: value
// key must be string.
// value can be any data type
let age = 35;
let lastName = "Mohamed";

const person = {
  firstName: "Ahmed",
  lastName,
  myAge: age,
  skills: ["HTML", "CSS", "JS", "REACT"],
  isMarried: false,
  "his hobbies": ["sports", "reading", "coding"],
  getInfo: function () {
    return `I am ${this.firstName} ${this.lastName} and my age is ${this.myAge} and my skills are ${this.skills}`;
  },

  getAge: getAge,
};

function getAge() {
  return this.age;
}

person.getAge();

// adding new properties to object.

person.country = "Somaliland";
person["city"] = "Hargeisa";

// updating property value

//person.age = 30;
//person['age'] = 30

// accessing Object keys

person.firstName; // dot notation
person["firstName"]; // bracket notation

person["his hobbies"];

// dynamic key.  from variable.

let key = "age";

person[key];

// Property Short Hand.

// Object Methods

person.getInfo();

// Object Constructor
// const person1 = new Object()
