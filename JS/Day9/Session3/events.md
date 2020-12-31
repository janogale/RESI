# DOM - Events

- An event is a signal that something has happened
- All DOM nodes generate such signals (but events are not limited to DOM)
- DOM allows you to respond to Events

## There are many different types of events that can occur

### Mouse events

- **`click`** – when the mouse clicks on an element (touchscreen devices generate it on a tap)
- **`contextmenu`** – when the mouse right-clicks on an element.
- **`mouseover`** / mouseout – when the mouse cursor comes over / leaves an element.
- **`mousedown`** / mouseup – when the mouse button is pressed / released over an element.
- **`mousemove`** – when the mouse is moved.

### Keyboard events

- **`keydown`** and **`keyup`** – when a keyboard key is pressed and released.

### Form element events

- `submit` – when the visitor submits a `<form>`.
- `focus` – when the visitor focuses on an element, e.g. on an `<input>`.

### Document events

- **`DOMContentLoaded`** – when the HTML is loaded and processed, DOM is fully built.

## Event handlers

- An event handler is a JavaScript function that runs when an event fires
- To react on events we can assign a handler – a function that runs in case of an event.

> Note: Event handlers are sometimes called event listeners

### There are several ways to assign a handler

1. HTML-attribute
1. DOM property
1. addEventListener method

#### HTML Attribute - Inline event handlers — **don't use these**

- To assign events to HTML elements you can use event attributes.
- all HTML Elements have event attributes
- Assign an onclick event to a button element

```js
<button onclick="displayDate()">Try it</button>
```

#### Assign Events Using the HTML DOM

- The HTML DOM allows you to assign events to HTML elements using JavaScript
- We can assign a handler using a DOM property `on<event>`

```js
let btn = document.getElementById("myBtn");

// attaching events.
btn.onclick = function () {
  alert("Hello Students");
};
```

#### Note: we can’t assign multiple handlers to one event using forementioned ways to assign handlers

### addEventListener Method

- The `addEventListener()` method attaches an event handler to the specified element.
- The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers
- You can add many event handlers to one element.
- When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

```js
element.addEventListener(event, handler, [options]);
```

### **`this`** keyword in events

- The value of this inside a handler is the element. The one which has the handler on it.

```js
<button onclick="alert(this.innerHTML)">Click me</button>
```

### Event Objects

- When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
- The Event object consists of properties and methods that all events can access
- Event Object tells more about what has happened and event details

### useful properties and methods of Event Object

- `currentTarget` Element that owns the event. That’s exactly the same as `this`
- `preventDefault()` Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
- `target` Returns the element that triggered the event - where it actually happened.
- `type` Returns the name of the event
- `stopPropagation()` Prevents further propagation of an event during event flow

### Event propagation - Bubbling and capturing

- Event propagation is a way to describe the “stack” of events that are fired in a web browser

### Bubbling

- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
- The movement of events “up” from the most-nested element ( a) out to the least-nested ( document) is referred to as “bubbling.”

- The most deeply nested element that caused the event is called a target element, accessible as `event.target`.

#### stop bubbling

- A bubbling event goes from the target element straight up.
- to stop bubbling we use The method `stopPropagation()`.
- bubbling is the default event propagation behaviour

### Capturing

- Capturing phase – the event goes down to the element.

- to enable capturing pass third argument to `addEventListener` method

```js
elem.addEventListener(event, handler, { capture: true });
```

### removing event handler

- To remove the handler, `removeEventListener` needs the same phase

## = Event delegation

- Capturing and bubbling allow us to implement one of most powerful event handling patterns called **event delegation**

- The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

- In the handler we get event.target to see where the event actually happened and handle it.

let us see in action.
