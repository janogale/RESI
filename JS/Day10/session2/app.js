// let skills = [
//   { tech: "HTML", level: 10 },
//   { tech: "CSS", level: 9 },
//   { tech: "JS", level: 8 },
//   { tech: "React", level: 9 },
//   { tech: "Redux", level: 10 },
//   { tech: "Node", level: 8 },
//   { tech: "MongoDB", level: 8 },
// ];

let user = [
  {
    user: "mukhtar",
    pass: 123,
  },
  {
    user: "jama",
    pass: 123,
  },
];

// JSON.parse

let skillsFromStorage = JSON.parse(localStorage.getItem("skills")) || [];

let ul = document.querySelector("#list");

function displayData() {
  if (skillsFromStorage.length == 0) {
    ul.insertAdjacentHTML(
      "afterbegin",
      ` <h2>There is no data to display</h2>`
    );

    // stop there
    return;
  }

  for (let skill of skillsFromStorage) {
    // destructure object
    let { tech, level } = skill;

    // display data on the page.
    ul.insertAdjacentHTML(
      "beforeend",
      `
        
        <li><strong>${tech}</strong> <span>${level}</span></li>
        `
    );
  }
}

displayData();

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // get the two input elements values
  let tech = this[0].value;
  let level = this[1].value;

  // check if data is provided.

  if (this[0].value == "" || this[1].value == "") {
    document.querySelector("#alert").textContent = "please provide data";

    return;
  }

  document.querySelector("#alert").textContent = "";

  skillsFromStorage.push({ tech: tech, level: level });
  ul.innerHTML = "";

  // display data on the page
  displayData();

  // clear inputs after saving data.
  this[0].value = "";
  this[1].value = "";

  //   save data to localStorage.
  localStorage.setItem("skills", JSON.stringify(skillsFromStorage));
});
