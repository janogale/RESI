let title = document.querySelector("h1");

function makeGreen() {
  title.style.color = "green";
  title.style.background = "#ccc";
}

function makeBrown() {
  title.style.color = "brown";
  title.style.background = "#ccc";
}

title.addEventListener("mousemove", makeGreen);

title.addEventListener("mouseleave", makeBrown);

title.addEventListener("mousedown", function makeBig() {
  title.style.fontSize = "50px";
  title.style.background = "#ccc";
});

title.addEventListener("mouseup", function () {
  title.style.fontSize = "";
  title.style.background = "#ccc";
});

// Web Storage

// setting localStorage

localStorage.setItem("user", "Mukhtar Mahamed");
localStorage.setItem("role", "Administrator");
localStorage.setItem("status", "Active");

// reading from localStorage
localStorage.getItem("user"); //localStorage.user; localStorage['user']

// Removing item from local Storage.

//localStorage.removeItem("status");

// display localStorage data on the page
document.getElementById("user").textContent = localStorage.getItem("user");
document.getElementById("role").textContent = localStorage.getItem("role");

document.getElementById("status").textContent =
  localStorage.getItem("status") || "Not Available";

console.log(localStorage.length);

// display data from sessionStorage on the page

// document.getElementById("user").textContent = sessionStorage.getItem("user");
// document.getElementById("role").textContent = sessionStorage.getItem("role");

// document.getElementById("status").textContent =
//   sessionStorage.getItem("status") || "Not Available";
