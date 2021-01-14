// todo:

// 0 read data from localStorage
// 1 get input values

// 2: attached submit event to the form
// 3: display form data on the page on form submit
// 4: store form data into localStorage
// 5: delete data upon clicking delete button

// imports

import { getTag, createList } from "./utils/module1.js";

// get input values;

let list = getTag(".content-list");
let fullName = getTag("#fullname");
let score = getTag("#score");
let badge = getTag("#badge");
let form = getTag("form.form");

// read data from localStroge and display on the page
// else display there is no data.

let studentsFromDB = JSON.parse(localStorage.getItem("students")) || [];

// display data

function displayData(data) {
  list.innerHTML = "";

  for (let student of data) {
    list.innerHTML += createList(student);
  }
}

displayData(studentsFromDB);

// submit event

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // display data.

  if (badge.value != "" && score.value != "" && fullName.value != "") {
    let newUser = {
      id: studentsFromDB.length + 1 || 1,
      name: fullName.value,
      score: score.value,
      badge: badge.value,
    };

    // save to localStorage

    studentsFromDB.push(newUser);

    localStorage.setItem("students", JSON.stringify(studentsFromDB));

    // clear input fields
    form.reset();

    // display data
    displayData(studentsFromDB);
  } else {
    console.log("please insert data");
  }
});

// delete item

list.addEventListener("click", deleteItem);

function deleteItem(e) {
  // check if delet button is clicked

  if (e.target.classList.contains("delete")) {
    // remove item data from localStorage.
    // get th id of item to remove
    let id = e.target.parentElement.firstElementChild.textContent;

    let filteredData = studentsFromDB.filter((user) => user.id != id);

    // save filtered data to localStorage

    localStorage.setItem("students", JSON.stringify(filteredData));

    // remove parent li from the page.
    e.target.parentElement.remove();

    // display new data

    displayData(filteredData);
  }
}
