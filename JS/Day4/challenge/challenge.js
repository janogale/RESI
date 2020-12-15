let age = prompt("Gues my Age?");

// convert data to number
// Number()  + operator
// NaN

// isNaN

// age = Number(age);

// console.log(age);

// if (isNaN(age)) {
//   document.write("<h2>Please Enter digits</h2>");
// } else if (age == 25) {
//   document.write("<h2 style='color:green'>Excellent you are Correct</h2>");
// } else if (age > 25) {
//   document.write("<h2 style='color:red'>Am not that old.</h2>");
// } else if (age < 25 && age > 0) {
//   document.write("<h2 style='color:red'>Am not that Young, try again.</h2>");
// } else {
//   document.write("<h2 style='color:red'>Please Gues my Age.</h2>");
// }

let course = "php";

switch (course) {
  case "Javascript":
    console.log("I am learning JS");
    break;
  case "HTML":
    console.log("I have started learning HTML");
    break;
  case "php":
    console.log("Learning PHP.");
    break;
  default:
    console.log("no case is matched");
}

switch (true) {
  case age == "25":
    document.write("<h2 style='color:green'>Excellent you are Correct</h2>");
    break;

  case age == 26:
  case age == 27:
  case age == 24:
  case age == 23:
    document.write("<h2 style='color:blue'>You are Close to my Age</h2>");
    break;
  case age > 28:
    document.write("<h2 style='color:red'>Am not that old</h2>");
    break;
  case age < 25 && age > 0:
    document.write("<h2 style='color:red'>Am not that Young</h2>");
    break;

  case age == null:
    document.write("<h2 style='color:red'>Please gues my age</h2>");
    break;
  default:
    document.write("<h2 style='color:red'>Please Enter Digits</h2>");
}
