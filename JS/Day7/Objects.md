# JavaScript Objects

- Objects are used to store keyed collections of various data and more complex entities
- Objects contain a properties
- A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
- A property of an object can be explained as a variable that is attached to the object
- To create an object literal, we use two curly brackets `{ }`

## Creating an empty object

An empty object

```js
const person = {};
```

### Creating an objecting with values

Each key has a value in the object.

```js
const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  country: "Somaliland",
  city: "Hargeisa",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};
console.log(person);
```

- Now, the person object has firstName, lastName, age, location, skills and isMarried properties.
- The value of properties/key could be
  - string, number, boolean, an object, null, undefined, an array, or a function.

### Accessing Object Properties

We can access values of object using two ways:

- using dot notation `.` followed by key name if the key-name is a one word
- using square bracket and a quote `[]`

```js
const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  country: "Somaliland",
  city: "Hargeisa",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python"],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+63333333",
};

// accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]);

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);
```

### Creating object methods

- Methods are actions that can be performed on objects.
- Methods are stored in properties as function definitions.
- The getFullName is function inside the person object and we call it an object method.

### The **this** Keyword

- In a Method definition, `this` keyword refers to the "owner" of the Method current Object.
- In the example above, the person object that "owns" the fullName function.
- In other words, `this.firstName` means the firstName property of this object.

```js
const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  country: "Somaliland",
  city: "Hargeisa",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python"],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+63333333",
};

console.log(person.getFullName());
// Asabeneh Yetayeh
```

### Adding new Properties to existing object

An object is a mutable data structure and we can modify the content of an object after it gets created.

Setting a new keys in an object

```js
const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  country: "Somaliland",
  city: "Hargeisa",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python"],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+63333333",
};

person.nationality = "Ethiopian";
person.country = "Ethiopia";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());
```

```sh
Ahmed Mohamed is a teacher.
He lives in Ethiopia.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Object Methods

There are different methods to manipulate an object. Let us see some of the available methods.

_Object.assign_: To copy an object without modifying the original object

```js
const person = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  country: "Somaliland",
  city: "Hargeisa",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python"],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+63333333",
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
```

#### Getting object keys using Object.keys()

_Object.keys_: To get the keys or properties of an object as an array

```js
const keys = Object.keys(copyPerson);
console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']
```

#### Getting object values using Object.values()

_Object.values_:To get values of an object as an array

```js
const values = Object.values(copyPerson);
console.log(values);
```

#### Getting object keys and values using Object.entries()

_Object.entries_:To get the keys and values in an array

```js
const entries = Object.entries(copyPerson);
console.log(entries);
```

#### Checking properties using hasOwnProperty()

_hasOwnProperty_: To check if a specific key or property exist in an object

```js
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
```

#### Checking Property existence using `in` operator

- The `in` operator returns true if the specified property is in the specified object

```js
prop in object;
```
