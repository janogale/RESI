console.log(countries);
console.log(webTechs);

let text =
  "I love coding and challenges. I Learn HTML, CSS, JS, React, Python.";

// remove punctuation
text = text.replace(/,/g, "");

// change string to Array

let textArray = text.split(" ");

// print length of new Array.
textArray.length;
console.log(textArray.length);

// add items to array

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

// remove "honey" from  array

shoppingCart.splice(4, 1);

// replace tea with Green Tea

//shoppingCart[3] = "Green Tea"
//shoppingCart.replace("Tea", "Green Tea")
shoppingCart.splice(3, 1, "Green Tea");

if (!shoppingCart.includes("Eggs")) {
  //console.log("Eggs not in the List")
  shoppingCart.push("Eggs");
}
console.log(shoppingCart);

// check if ethiopia exists in the array

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocessor");
} else {
  webTechs.push("Sass");
}

// join arrays
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// sort array and find min and max age

const ages = [19, 22, 17, 15, 24, 20, 25, 26, 14, 17, 24, 25, 24];

ages.sort(function (a, b) {
  return a - b;
});

let minAge = ages[0]
let maxAge = ages[ages.length -1]

// let minAge = ages.shift();
// let maxAge = ages.pop();

// max, min   Math.min  Math.max

// spread Operator ...


console.log(Math.min(ages));
console.log(Math.max(ages));

console.log(ages);


let matured = ages.filter(age => age > 18 );

console.log(matured);


let totalAge = 0;

ages.forEach( function(age){

    totalAge += age;
})

console.log("Average", Math.round(totalAge / ages.length))