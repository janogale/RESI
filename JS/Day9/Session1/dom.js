

//console.log(document.head)


// get elements by tag name return array or null

let list = document.getElementsByTagName('li');

let paragraphs = document.getElementsByTagName('p');

//console.log(list)


// for(let li of list){
//    li.style.color = 'red';
// }


// // check if paragraphs are available in your page?

// if(paragraphs.length > 0) {

// }



// get element by class name


let titles = document.getElementsByClassName('title');
let subTitles = document.getElementsByClassName('sub-title');
let doesnotexist = document.getElementsByClassName('doesnotexist');


// change color of sub titles

for(let sub of subTitles){
   sub.style.color = 'blue';
}
// console.log(titles)
// console.log(subTitles)
// console.log(doesnotexist)


// get element by ID


// let pageTitle = document.getElementById('title');
// let pageList = document.getElementById('list');
// let noId = document.getElementById('no-id');






let pageTitle = document.querySelector('#title');
let pageList = document.querySelector('#list');
let noId = document.querySelector('#no-id');

let lastChild = document.querySelector("li:last-child")
let liItems = document.querySelectorAll("li.item")


lastChild.textContent = "Modified by DOM"

// console.log(pageTitle)
// console.log(pageList)
// console.log(lastChild)

//console.log(liItems)

liItems.forEach( li => {
    console.log(li.textContent)
})


//  Attributes.

pageTitle.className += " page-title"

console.log( pageTitle.id )
console.log( pageTitle.className )


// add highlight class to first li.

let firstChild = document.querySelector("li:first-child");
let linkTag = document.querySelector("a");

firstChild.className = 'highlight'
firstChild.id = "li1"
firstChild.title = "First List Item"


// add to title to img and change img.
let img = document.querySelector("a img");
let images = document.querySelectorAll("img");

// for(let image of images){

//     image.src = "./img/dom2.png"
// }
// console.log(img)

img.title = "DOM Structure tree"
console.log(img.src)
img.src = "./img/dom2.png"
console.log(img.src)
img.width = 400

// change destination of link tag
linkTag.href = "https://w3schools.com/"

// setAttribute(attributeName, value)
// getAttribute(attributeName)
// removeAttribute(attributeName)

img.setAttribute("width", "250")

console.log( img.getAttribute('width') )


// remove class attribute
//pageTitle.removeAttribute('class')


// classList, add, remove, contains, toggle


subTitles[0].classList.add('highlight')


subTitles[1].classList.add('highlight')

pageTitle.classList.remove('highlight')
pageTitle.classList.add('underline')

pageTitle.textContent = "Learning JavaScript"

// innerHTML

subTitles[0].innerHTML = "DOM SESSION -  <i>DAY 1</i>"


pageTitle.style.fontSize = "3rem";


for(let subtitle of subTitles){
    subtitle.style.textAlign = "center";
    subtitle.style.padding = "10px"
}



let btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{

    document.body.classList.toggle('dark')
})