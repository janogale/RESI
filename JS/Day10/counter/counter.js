// get elements

let counterElement = document.getElementById("counter");
// buttons
let btnIncrement = document.getElementById("increment");
let btnDecrement = document.getElementById("decrement");
let btnReset = document.getElementById("reset");

// read counter value from localStorage
let counterFromStorage = localStorage.getItem("counter");

if (counterFromStorage != null) {
  counterElement.textContent = counterFromStorage;
} else {
  counterElement.textContent = 0;
}

let counterValue = Number(localStorage.getItem("counter")) || 0;
// increment on click

btnIncrement.addEventListener("click", increment);

// increment function

function increment() {
  //counterElement.textContent = Number(counterElement.textContent) + 1;

  counterValue += 1;
  counterElement.textContent = counterValue;

  // store counter value to localStorage
  localStorage.setItem("counter", counterValue);
}

// decrement

btnDecrement.addEventListener("click", function () {
  // stop if counterValue is 0

  if (counterValue == 0) return;

  counterValue -= 1;
  counterElement.textContent = counterValue;

  // store counter value to localStorage
  localStorage.setItem("counter", counterValue);
});

// reset counterValue

btnReset.addEventListener("click", function () {
  counterValue = 0;
  counterElement.textContent = 0;

  // reset counter value in localStorage
  localStorage.setItem("counter", 0);
});
