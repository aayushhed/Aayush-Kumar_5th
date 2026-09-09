# Java Wrapper Conversions and Constructor Basics

---

## 1. Wrapper Conversions (Boxing and Unboxing)

Java allows conversion between primitive data types and their corresponding wrapper class objects.

- **Boxing**: Converting a primitive data type into its wrapper class object.
- **Unboxing**: Converting a wrapper class object back into its corresponding primitive data type.
- **Autoboxing / Auto-unboxing**: Automatic conversions performed by the Java compiler.

### Explicit Boxing Example
```java
int a = 10;
Integer num = Integer.valueOf(a); // Boxing using static valueOf() method
```

### Explicit Unboxing Example
```java
int b = num.intValue(); // Unboxing using non-static intValue() method
```

### Autoboxing & Auto-unboxing Example
```java
Integer num2 = 20; // Autoboxing
int c = num2;      // Auto-unboxing
```

---

## 2. String and Primitive Conversions

Wrapper classes provide static utility methods for converting data types to and from Strings.

### `toString()`
Converts a primitive type into a String representation.

```java
int a = 10;
String s1 = Integer.toString(a); // Using ClassName.toString()
```

### `parseInt()`
Parses a String into its primitive numeric type counterpart.

```java
String s1 = "10";
int r1 = Integer.parseInt(s1); // Using ClassName.parseInt()
```

---

## 3. Constructors

A **constructor** is a special member block/method of a class used to initialize new objects. It has the same name as the class and has no return type (not even `void`).

### Syntax
```java
public class ClassName {
    // Constructor
    public ClassName() {
        // Initialization code
    }
}
```

### Types of Constructors
1. **Default Constructor**: Created automatically by the compiler if no constructors are explicitly declared in the class. It initializes default values (e.g., `0`, `null`).
2. **Non-Parameterized Constructor**: A constructor declared explicitly by the programmer that accepts no arguments.
3. **Parameterized Constructor**: A constructor declared by the programmer that accepts arguments/parameters to initialize instance fields.

#### Constructor Shadowing Issue Example
In the following example, the parameter name matches the instance variable name, causing variable shadowing (the local parameter hides the instance field):

```java
public class Demo {
    int num; // Instance variable

    Demo(int num) { // Parameter
        num = num; // Assigns the local parameter to itself; doesn't initialize the instance variable!
    }

    public static void main(String[] args) {
        Demo d = new Demo(10);
        System.out.println(d.num); // Prints 0 (default value), not 10!
    }
}
```

---

## 4. The `this` Keyword

To resolve variable shadowing (where a local variable/parameter has the same name as an instance/global variable), we use the `this` keyword.

- **`this`** represents the current object instance.

### Resolving Shadowing
```java
public class Demo {
    int num; // Instance variable

    Demo(int num) {
        this.num = num; // 'this.num' refers to the instance field, 'num' refers to the parameter
    }
}
```

---

## 5. Data Hiding (Encapsulation)

**Data hiding** is an OOP principle of restricting direct access to the internal data (fields) of a class. This is achieved by declaring fields as `private` and exposing access only through `public` getter and setter methods.

```java
class Student {
    private int age; // Data hiding: cannot be accessed directly from outside

    // Setter method (with validation capability)
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }

    // Getter method
    public int getAge() {
        return this.age;
    }
}
```

### Method Signature Checks
When compile-time method binding happens, Java checks:
1. **Existence**: Does the method exist in the class?
2. **Exact Match**: Do the parameter types and ordering match exactly?
3. **Uniqueness**: Is the method signature unique (resolves method overloading)?
