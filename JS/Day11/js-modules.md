# Javascript Modules

**What is a Javascript module and why do I care?**

- A Javascript module is nothing more than a collection of Javascript code that can be used (reliably) from other pieces of Javascript.
- A module is just a file. One script is one module. As simple as that.

**Why should I package my code as a module?**

By packaging your code as a module you break your code up into smaller reusable pieces. This is good because:

- Each smaller piece is simpler to understand / debug
- Each smaller piece is simpler to test
- You can re-use common code instead of duplicating it

## using Modules

Modules can load each other and use special directives **`export`** and **`import`** to interchange functionality, call functions of one module from another one:

- **`export`** keyword labels variables and functions that should be accessible from outside the current module.
- **`import`** allows the import of functionality from other modules.
- you need to include `type="module"` attribute in the `<script>` element, to declare this script as a module.

example - `export`

```js
// file1.js

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

example `import`

```js
// main.js
import { sayHi } from "./file1.js";

// execute sayHi
sayHi("Ahmed"); // Hello, Ahmed!
```

> `Modules work only via HTTP protocol, not in local files`

## module features

- Each module has its own scope.
- variables and functions from a module are not seen in other scripts
- Modules are expected to `export` what they want to be accessible from outside and `import` what they need.
- `script` tag should have `type="module"` attribute

---

## how to use Export and Import

Export and import directives have several syntax variants.

### how to `export`

- put `export` keyword before declaration
- We can label any declaration as exported by placing `export` before it, be it a variable, function or a class.
- these type of export is called `named exports`

```js
// export an array
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export a constant
export const YEAR = 2021;

// export a function
export function getElement(selector) {
  return document.querySelector(selector);
}
```

## Export after declarations - export lists

```js
// file1.js

// export an array
let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];

// export a constant
const YEAR = 2021;

// export a function
function getElement(selector) {
  return document.querySelector(selector);
}

// export

export { months, YEAR, getElement };
```

---

## how to `import`

- to import, we put a list of what we want, in curly braces `import {...}`, like this:

```js
// 📁 main.js

import { getElement, months } from "./file1.js";

getElement("#title");

console.log(months);
```

## importing all at once using `*` symbol

- we can import everything as an `object` using `import * as <obj>`

```js
// 📁 main.js

import * as file1 from "./file1.js";

file1.getElement("#title");

console.log(file1.months);
```

> **Note:** `module paths must be full URLs, or relative URLs starting with /, ./, or ../`

<br/>

## import and rename - to avoiding naming conflicts

- rename imported variables, We can use `as` keyword to import as different names.

```js
// 📁 main.js

import { getElement as getTag, months as MonthsOfTheYear } from "./file1.js";

getTag("#title");

console.log(MonthsOfTheYear);
```

### The similar syntax exists for export

```js
// 📁 file1.js

function getElement(selector) {
  return document.querySelector(selector);
}

let name = "Mukhtar Mahamed";

export { getElement as getTag, name as fullName };
```

## Export default

- Modules provide a special `export default` to make the “one thing per module” way look better.
- There may be only one export default per file.
- Default exports are useful to export only a single object, function, variable. During the `import`, we can use any name to import.

default export

```js
// file1.js

// export an array
export default months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
```

### `import` needs curly braces for named exports and doesn’t need them for the default export

- **Named export** -------------------------------- **Default export**
- `export funtion getUser {...}` ------------------- `export default function getUser{...}`
- `import {getUser} from ...` -------------------- `import getUser from ...`

### import default export

when importing defaul export, the name can be anything, but it is good practise to use the actual name of the module.

`import x from "module"`
