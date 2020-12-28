# DOM

## What is the DOM?

- The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage
- At the most basic level, a website consists of an HTML and CSS document
- The browser creates a representation of the document known as Document Object Model (DOM)
- This document enables Javascript to access and manipulate the elements and styles of a website

In DOM, HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript.

- The model is built in a tree structure of objects and defines
  - HTML elements as objects
  - Properties and events of the HTML elements
  - Methods to access the HTML elements

![alt text](\img\dom.gif "Logo Title Text 1")

> Note: According to (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

Note: Everthing in DOM is refered as NODE

---

## DOM `document` object

- The DOM Document is the owner of all other objects in your webpage
- That means if you want to access any object on your webpage you always have to start with the document.
- All operations on the DOM start with the document object. That’s the main “entry point” to DOM.

## Accessing DOM Nodes

- The topmost tree nodes are available directly as `document` object properties
  - `<html>` = `document.documentElement`
  - `<body>` = `document.body`
  - `<head>` = `document.head`

---

### Getting Element

We can access elements using JavaScript. To access or get elements we use different methods. The code below has four _h1_ elements. Let us see the different methods to access the _h1_ elements.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class="title" id="first-title">First Title</h1>
    <h1 class="title" id="second-title">Second Title</h1>
    <h1 class="title" id="third-title">Third Title</h1>
    <h1></h1>
  </body>
</html>
```

#### Getting elements by tag name

- **_getElementsByTagName()_**: takes a take name as a string parameter and this method returns an HTMLCollection object.

- An HTMLCollection is an array like object of HTML elements.
- The `length` property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items
- An HTMLCollection does not support all array methods therefore we should use regular `for` loop instead of `forEach`.

```js
// syntax
document.getElementsByTagName("tagname");
```

```js
const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}
```

#### Getting elements by class name

**_getElementsByClassName()_** method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

```js
//syntax
document.getElementsByClassName("classname");
```

```js
const allTitles = document.getElementsByClassName("title");

console.log(allTitles); //HTMCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}
```

#### Getting an element by id

**_getElementsById()_** targets a single HTML element. We pass the id without # as an argument.

```js
//syntax
document.getElementById("id");
```

```js
let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>
```

#### Getting elements by using querySelector methods

The _document.querySelector_ method can select an HTML or HTML elements by tag name, by id or by class name.

**_querySelector_**: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

```js
let firstTitle = document.querySelector("h1"); // select the first available h2 element
let firstTitle = document.querySelector("#first-title"); // select id with first-title
let firstTitle = document.querySelector(".title"); // select the first available h2 element with class title
```

**_querySelectorAll_**: can be used to select html element by its tag name or class. It return a nodeList which is an array like object which support array methods. We can use **_for loop_** or **_forEach_** to loop through each nodeList elements.

```js
const allTitles = document.querySelectorAll("h1");

console.log(allTitles.length); // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

allTitles.forEach((title) => console.log(title));
const allTitles = document.querySelectorAll(".title"); // the same goes for selecting using class
```

### Adding attribute

An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

```js
const titles = document.querySelectorAll("h1");
titles[3].class = "title";
titles[3].id = "fourth-title";
```

#### Adding attribute using setAttribute

The **_setAttribute()_** method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute.
Let's add class and id attribute for the fourth title.

```js
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");
```

#### Adding attribute without setAttribute

We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

```js
//another way to setting an attribute
titles[3].className = "title";
titles[3].id = "fourth-title";
```

#### Adding class using classList

The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add("title", "header-title");
```

#### Removing class using remove

Similar to adding we can also remove class from an element. We can remove a specific class from an element.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove("title", "header-title");
```

### Adding Text to HTML element

An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property _textContent_ or \*innerHTML.

#### Adding Text content using textContent

The _textContent_ property is used to add text to an HTML element.

```js
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

#### Adding Text Content using innHTML

Most people get confused between _textContent_ and _innerHTML_. _textContent_ is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

##### Text Content

We assign _textContent_ HTML object property to a text

```js
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

##### Inner HTML

We use innerHTML property when we like to replace or a completely new children content to a parent element.
It value we assign is going to be a string of HTML elements.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>challenges in 2020</h1>
      <h2>JavaScript Challenge</h2>
      <ul></ul>
    </div>
    <script>
      const lists = `
            <li>Python Challenge Done</li>
            <li>JavaScript Challenge Ongoing</li>
            <li>React Challenge Coming</li>
            <li>FullStack Challenge Coming</li>
            <li>Data Analysis Challenge Coming</li>
            <li>React Native Challenge Coming</li>
            <li>Machine Learning Challenge Coming</li>`;
      const ul = document.querySelector("ul");
      ul.innerHTML = lists;
    </script>
  </body>
</html>
```

The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild() I would recommend the following method.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>RESI - JavaScript challenges in 2020</h1>
      <h2>JavaScript Challenge</h2>
      <ul>
        <li>Python Challenge Done</li>
        <li>JavaScript Challenge Ongoing</li>
        <li>React Challenge Coming</li>
        <li>FullStack Challenge Coming</li>
        <li>DataAnalysis Challenge Coming</li>
        <li>ReactNative Challenge Coming</li>
        <li>MachineLearning Challenge Coming</li>
      </ul>
    </div>
    <script>
      const ul = document.querySelector("ul");
      ul.innerHTML = "";
    </script>
  </body>
</html>
```

### Adding style

#### Adding Style Color

Let us add some style to our titles. If the element has even index we give it green color else red.

```js
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});
```

#### Adding Style Background Color

Let us add some style to our titles. If the element has even index we give it green color else red.

```js
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});
```

#### Adding Style Font Size

Let us add some style to our titles. If the element has even index we give it 20px else 30px

```js
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});
```

As you have notice, the properties of css when we use it in JavaScript is going to be a camelCase. The following CSS properties change from background-color to backgroundColor, font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.

---
