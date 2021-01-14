import { getElement, YEAR, firstName } from "/../modules/file1.js";

// from file2
// import { months } from "/../modules/file2.js";

// default import

import MonthsOfYear from "./modules/month.js";

let h1 = getElement("h1");

console.log((h1.textContent = "Modules work"));
console.log(YEAR);

console.log(MonthsOfYear);

console.log(firstName);

let name = "mahamed";
