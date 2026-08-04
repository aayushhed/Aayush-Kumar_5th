# JavaScript Array Inbuilt Methods - Complete Notes

> A beginner-friendly guide to the most commonly used JavaScript array
> methods.

------------------------------------------------------------------------

# Creating an Array

``` javascript
let fruits = ["Apple", "Banana", "Mango"];
```

------------------------------------------------------------------------

# 1. push()

## Definition

Adds one or more elements to the **end** of an array and returns the new
length.

``` javascript
let arr = [1, 2, 3];
arr.push(4);

console.log(arr);
```

Output

``` text
[1, 2, 3, 4]
```

------------------------------------------------------------------------

# 2. pop()

## Definition

Removes the **last** element from an array and returns it.

``` javascript
let arr = [1,2,3];
let x = arr.pop();

console.log(arr);
console.log(x);
```

Output

``` text
[1,2]
3
```

------------------------------------------------------------------------

# 3. unshift()

Adds elements to the **beginning** of an array.

``` javascript
let arr=[2,3];
arr.unshift(1);
```

Output

``` text
[1,2,3]
```

------------------------------------------------------------------------

# 4. shift()

Removes the first element.

``` javascript
let arr=[1,2,3];
arr.shift();
```

Output

``` text
[2,3]
```

------------------------------------------------------------------------

# 5. filter()

Returns a **new array** containing only elements that satisfy a
condition.

``` javascript
let arr=[1,"Hello",2,true,3];
let nums=arr.filter(item=>typeof item==="number");
```

Output

``` text
[1,2,3]
```

------------------------------------------------------------------------

# 6. map()

Creates a new array by transforming every element.

``` javascript
let arr=[1,2,3];
let doubled=arr.map(x=>x*2);
```

Output

``` text
[2,4,6]
```

------------------------------------------------------------------------

# 7. forEach()

Runs a function for every element. **Does not return a new array.**

``` javascript
let arr=[1,2,3];

arr.forEach(item=>{
    console.log(item);
});
```

------------------------------------------------------------------------

# 8. find()

Returns the **first** element matching a condition.

``` javascript
let arr=[10,20,30];

console.log(arr.find(x=>x>15));
```

Output

``` text
20
```

------------------------------------------------------------------------

# 9. findIndex()

Returns the index of the first matching element.

``` javascript
let arr=[10,20,30];

console.log(arr.findIndex(x=>x===20));
```

Output

``` text
1
```

------------------------------------------------------------------------

# 10. includes()

Checks whether an element exists.

``` javascript
let arr=["Apple","Banana"];

console.log(arr.includes("Apple"));
```

Output

``` text
true
```

------------------------------------------------------------------------

# 11. indexOf()

Returns the first index of an element.

``` javascript
let arr=["A","B","C"];

console.log(arr.indexOf("B"));
```

Output

``` text
1
```

------------------------------------------------------------------------

# 12. lastIndexOf()

Returns the last occurrence.

``` javascript
let arr=[1,2,3,2];

console.log(arr.lastIndexOf(2));
```

Output

``` text
3
```

------------------------------------------------------------------------

# 13. slice()

Returns a portion of an array without changing the original.

``` javascript
let arr=[1,2,3,4,5];

console.log(arr.slice(1,4));
```

Output

``` text
[2,3,4]
```

------------------------------------------------------------------------

# 14. splice()

Adds, removes or replaces elements in the original array.

``` javascript
let arr=[1,2,3,4];

arr.splice(1,2);
```

Output

``` text
[1,4]
```

------------------------------------------------------------------------

# 15. concat()

Joins arrays.

``` javascript
let a=[1,2];
let b=[3,4];

console.log(a.concat(b));
```

Output

``` text
[1,2,3,4]
```

------------------------------------------------------------------------

# 16. reverse()

Reverses an array.

``` javascript
let arr=[1,2,3];
arr.reverse();
```

Output

``` text
[3,2,1]
```

------------------------------------------------------------------------

# 17. sort()

Sorts an array.

``` javascript
let arr=[4,2,7,1];
arr.sort((a,b)=>a-b);
```

Output

``` text
[1,2,4,7]
```

------------------------------------------------------------------------

# 18. reduce()

Reduces an array to a single value.

``` javascript
let arr=[1,2,3,4];

let sum=arr.reduce((total,item)=>total+item,0);

console.log(sum);
```

Output

``` text
10
```

------------------------------------------------------------------------

# 19. some()

Returns true if **at least one** element satisfies a condition.

``` javascript
let arr=[1,2,3];

console.log(arr.some(x=>x>2));
```

Output

``` text
true
```

------------------------------------------------------------------------

# 20. every()

Returns true if **all** elements satisfy a condition.

``` javascript
let arr=[2,4,6];

console.log(arr.every(x=>x%2===0));
```

Output

``` text
true
```

------------------------------------------------------------------------

# 21. join()

Converts an array into a string.

``` javascript
let arr=["Java","Script"];

console.log(arr.join(" "));
```

Output

``` text
Java Script
```

------------------------------------------------------------------------

# 22. split()

**Note:** `split()` is a **String** method, not an Array method.

``` javascript
let str="Java Script";

console.log(str.split(" "));
```

Output

``` text
["Java","Script"]
```

------------------------------------------------------------------------

# 23. flat()

Flattens nested arrays.

``` javascript
let arr=[1,[2,3],[4,[5]]];

console.log(arr.flat(Infinity));
```

Output

``` text
[1,2,3,4,5]
```

------------------------------------------------------------------------

# 24. Array.isArray()

Checks whether a value is an array.

``` javascript
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray("Hello"));
```

Output

``` text
true
false
```

------------------------------------------------------------------------

# 25. Remove Duplicates using Set

``` javascript
let arr=[1,2,2,3,3];

let unique=[...new Set(arr)];

console.log(unique);
```

Output

``` text
[1,2,3]
```

------------------------------------------------------------------------

# Summary Table

  Method            Purpose
  ----------------- ------------------------
  push()            Add at end
  pop()             Remove last
  unshift()         Add at beginning
  shift()           Remove first
  filter()          Keep matching elements
  map()             Transform elements
  forEach()         Loop through array
  find()            First matching element
  findIndex()       Index of first match
  includes()        Check existence
  indexOf()         First index
  lastIndexOf()     Last index
  slice()           Copy part of array
  splice()          Add/Remove elements
  concat()          Merge arrays
  reverse()         Reverse array
  sort()            Sort elements
  reduce()          Single value
  some()            Any match
  every()           All match
  join()            Array → String
  flat()            Flatten nested arrays
  Array.isArray()   Check if array
  Set               Remove duplicates
