//1 Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  // console.log(i)
}

// while loop

let counter = 0;

while (counter <= 10) {
  //console.log('while loop ', counter);

  counter++;
}

// do while loop
let num = 0;
do {
  //console.log("do while loop ", num);
  num++;
} while (num <= 10);

//  2 Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  // console.log(i)
}

// while loop

let counter1 = 10;

while (counter1 >= 0) {
  //console.log('while loop ', counter);

  counter1--;
}

// do while loop
let num1 = 10;
do {
  // console.log("do while loop ", num1);
  num1--;
} while (num1 >= 0);

//   3 Iterate 0 to n using for loop

function loopNnumber(nNumber) {
  for (let i = 0; i <= nNumber; i++) {
    console.log("N Number Loop ", i);
  }
}

//loopNnumber(3)

// 4 Write a loop that makes the following pattern using console.log()

for (let i = 0; i <= 7; i++) {
  if (i == 0) continue;
  //console.log( "#".repeat(i) )
}

/* 5 Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

*/

for (let i = 0; i <= 10; i++) {
  let output = `${i} x ${i} = ${i * i}`;

  //console.log(output)
}

/* 6
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    //   console.log(`i    i^2   i^3`);
  }

  let output = `${i}  ${i ** 2}  ${i ** 3}`;

  // console.log(output)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

// solution 1
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) continue;

  // console.log(i)
}

// solution 2

for (let i = 0; i <= 100; i += 2) {
  //   console.log(i)
}

//  8 Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) continue;

  // console.log(i)
}

//   Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

for (let i = 0; i <= 100; i++) {
 
    if(isPrime(i)){
     //   console.log(i)
    }

}



// 10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.

let sum = 0;

for (let i = 0; i <= 100; i++) {
     
    sum = sum + i;    // sum += i;
  }

  //console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


//   11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumArr = [0, 0];

for (let i = 0; i <= 100; i++) {

    if(i % 2 == 0){
        sumArr[0] += i;
    }
     
    if(i % 2 != 0){
        sumArr[1] += i;
    }

  }

  //console.log(sumArr)


//   exercise part 2

const countries = [
    'Somaliland',
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


  const mernStack = ['MongoDB', 'Express', 'React', 'Node']  

  // PERN Stack
  // LAMP 
  // MERN 

  // 1 Using the above countries array, create the following new array.

  let countriesCaps = []

  for(let i = 0; i < countries.length; i++){
     
    countriesCaps.push( countries[i].toUpperCase() )

  }

  
  //console.log(countriesCaps)

  // array methods - map, forEach, filter, reduce, each, every, find, findIndex

  function capitalize(el){
   return el.toUpperCase() 
  }

let capitaledCountries = countries.map(capitalize);

//console.log(capitaledCountries)

//  2 Using the above countries array, create an array for countries length'.

// function getLength(el){
//     return el.length
//    }
 
 let countryLength = countries.map( e => e.length);


// console.log(countryLength)


// 3 Use the countries array to create the following array of arrays:

function createArrayOfElement(el){

    return [el, el.slice(0,3), el.length];
}

let countryArries = countries.map(createArrayOfElement)


//console.log(countryArries);



// 4 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.


let countryWithLand = [];


for(let el of countries){

   if(el.includes('land')){
       countryWithLand.push(el)
   }
}


if(countryWithLand.length == 0){
   // console.log("All these countries are without land.");
} else {

    //console.log(countryWithLand);
}


// 5 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.


let countryWithai = [];


for(let el of countries){

   if(el.endsWith('ia')){
    countryWithai.push(el)
   }
}


if(countryWithai.length == 0){
   // console.log("All these countries are without ai.");
} else {

    //console.log(countryWithai);
}


//Using the above countries array, find the country containing the biggest number of characters.

let longest = '';
let length = 0;

for(let el of countries){

    if(el.length > length){
        longest = el;
        length = el.length;
    }

}

//console.log(longest)

// 7 Using the above countries array, find the country containing only 5 characters.


function filter5chars(el){

    return el.length == 5;
}


const only5Chars = countries.filter(filter5chars);

//console.log(only5Chars)


// Find the longest word in the webTechs array

let longestWebTech = '';
let lengthWebTech = 0;

for(let el of webTechs){

    if(el.length > lengthWebTech){
        longestWebTech = el;
        lengthWebTech = el.length;
    }

}

//console.log(longestWebTech)


// 10 Use the webTechs array to create the following array of arrays:

// same as solution 3

// 11 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let acronym = '';

for(let e of mernStack){

    acronym += e[0].toUpperCase();
}


//console.log(acronym)


// 12 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.


let reversedFruites = [];
let fruits = ['banana', 'orange', 'mango', 'lemon'];

for(let i = fruits.length - 1; i >= 0; i--){

    reversedFruites.push(fruits[i])
}


//console.log(reversedFruites);


// 13 Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]


  for(let el of fullStack){

    for(let i of el){
       console.log(i)
    }
    
  }
