let lists = document.querySelectorAll("ul li");
let colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

// for(let i =0; i < lists.length; i++){
  
//   lists[i].style.color = colors[i]
// }
 

// lists.forEach((li, index) => {
//   li.style.color = colors[index]
// } )


/* exercise 4
Write a function that takes a string as argument
The string contains selectors that you can use to access elements on the current page
Find the first element that matches the selectors
Return the text content of the element
name the function as getElementText
*/

function getElement(param){

    if(typeof param !== 'string') return 'please pass string'

  let element = document.querySelector(param);

  if(!element) return null

  return element.textContent;

}


// console.log( getElement('h2') )
// console.log( getElement('a') )

/*
Write a function that counts all the HTML tags of the page.
the function should return the number of tags in the page
*/


//let allElements = document.querySelectorAll('*')

function countAllElement(){
    return document.querySelectorAll('*').length
}


//console.log(countAllElement())

