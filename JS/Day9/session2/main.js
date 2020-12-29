// dom traversing.

let fTitle = document.querySelector("h1");
let section = document.getElementById("section");

/* all node types  - not used mostly
parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
*/

/* only Element Nodes
/* all node types
parentNode
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
*/

// console.log(section.parentNode.style.background = 'purple')

// console.log(section.parentNode.parentNode)

// // change the color of first li

// section.lastElementChild.firstElementChild.style.color = "#fff"

// console.log(section.previousElementSibling)
// console.log(section.nextElementSibling)

// create element

let h1 = document.createElement("h1");
h1.setAttribute("class", "green");
h1.textContent = "Dynamically created Element";

// let text = document.createTextNode("This is  Dynamicalyy created H1")

// // add text to the new Element.

// // attach text to new element appendChild()

// h1.appendChild(text)

section.appendChild(h1);

// create Alert Message dynamically

let alertMessage = document.createElement("div");
alertMessage.classList.add("alert");
alertMessage.innerHTML =
  "<strong>New Message!</strong> You Have 3 unread Messages in your inbox.";

// add the new element to the page

// timer
setTimeout(function () {
  document.body.removeChild(alertMessage);
}, 5000);

function logMessage() {
  console.log("Hello Student");
}

function toggleAlert() {
  if (document.body.lastElementChild == alertMessage) {
    document.body.removeChild(alertMessage);
    return;
  }

  document.body.appendChild(alertMessage);
}

//setInterval(toggleAlert, 3000);


let newLi = document.createElement('h4')
newLi.textContent = 'New List'

let list = document.querySelector('#list');

//list.append(newLi)
//list.appendChild(newLi)
list.after(newLi)

list.insertAdjacentHTML('beforeend', `

<li>
<ul>
<p> Sub Menu </p>
<li>sub list 1</li>
<li>sub list 2</li>
<li>sub list 3</li>
<li>sub list 3</li>
</ul>
</li>

`)
