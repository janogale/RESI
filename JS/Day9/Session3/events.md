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

**`keydown`** and **`keyup`** – when a keyboard key is pressed and released.

### Form element events

`submit` – when the visitor submits a `<form>`.
`focus` – when the visitor focuses on an element, e.g. on an `<input>`.

### Document events

**`DOMContentLoaded`** – when the HTML is loaded and processed, DOM is fully built.

## Event handlers

- Each event has an event handler `function`, that runs when the event fires.
- To react on events we can assign a handler – a function that runs in case of an event.

> Note: Event handlers are sometimes called event listeners

### There are several ways to assign a handler

1. HTML-attribute
1. DOM property
1. addEventListener method
