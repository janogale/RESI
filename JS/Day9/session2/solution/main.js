let section = document.querySelector("#users");

for (let user of users) {
  //   section.innerHTML +=   `
  //   <div class="card">
  //   <h1>${user.name}</h1>
  //   <hr />
  //   <p>Email: <strong>${user.email}</strong></p>
  //   <p>Username: <strong>${user.username}</strong></p>
  //   <h6>Works <strong>${user.company.name}</strong></h6>
  //   <p>${user.company.slogan}</strong></p>
  //   <br />
  //   <address>
  //     phone: ${user.phone} <br />
  //     site: ${user.website} <br />
  //     ${user.address.city} <br />
  //     ${user.address.street}
  //   </address>
  // </div>
  //   `

  // object destructuring

  const {
    name: fullName,
    email,
    username,
    website,
    nationality = "Somali",
    phone,
    company: { name: companyName, slogan },
    address: { city, street },
  } = user;
  // create card.
  section.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
  <h1>${fullName}</h1>
  <hr />
  <p>Email: <strong>${email}</strong></p>
  <p>Username: <strong>${username}</strong></p>
  <p>Nationality: <strong>${nationality}</strong></p>
  <h6>Works <strong>${companyName}</strong></h6>
  <p>${slogan}</strong></p>
  <br />
  <address>
    phone: ${phone} <br />
    site: ${website} <br />
    ${city} <br />
    ${street}
  </address>
</div>
  `
  );
}

/*
Create a div container on HTML document and create 0 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red


*/

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

let div = document.getElementById("numbers");

for (let i = 0; i <= 100; i++) {
  let el = document.createElement("div");
  el.textContent = i;
  el.style.fontSize = "3rem";
  el.style.textAlign = "center";
  el.style.color = "white";
  el.style.margin = "2px";

  if (i % 2 == 0) {
    el.style.background = "green";
  }
  if (i % 2 != 0) {
    el.style.background = "yellow";
  }

  if (isPrime(i)) {
    el.style.background = "red";
    toggleClass(el);
  }

  div.appendChild(el);

  // div.insertAdjacentHTML('beforeend', `<div>${i}</div>`)
}

function toggleClass(el) {
  setInterval(function () {
    el.classList.toggle("toggle");
  }, 1000);
}

// get input values

let input = document.querySelector("#input");
let textArea = document.querySelector("#textarea");

// checkbox
let checkBox = document.querySelector('[type="checkbox"]');

console.log(checkBox.checked);

input.addEventListener("input", () => {
  console.log(input.value);
});

textArea.addEventListener("input", () => {
  console.log(textArea.value);
});

console.log(input.value);
