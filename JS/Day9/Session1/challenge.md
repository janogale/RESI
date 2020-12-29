# DOM - Challenges

## Exercise:  1

1. Create an index.html file and put four p elements with some text: Get the first paragraph by using **_document.querySelector(tagname)_**
2. Get get each of the the paragraph using **_document.querySelector('#id')_** and by their id
3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,**_I am committed to Master JavaScript_**
6. set the color of paragraph fourth to green
7. Set id and class attribute for all the paragraphs using different attribute setting methods
8. change the background color of body to `#663399` color

### Exercise:  2

1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
1. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
1. Set text content, id and class to each paragraph


### Exercise: 3

- change the colors of `li` tags as indicated.
- use the array colors to change the color of `li` tags

```js
let colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Change Colors!</title>
  </head>
  <body>
    <ul id="list">
      <li>This should be red</li>
      <li>This should be orange</li>
      <li>This should be yellow</li>
      <li>This should be green</li>
      <li>This should be blue</li>
      <li>This should be indigo</li>
      <li>This should be violet</li>
    </ul>
    <script src="js/app.js"></script>
  </body>
</html>
```

### Exercise: 4
1.
    - Write a function that takes a string as argument
    - The string contains selectors that you can use to access elements on the current page
    - Find the first element that matches the selectors
    - Return the text content of the element
    - name the function as getElementText
    
example
```jsx
// if page contains h1 tag with the following text
<h1 id="title"> hello RESI Students</h1>

// the function should return the text "Hello RESI Students"
getElementText('#title')   

```

2.  - Write a function that counts all the HTML tags of the page. 
    - the function should return the number of tags in the page
    
    ---
    
    
> Note: Please comment your code so that it can be readable.

---
    
    
💪💪 YOU CAN DO IT. 💪💪

👨‍💻🚀 Happy Coding 🚀👨‍💻
