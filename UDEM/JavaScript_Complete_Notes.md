# JavaScript Complete Notes

---

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to make web pages interactive.

```javascript
console.log("Hello, World!");
```

---

## 2. Variables

### `var`
- Function scoped
- Can be redeclared
- Hoisted

```javascript
var x = 10;
```

### `let`
- Block scoped
- Cannot be redeclared in the same scope

```javascript
let age = 20;
```

### `const`
- Block scoped
- Cannot be reassigned

```javascript
const PI = 3.14159;
```

### Comparison Table

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function | Block | Block |
| **Redeclare** | ✅ | ❌ | ❌ |
| **Reassign** | ✅ | ✅ | ❌ |

---

## 3. Data Types

### Primitive Types
- `Number`
- `BigInt`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`

```javascript
let num = 10;
let big = 12345678901234567890n;
let name = "Aayush";
let isStudent = true;
let x;
let y = null;
let id = Symbol("id");
```

### Non-Primitive Types (Reference Types)

#### Object
```javascript
let student = {
  name: "Aayush",
  age: 20
};
```

#### Array
```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

#### Function
```javascript
function greet() {
  console.log("Hello");
}
```

---

## 4. Output Methods

```javascript
console.log("Hello");
console.table([{ name: "Aayush", age: 20 }]);
console.error("Error");
console.warn("Warning");
```

---

## 5. Input Methods

### Browser Environment
```javascript
let name = prompt("Enter your name");
alert(name);
```

### Node.js Environment
```javascript
// Using the readline module
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your name: ', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
```

---

## 6. Operators

### Arithmetic
`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

### Assignment
`=`, `+=`, `-=`, `*=`, `/=`, `%=`

### Comparison
`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

```javascript
5 == "5";   // true  (loose equality - type conversion happens)
5 === "5";  // false (strict equality - type and value must match)
```

### Logical
`&&` (AND), `||` (OR), `!` (NOT)

### Ternary
```javascript
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 7. Conditional Statements

### `if`
```javascript
if (age >= 18) {
  console.log("Adult");
}
```

### `if...else`
```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### `switch`
```javascript
switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Invalid");
}
```

---

## 8. Loops

### `for`
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while`
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### `do...while`
```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### `for...of`
Used to iterate over iterable objects (like arrays).
```javascript
for (const fruit of fruits) {
  console.log(fruit);
}
```

### `for...in`
Used to iterate over the keys/properties of an object.
```javascript
for (const key in student) {
  console.log(key, student[key]);
}
```

### `forEach()`
```javascript
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

---

## 9. Arrays (Detailed)

```javascript
let arr = [10, 20, 30];
```

- **Access**: `arr[0]`
- **Update**: `arr[1] = 50;`

### Common Methods
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `slice()`
- `splice()`
- `map()`
- `filter()`
- `reduce()`
- `find()`
- `includes()`
- `sort()`
- `reverse()`

#### Example
```javascript
let nums = [1, 2, 3];
nums.push(4);
nums.pop();
```

---

## 10. Objects (Detailed)

```javascript
let student = {
  name: "Aayush",
  age: 20,
  greet() {
    console.log("Hello");
  }
};
```

- **Access**: `student.name` or `student["age"]`

### Built-in Object Methods
```javascript
Object.keys(student);   // ["name", "age", "greet"]
Object.values(student); // ["Aayush", 20, f]
Object.entries(student); // [["name", "Aayush"], ["age", 20], ...]
```

---

## 11. Functions

### Function Declaration
```javascript
function add(a, b) {
  return a + b;
}
```

### Function Expression
```javascript
const add = function(a, b) {
  return a + b;
};
```

### Arrow Function
```javascript
const add = (a, b) => a + b;
```

---

## 12. Parameter vs Argument

```javascript
function greet(name) { // 'name' is the parameter
  console.log(name);
}

greet("Aayush"); // '"Aayush"' is the argument
```

- **Parameter**: The variable list in the function definition.
- **Argument**: The actual value passed to the function when calling it.

---

## 13. Higher-Order Functions

A function that takes another function as an argument, returns a function, or both.

```javascript
function greet(callback) {
  callback();
}

greet(() => {
  console.log("Hello");
});
```

---

## 14. First-Class Functions

In JavaScript, functions are first-class citizens. This means they can be stored in variables, passed as arguments, and returned from other functions.

```javascript
const sayHi = function() {
  console.log("Hi");
};
```

---

## 15. Nested Functions

```javascript
function outer(name) {
  function inner() {
    console.log(name);
  }
  inner();
}

outer("Aayush");
```

---

## 16. Scope

- **Global Scope**: Accessible everywhere.
- **Function Scope**: Accessible only within the function.
- **Block Scope**: Accessible only within the block (for `let` and `const`).
- **Lexical Scope**: Functions can access variables declared in their parent scopes.

### Lexical Scope Example
```javascript
function outer(name) {
  function inner() {
    console.log(name); // Accesses 'name' from the outer function's scope
  }
  inner();
}
```

---

## 17. Closures

A closure is created when an inner function retains access to the variables of its lexical scope, even after the outer function has finished executing.

```javascript
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c = counter();
c(); // Output: 1
c(); // Output: 2
```

---

## 18. Execution Context

Every execution context runs in two phases:

1. **Memory Creation Phase**:
   - Variables are allocated memory and initialized to `undefined`.
   - Functions are stored entirely.
2. **Execution Phase**:
   - Code runs line by line, executing operations and assigning values.

### Example
```javascript
var x = 2;

function square(n) {
  return n * n;
}

var result = square(x);
```

#### Call Stack Walkthrough
```text
[ square() ]  --> Executed and popped
[  Global  ]  --> Base execution context
```

---

## 19. Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before execution.

```javascript
console.log(a); // Output: undefined
var a = 10;
```

> [!NOTE]
> `let` and `const` declarations are also hoisted but remain in the **Temporal Dead Zone (TDZ)** until they are initialized, throwing a `ReferenceError` if accessed early.

---

## 20. Primitive vs Reference Types

| Primitive Types | Reference Types (Non-Primitive) |
| :--- | :--- |
| Stored by value (on the stack) | Stored by reference (on the heap) |
| Immutable | Mutable |

---

## 21. Spread Operator (`...`)

Unpacks elements of an array or properties of an object.

```javascript
const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]
```

---

## 22. Rest Operator (`...`)

Collects multiple elements/arguments into a single array.

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

## 23. Common Interview Questions

1. What is the difference between `==` and `===`?
2. What are the differences between `var`, `let`, and `const`?
3. What is hoisting?
4. What is a closure?
5. What is lexical scope?
6. What is execution context?
7. What is the difference between a parameter and an argument?
8. Arrow function vs normal function.
9. What is a higher-order function?
10. Differentiate between `for...of`, `for...in`, and `forEach`.
