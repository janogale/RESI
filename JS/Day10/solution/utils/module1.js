export function getTag(selector) {
  let element = document.querySelector(selector);

  return element;
}

export function createList(user) {
  return `    
    <li class="content-item">
    <span>${user.id}</span>
    <span style="background: ${randomColor()}" class="initial">${getInitials(
    user.name
  )}</span><a href="#">${user.name}</a
    ><span>${user.score}</span><span>${
    user.badge
  }</span><span class="delete">X</span>
  </li>
    `;
}

function randomColor() {
  const colors = [
    "red",
    "green",
    "orange",
    "yellow",
    "brown",
    "purple",
    "blue",
    "orange",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function getInitials(fullname) {
  let arr = fullname.toUpperCase().split(" ");

  if (arr.length == 2) {
    return arr[0][0] + arr[1][0];
  }

  return arr[0][0] + arr[0][1];
}

// export  method 2

// export { getTag };
