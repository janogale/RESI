# DOM - Challenges

## Exercise:  1

1. Create an index.html file and put four p elements as above: Get the first paragraph by using **_document.querySelector(tagname)_** and tag name
2. Get get each of the the paragraph using **_document.querySelector('#id')_** and by their id
3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
6. Set id and class attribute for all the paragraphs using different attribute setting methods

### Exercise:  2

1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
1. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
1. Set text content, id and class to each paragraph

### Exercise: 3

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
