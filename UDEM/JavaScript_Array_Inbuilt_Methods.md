# JavaScript Array Inbuilt Methods - Complete Notes

> A beginner-friendly guide to the most commonly used JavaScript array methods.

---

## Creating an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

## 1. `push()`

Adds one or more elements to the **end** of an array and returns the new length.

```javascript
let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // Output: [1, 2, 3, 4]
```

---

## 2. `pop()`

Removes the **last** element from an array and returns it.

```javascript
let arr = [1, 2, 3];
let x = arr.pop();

console.log(arr); // Output: [1, 2]
console.log(x);   // Output: 3
```

---

## 3. `unshift()`

Adds one or more elements to the **beginning** of an array.

```javascript
let arr = [2, 3];
arr.unshift(1);

console.log(arr); // Output: [1, 2, 3]
```

---

## 4. `shift()`

Removes the **first** element from an array and returns it.

```javascript
let arr = [1, 2, 3];
arr.shift();

console.log(arr); // Output: [2, 3]
```

---

## 5. `filter()`

Returns a **new array** containing only elements that satisfy a condition.

```javascript
let arr = [1, "Hello", 2, true, 3];
let nums = arr.filter(item => typeof item === "number");

console.log(nums); // Output: [1, 2, 3]
```

---

## 6. `map()`

Creates a **new array** by transforming every element.

```javascript
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);

console.log(doubled); // Output: [2, 4, 6]
```

---

## 7. `forEach()`

Runs a function for every element. **Does not return a new array.**

```javascript
let arr = [1, 2, 3];

arr.forEach(item => {
    console.log(item);
});
// Output:
// 1
// 2
// 3
```

---

## 8. `find()`

Returns the **first** element matching a condition.

```javascript
let arr = [10, 20, 30];

console.log(arr.find(x => x > 15)); // Output: 20
```

---

## 9. `findIndex()`

Returns the **index** of the first matching element.

```javascript
let arr = [10, 20, 30];

console.log(arr.findIndex(x => x === 20)); // Output: 1
```

---

## 10. `includes()`

Checks whether an element exists in the array and returns a boolean.

```javascript
let arr = ["Apple", "Banana"];

console.log(arr.includes("Apple")); // Output: true
```

---

## 11. `indexOf()`

Returns the **first index** of an element in the array.

```javascript
let arr = ["A", "B", "C"];

console.log(arr.indexOf("B")); // Output: 1
```

---

## 12. `lastIndexOf()`

Returns the **last index** of an element in the array.

```javascript
let arr = [1, 2, 3, 2];

console.log(arr.lastIndexOf(2)); // Output: 3
```

---

## 13. `slice()`

Returns a portion of an array (start to end index) without changing the original array.

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4)); // Output: [2, 3, 4]
```

---

## 14. `splice()`

Adds, removes, or replaces elements in the original array (mutates the array).

```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2);

console.log(arr); // Output: [1, 4]
```

---

## 15. `concat()`

Joins two or more arrays and returns a new array.

```javascript
let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b)); // Output: [1, 2, 3, 4]
```

---

## 16. `reverse()`

Reverses the order of the elements in an array (mutates the array).

```javascript
let arr = [1, 2, 3];
arr.reverse();

console.log(arr); // Output: [3, 2, 1]
```

---

## 17. `sort()`

Sorts the elements of an array in place.

```javascript
let arr = [4, 2, 7, 1];
arr.sort((a, b) => a - b);

console.log(arr); // Output: [1, 2, 4, 7]
```

---

## 18. `reduce()`

Reduces an array to a single value by applying an accumulator function.

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((total, item) => total + item, 0);

console.log(sum); // Output: 10
```

---

## 19. `some()`

Returns `true` if **at least one** element in the array satisfies a condition.

```javascript
let arr = [1, 2, 3];

console.log(arr.some(x => x > 2)); // Output: true
```

---

## 20. `every()`

Returns `true` if **all** elements in the array satisfy a condition.

```javascript
let arr = [2, 4, 6];

console.log(arr.every(x => x % 2 === 0)); // Output: true
```

---

## 21. `join()`

Converts an array into a string, separated by the specified separator.

```javascript
let arr = ["Java", "Script"];

console.log(arr.join(" ")); // Output: "Java Script"
```

---

## 22. `split()`

> [!NOTE]
> `split()` is a **String** method, not an Array method. It splits a string into an array of substrings.

```javascript
let str = "Java Script";

console.log(str.split(" ")); // Output: ["Java", "Script"]
```

---

## 23. `flat()`

Flattens nested arrays up to the specified depth.

```javascript
let arr = [1, [2, 3], [4, [5]]];

console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5]
```

---

## 24. `Array.isArray()`

Static method that checks whether a value is an array.

```javascript
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("Hello"));   // Output: false
```

---

## 25. Remove Duplicates using `Set`

```javascript
let arr = [1, 2, 2, 3, 3];
let unique = [...new Set(arr)];

console.log(unique); // Output: [1, 2, 3]
```

---

## Summary Table

| Method | Purpose |
| :--- | :--- |
| `push()` | Add at end |
| `pop()` | Remove last |
| `unshift()` | Add at beginning |
| `shift()` | Remove first |
| `filter()` | Keep matching elements |
| `map()` | Transform elements |
| `forEach()` | Loop through array |
| `find()` | First matching element |
| `findIndex()` | Index of first match |
| `includes()` | Check existence |
| `indexOf()` | First index |
| `lastIndexOf()` | Last index |
| `slice()` | Copy part of array |
| `splice()` | Add/Remove elements |
| `concat()` | Merge arrays |
| `reverse()` | Reverse array |
| `sort()` | Sort elements |
| `reduce()` | Single value |
| `some()` | Any match |
| `every()` | All match |
| `join()` | Array → String |
| `flat()` | Flatten nested arrays |
| `Array.isArray()` | Check if array |
| `Set` | Remove duplicates |
