// admin, normal user, visitor

let user = prompt("Enter Username?");
//let password = prompt("please enter your password");

/*
if (user == "admin" && password == "321") document.write("<h1> Welcome to Admin Portal</h1>");
else if (user == "normal" && password == "000")
  document.write("<h1> Welcome to Portal for Normal Users</h1>");
else if (user == "visitor")
  document.write("<h1> Welcome Visitor, you can't access admin parts</h1>");
else document.write("<h1>Sorry! wrong credentials</h1>");
*/

// ternary operator
// condition ? value1 : value2;

// var course = 'JS';
// var result = (course == 'JS') ? "Happy Coding" : "Happy Learning";

// console.log(result); // "Happy Coding"

// user == "admin"
//   ? document.write("<h1> Welcome to Admin Portal</h1>")
//   : document.write("<h1>Access Denied</h1>");

user == "admin"
  ? prompt("What is your password?") == "321"
    ? document.write("<h1> Welcome to Admin Portal</h1>")
    : document.write("<h1> Incorrect Password</h1>")
  : document.write("<h1>Access Denied</h1>");
