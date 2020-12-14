console.log("connected")


let str = "double qoutes ${2 + 4}";
let str2 = 'Single quotes ${2 + 4}';

let course = "JAVASCRIPT"

let str3 = `backtick - JS expression can be embeded ${course}`;

console.log(str, str2, str3);

let country = "Somaliland";

country.length;

// change case

country = country.toUpperCase();

console.log( country.toUpperCase() );
console.log( course.toLowerCase() );

country;

"Ahmed Jama Ali".length;


let training = course + " and Freelancing";


console.log(training);


// Assignment.

let myFullName = "wARFaa";

// capitalize first letter and make small the rest
// assign the result to the same variable back.

// Warfaa;

let firstChar = myFullName.charAt(0).toUpperCase();
let restChars = myFullName.slice(1).toLocaleLowerCase();

myFullName = firstChar + restChars;

console.log(myFullName);  // "Warfaa"


// string methods

let resi = "Web developement Training";
let myName = "JAMA Mohamed";

myName = myName.replace(/jama/i, "Mukhtar");

let result = resi.replace("Training", "Course")

console.log(result);
console.log(myName);



//  Math Methods

// random number

Math.random();  // greater 0 and less than 1  0.11111


// random 0 10

Math.floor( Math.random() * 10 ) ;
