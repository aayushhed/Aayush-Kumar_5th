# React Concepts

## Spread Operator (`...`)

*Unpacking a box*

Copying or expanding an array:

```javascript
// Copying
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

// Expanding
const numbers = [10, 20, 30];
console.log(...numbers);
```

> [!NOTE]
> Refer to `Spread.jsx` for examples of using the spread operator to update properties (like age) in a user object.

---

## Rest Operator (`...`)

*Packing a box*

Destructure and collect all remaining elements:

```javascript
// Collects all arguments into an array
function sum(...numbers) {
    console.log(numbers);
}
sum(10, 20, 30, 40);

// Array destructuring
const arr = [10, 20, 30, 40, 50];
const [first, ...rest] = arr;
console.log(first);
console.log(rest);
```

---

## Hooks

Special functions that add extra capabilities to functional components. In layman's terms: they enable components to use React features (like state, DOM access, and performance optimization) without writing class components.

```javascript
import { hook_name } from "react";
```

### Common Hooks

#### `useState`
```javascript
const [state, setState] = useState(initialValue);
```
> [!NOTE]
> Refer to `useState.jsx` for implementation examples.

#### `useReducer`
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
> [!NOTE]
> Refer to `useReducer.jsx` for implementation examples.

Use `useReducer` instead of `useState` when:
- The state logic is complex.
- There are multiple state transitions/actions (e.g., add, remove, reset).
- Multiple state values depend on each other.

### The Rules of Hooks
1. **Call Hooks at the top level**: Do not call Hooks inside loops, conditions, or nested functions.
2. **Call Hooks only from React functions**: Call them from React functional components or custom Hooks.
