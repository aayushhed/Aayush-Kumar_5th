# JavaScript Complete Notes

------------------------------------------------------------------------

# 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to
make web pages interactive.

Example:

``` javascript
console.log("Hello, World!");
```

------------------------------------------------------------------------

# 2. Variables

## var

-   Function scoped
-   Can be redeclared
-   Hoisted

``` javascript
var x = 10;
```

## let

-   Block scoped
-   Cannot be redeclared in the same scope

``` javascript
let age = 20;
```

## const

-   Block scoped
-   Cannot be reassigned

``` javascript
const PI = 3.14159;
```

  Feature     var        let     const
  ----------- ---------- ------- -------
  Scope       Function   Block   Block
  Redeclare   ✅         ❌      ❌
  Reassign    ✅         ✅      ❌

------------------------------------------------------------------------

# 3. Data Types

## Primitive Types

-   Number
-   BigInt
-   String
-   Boolean
-   Undefined
-   Null
-   Symbol

``` javascript
let num = 10;
let big = 12345678901234567890n;
let name = "Aayush";
let isStudent = true;
let x;
let y = null;
let id = Symbol("id");
```

## Non-Primitive Types

### Object

``` javascript
let student = {
  name: "Aayush",
  age: 20
};
```

### Array

``` javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### Function

``` javascript
function greet() {
  console.log("Hello");
}
```

------------------------------------------------------------------------

# 4. Output

``` javascript
console.log("Hello");
console.table([{name:"Aayush",age:20}]);
console.error("Error");
console.warn("Warning");
```

------------------------------------------------------------------------

# 5. Input

Browser:

``` javascript
let name = prompt("Enter your name");
alert(name);
```

Node.js:

``` javascript
// readline module
```

------------------------------------------------------------------------

# 6. Operators

## Arithmetic

`+ - * / % ** ++ --`

``` javascript
let a = 10, b = 3;
console.log(a+b);
console.log(a%b);
```

## Assignment

`= += -= *= /= %=`

## Comparison

`== === != !== > < >= <=`

``` javascript
5 == "5";   // true
5 === "5";  // false
```

## Logical

`&& || !`

## Ternary

``` javascript
let result = age >= 18 ? "Adult" : "Minor";
```

------------------------------------------------------------------------

# 7. Conditional Statements

## if

``` javascript
if(age >=18){
 console.log("Adult");
}
```

## if...else

``` javascript
if(age>=18){
 console.log("Adult");
}else{
 console.log("Minor");
}
```

## switch

``` javascript
switch(day){
 case 1:
  console.log("Monday");
  break;
 default:
  console.log("Invalid");
}
```

------------------------------------------------------------------------

# 8. Loops

## for

``` javascript
for(let i=1;i<=5;i++){
 console.log(i);
}
```

## while

``` javascript
let i=1;
while(i<=5){
 console.log(i);
 i++;
}
```

## do...while

``` javascript
let i=1;
do{
 console.log(i);
 i++;
}while(i<=5);
```

## for...of

Used for arrays.

``` javascript
for(const fruit of fruits){
 console.log(fruit);
}
```

## for...in

Used for object keys.

``` javascript
for(const key in student){
 console.log(key, student[key]);
}
```

## forEach()

``` javascript
fruits.forEach((fruit,index)=>{
 console.log(index, fruit);
});
```

------------------------------------------------------------------------

# 9. Arrays (Detailed)

``` javascript
let arr = [10,20,30];
```

Access:

``` javascript
console.log(arr[0]);
```

Update:

``` javascript
arr[1]=50;
```

Common Methods

-   push()
-   pop()
-   shift()
-   unshift()
-   slice()
-   splice()
-   map()
-   filter()
-   reduce()
-   find()
-   includes()
-   sort()
-   reverse()

Example:

``` javascript
let nums=[1,2,3];
nums.push(4);
nums.pop();
```

------------------------------------------------------------------------

# 10. Objects (Detailed)

``` javascript
let student={
 name:"Aayush",
 age:20,
 greet(){
   console.log("Hello");
 }
};
```

Access

``` javascript
student.name
student["age"]
```

Methods

``` javascript
Object.keys(student);
Object.values(student);
Object.entries(student);
```

------------------------------------------------------------------------

# 11. Functions

## Function Declaration

``` javascript
function add(a,b){
 return a+b;
}
```

## Function Expression

``` javascript
const add=function(a,b){
 return a+b;
};
```

## Arrow Function

``` javascript
const add=(a,b)=>a+b;
```

------------------------------------------------------------------------

# 12. Parameter vs Argument

``` javascript
function greet(name){
 console.log(name);
}

greet("Aayush");
```

-   `name` → Parameter
-   `"Aayush"` → Argument

------------------------------------------------------------------------

# 13. Higher Order Function

A function that takes another function as an argument or returns one.

``` javascript
function greet(callback){
 callback();
}

greet(()=>{
 console.log("Hello");
});
```

------------------------------------------------------------------------

# 14. First-Class Functions

Functions can be: - Stored in variables - Passed as arguments - Returned
from functions

``` javascript
const sayHi=function(){
 console.log("Hi");
};
```

------------------------------------------------------------------------

# 15. Nested Function

``` javascript
function outer(name){
 function inner(){
   console.log(name);
 }
 inner();
}

outer("Aayush");
```

------------------------------------------------------------------------

# 16. Scope

-   Global Scope
-   Function Scope
-   Block Scope
-   Lexical Scope

Lexical Scope Example:

``` javascript
function outer(name){
 function inner(){
   console.log(name);
 }
 inner();
}
```

The inner function can access the parent's variables and parameters.

------------------------------------------------------------------------

# 17. Closures

A closure is created when an inner function remembers variables from its
outer function even after the outer function has finished.

``` javascript
function counter(){
 let count=0;

 return function(){
   count++;
   console.log(count);
 };
}

const c=counter();
c();
c();
```

Output

    1
    2

------------------------------------------------------------------------

# 18. Execution Context

Every execution context has two phases.

## Memory Creation Phase

-   Variables → undefined
-   Functions → stored completely

## Execution Phase

-   Code runs line by line.

Example

``` javascript
var x=2;

function square(n){
 return n*n;
}

var result=square(x);
```

Call Stack

    square()
    Global

    ↓

    Global

    ↓

    Empty

------------------------------------------------------------------------

# 19. Hoisting

``` javascript
console.log(a);

var a=10;
```

Output

    undefined

`let` and `const` are hoisted but remain in the Temporal Dead Zone until
initialized.

------------------------------------------------------------------------

# 20. Primitive vs Non-Primitive

  Primitive         Non-Primitive
  ----------------- ---------------------
  Stored by value   Stored by reference
  Immutable         Mutable

------------------------------------------------------------------------

# 21. Spread Operator

``` javascript
const a=[1,2];
const b=[...a,3];
```

# 22. Rest Operator

``` javascript
function sum(...nums){
 return nums.reduce((a,b)=>a+b,0);
}
```

------------------------------------------------------------------------

# 23. Common Interview Questions

1.  Difference between `==` and `===`
2.  Difference between `var`, `let`, and `const`
3.  What is hoisting?
4.  What is closure?
5.  What is lexical scope?
6.  What is execution context?
7.  Parameter vs argument
8.  Arrow function vs normal function
9.  Higher-order function
10. for...of vs for...in vs forEach

------------------------------------------------------------------------

