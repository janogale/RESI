function handler() {
  console.log("event happened");
}

// event handler - dom element property.

let title = document.querySelector("#title");

// DOM Element Property

// title.onclick = function(){

//     title.style.color = 'brown';
// }

// title.onmouseover = function(){

//     title.style.fontSize = '2.5rem';
//     title.style.color = 'red';
// }

// title.onmouseleave = function(){

//     title.style.fontSize = '';
//     title.style.color = '';
// }

// using addEventListener method.

/*
function handleClick() {
  console.log("h1 clicked");
}
// function declared outside method
title.addEventListener("click", handleClick);

// function declared inside method
title.addEventListener("click", function (event) {  
    
    

    console.log(event)


  this.style.color = "green";
  this.style.fontSize = "2rem";
});


title.addEventListener('mouseover', function(){
    this.style.color = 'green';
    this.style.fontSize = '2rem';
})



title.addEventListener('mouseleave', function(){
    this.style.color = '';
    this.style.fontSize = '';
})


*/

// document.body.addEventListener("click", function (event) {
//   console.log(event.type);
//   console.log(event.currentTarget);
//   console.log(event.target);
// });

// prevent default behaviour

let linkTag = document.querySelector("#link");

linkTag.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event.currentTarget);
});

// let usernameInput = document.querySelector("#username");
// let passowrdInput = document.querySelector("#password");

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  let usernameInput = this[0];
  let passwordInput = this[1];

  console.log(usernameInput.value);
  console.log(passwordInput.value);
});



// Event Propogation

// let section = document.querySelector('#section')

// section.addEventListener('click', function(e){

//     e.stopPropagation();

//     console.log(this.nodeName)
// })
// let sectionChilds = document.querySelectorAll('#section *')


// sectionChilds.forEach( elem => {

// elem.addEventListener('click', function(e){

//     if(this.nodeName == 'LI') e.stopPropagation();

//     console.log(this.nodeName)
// })

// });


document.body.addEventListener('click', function(){

    console.log(this.nodeName)
})




let firstLi  = document.querySelector("#f1")
let secondLi  = document.querySelector("#f2")


// firstLi.addEventListener('click', function(){
//      console.log(this)
//     this.classList.toggle('hight')
// })


// secondLi.addEventListener('click', function(){
//     console.log(this)
//    this.classList.toggle('hight')
// })


// event delegation

let list = document.querySelector('#list');


list.addEventListener('click', function(e){

    e.target.classList.toggle('hight')


    // if span is clicked remove the parent li

    if(e.target.nodeName == 'SPAN'){
       e.target.parentElement.remove();
    }


});
