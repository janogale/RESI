# DOM SESSION 2

## The DOM Nodes Types

- All items in the DOM are defined as nodes.
- There are many types of nodes, but there are three main ones that we work with most often:

  - Element nodes   - __all html tags__
  - Text nodes      - __text in your page__
  - Comment nodes   - __comments__

## Identifying Node Type

- Every node has a `nodeType` and `nodeName` property, which can tell the type of the node and node name.

| **Node Type**      | **Value** |  **Example** |
|----------|:-------:|-----:|--------------:|
| ELEMENT_NODE       |    1 | The `<body>` element |
| TEXT_NODE          |    3 | `"hello"` |
| COMMENT_NODE       |    8 | `<!-- an HTML comment -->` |

---

## Creating and Modifing HTML Elements

DOM modification is the key to creating “live” pages.

### Creating an element

- To create DOM nodes, there are two methods:

`document.createElement(tag)`

- Creates a new element node with the given tag:

```js
let div = document.createElement('div');
```

***`document.createTextNode(text)`***

- Creates a new text node with the given text:

```js
 let textNode = document.createTextNode('Here I am');
 ```

Most of the time we need to create element nodes


### Create alert message

- create following Message programmaticaly  

```html
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert">
  <strong>New Message!</strong> You Have 3 unread Messages in your inbox.
</div>

```
#### Creating the message div takes 3 steps:

1. Create `<div>` element
    - `let div = document.createElement('div');`

2. Set its class to "alert"
    - `div.className = "alert";`

3. Fill it with the content
    - `div.innerHTML = "<strong>New Message!</strong> You Have 3 unread Messages in your inbox.";`

We’ve created the element. But as of now it’s only in a variable named div, not in the page yet. So we can’t see it.

## Insertion methods

- To make the div show up, we need to insert it somewhere into document. 
- For instance, into `<body>` element, referenced by `document.body`.

- There’s a special method `append` for that: document.body.append(div).

Here’s the full code:

```html
 <style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>New Message!</strong> You Have 3 unread Messages in your inbox.";

  document.body.append(div);
</script>

```

## Here are more insertion methods, they specify different places where to insert:

- `node.append(...nodes or strings)` – append nodes or strings at the end of node,
- `node.prepend(...nodes or strings)` – insert nodes or strings at the beginning of node,
- `node.before(...nodes or strings)` –- insert nodes or strings before node,
- `node.after(...nodes or strings)` –- insert nodes or strings after node,

### Let’s see them in action.

Here’s an example of using these methods to add items to a list and the text before/after it:

```html
<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  ol.before('before'); // insert string "before" before <ol>
  ol.after('after'); // insert string "after" after <ol>

  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // insert liLast at the end of <ol>
</script>
```

Here’s a visual picture of what the methods do:
![alt text](./img/append.png "append me")

Node: these methods can insert multiple nodes and text pieces in a single call.


## insertAdjacentHTML/Text/Element

For that we can use another, pretty versatile method: elem.insertAdjacentHTML(where, html).

The first parameter is a code word, specifying where to insert relative to elem. Must be one of the following:

- `"beforebegin"` – insert html immediately before elem,
- `"afterbegin"` – insert html into elem, at the beginning,
- `"beforeend"` – insert html into elem, at the end,
- `"afterend"` – insert html immediately after elem.

The second parameter is an HTML string, that is inserted “as HTML”.

For instance:

```html
 <div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>
…Would lead to:

 <p>Hello</p>
<div id="div"></div>
<p>Bye</p>
```

Here’s the picture of insertion variants:

![insertAdjacentHTML](./img/insertadjacenthtml.png "append me")
