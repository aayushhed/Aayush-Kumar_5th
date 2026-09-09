# Java Polymorphism, Inheritance, and final Keyword

---

## 1. Method Invocation and Overloading

When a method is called in Java, the compiler and JVM check:
1. **Existence**: Does the method exist?
2. **Exact Match**: Do the parameter types and their order match?
3. **Uniqueness**: Is the call unambiguous (no duplicate signatures)?

### Method Overloading
Method overloading allows a class to have multiple methods with the same name, as long as their parameter lists are different.

```java
class Calculator {
    // Overloaded add method with 2 parameters
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded add method with 3 parameters
    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator obj = new Calculator();
        System.out.println(obj.add(5, 10));      // Output: 15
        System.out.println(obj.add(5, 10, 15));  // Output: 30
    }
}
```

### Rules of Method Overloading
Overloaded methods must differ in at least one of the following:
1. **Number of parameters**: e.g., `add(int a)` vs `add(int a, int b)`.
2. **Type of parameters**: e.g., `add(int a)` vs `add(double a)`.
3. **Sequence of parameter types**: e.g., `add(int a, double b)` vs `add(double a, int b)`.

> [!NOTE]
> - We can overload static methods, non-static methods, and constructors.
> - We **cannot** overload variables or operators (except the `+` operator, which is internally overloaded for string concatenation).
> - Overloading is **not** determined by return type alone. Changing only the return type will result in a compile-time error.

```java
// This will cause a compile-time error (duplicate method signature):
public void show() {
    System.out.print("a");
}

public String show() { // Error: Method show() is already defined
    return "b";
}
```

### Type Promotion in Overloading
If an exact parameter match is not found, Java promotes the argument's type (e.g., `char` is promoted to `int` based on its ASCII value).

```java
public class Demo {
    public void show() {
        System.out.println("No-arg show");
    }

    public void show(int num) {
        System.out.println("Numeric representation: " + num);
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.show('a'); // Output: Numeric representation: 97 (ASCII value of 'a')
    }
}
```

---

## 2. Constructor Chaining and Static Blocks

### Constructor Chaining
Constructor chaining is the process of calling one constructor from another constructor within the same class (using `this()`) or from the parent class (using `super()`).

```java
public class Demo {
    Demo() {
        this(10); // Calls the parameterized constructor Demo(int)
        System.out.println("Constructor-1 (No-arg)");
    }
    
    Demo(int num) {
        this(25.5); // Calls the parameterized constructor Demo(double)
        System.out.println("Constructor-2 (int): " + num);
    }
    
    Demo(double a) {
        System.out.println("Constructor-3 (double): " + a);
    }
    
    public static void main(String[] args) {
        Demo d = new Demo(); 
        // Execution Output:
        // Constructor-3 (double): 25.5
        // Constructor-2 (int): 10
        // Constructor-1 (No-arg)
    }
}
```

### Static Initialization Blocks
- **Static Blocks** execute once when the class is first loaded into memory.
- They run **before** the `main` method executes and before any objects are instantiated.
- They are used to initialize static class resources.

---

## 3. Relationships in Java

Objects can interact via two main types of relationships:

### 1. HAS-A Relationship (Association)
Defines how classes are associated. It is a weak relationship.
- **Aggregation**: A weak relationship where child objects can exist independently of the parent object.
- **Composition**: A strong relationship where child objects cannot exist if the parent object is destroyed.

#### Association Example
```java
public class Demo {
    public void show() {
        System.out.println("Show method");
    }
}

class Test {
    public static void main(String[] args) {
        Demo d = new Demo(); // Test HAS-A association with Demo
        d.show();
    }
}
```

### 2. IS-A Relationship (Inheritance)
Defines parent-child class hierarchies. It is a strong relationship implemented using `extends` (for classes) or `implements` (for interfaces).

```java
class Parent {
    int value = 10;
    public void show() {
        System.out.println("Parent show method");
    }
}

public class Demo extends Parent {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(); // Inherited method
        System.out.println(d.value); // Inherited variable
    }
}
```

#### Types of Inheritance in Java
1. **Single-Level**: Class B inherits from Class A.
2. **Multi-Level**: Class C inherits from Class B, which inherits from Class A.
3. **Hierarchical**: Class B and Class C both inherit from Class A.
4. **Multiple Inheritance**: A class inherits from more than one class. **Java does not support multiple inheritance with classes** to avoid ambiguity (the "Diamond Problem"). It is achieved using **interfaces**.

---

## 4. Method Overriding and Hiding

### Method Overriding
Method overriding is redefining a parent class instance method in a child class with the exact same signature.
- Only **non-static** methods can be overridden.
- Constructors and `final` methods cannot be overridden.

### Method Hiding
If a child class defines a static method with the same signature as a static method in the parent class, the parent's method is **hidden**, not overridden. This is resolved at compile time.

```java
class Parent {
    public static void career() {
        System.out.println("Parent choice");
    }
}

public class Demo extends Parent {
    public static void career() { // Method Hiding
        System.out.println("Child choice");
    }
}
```

> [!NOTE]
> - Instance variables **cannot** be overridden; they are resolved at compile time based on the reference type (shadowing/hiding).
> - Operators cannot be overridden in Java.

---

## 5. Root `Object` Class

Every class in Java implicitly extends the `java.lang.Object` class.

### Commonly Overridden Methods
1. **`toString()`**: Returns a string representation of the object. By default, it returns `ClassName@HashCode`.
2. **`equals(Object obj)`**: Compares two object references for equality. By default, it checks if they point to the same memory location (`==`).

#### Overriding `toString()`
```java
public class Demo {
    @Override
    public String toString() {
        return "Custom Demo String";
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        System.out.println(d); // Output: Custom Demo String
    }
}
```

#### Overriding `equals()`
```java
public class Demo {
    int id;
    
    Demo(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Demo demo = (Demo) obj;
        return this.id == demo.id;
    }

    public static void main(String[] args) {
        Demo d1 = new Demo(10);
        Demo d2 = new Demo(10);
        System.out.println(d1.equals(d2)); // Output: true (since IDs match)
        System.out.println(d1 == d2);      // Output: false (different object references)
    }
}
```

---

## 6. Upcasting

**Upcasting** is casting a child class object to a parent class reference variable. It is done implicitly.

```java
class Parent {}
class Child extends Parent {}

public class Demo {
    public static void main(String[] args) {
        Parent p = new Child(); // Upcasting
    }
}
```

---

## 7. The `final` Keyword

The `final` keyword is a non-access modifier used to restrict variables, methods, and classes.

### 1. Final Variables
Cannot be reassigned after initialization. Acts as a constant.
```java
final int x = 10;
// x = 20; // Compile-time error!
```

### 2. Final Methods
Cannot be overridden by subclasses.
```java
class Parent {
    final void show() {
        System.out.println("Final method in Parent");
    }
}

class Child extends Parent {
    // void show() {} // Compile-time error!
}
```

### 3. Final Classes
Cannot be inherited (extended).
```java
final class Animal {}
// class Dog extends Animal {} // Compile-time error!
```