# Java Basics and OOP Foundations

---

## 1. Java Execution Pipeline

Java is a high-level, platform-independent language. Below is the execution flow from source code to final CPU execution:

```text
       [ Write Code ]
             │
             ▼
      Hello.java (Source Code)
             │
             │ javac (Java Compiler)
             ▼
      Hello.class (Bytecode - Platform Independent)
             │
             ├─────────────────────────────────────────────────┐
             ▼ JVM (Java Virtual Machine)                      │
     Class Loader (Loads .class file)                          │
             │                                                 │ JRE (Java Runtime Environment)
             ▼                                                 │
     Bytecode Verifier (Checks code safety)                    │
             │                                                 │
             ▼                                                 │
     Interpreter / JIT Compiler (Translates to machine code)   │
             │                                                 │
             ├─────────────────────────────────────────────────┘
             ▼
     Machine Code (0s and 1s)
             │
             ▼
       [ CPU Executes ]
             │
             ▼
      [ Output on Screen ]
```

> [!NOTE]
> The `Object` class is the top-level root class of all classes in Java (`java.lang.Object`).

---

## 2. Keywords and Modifiers

Java has reserved keywords (currently 50+ keywords, historically 48 in early versions) categorized by their purpose:

```text
┌───────────────────┬────────────────────────────────────────────────────────────────────────┐
│ Category          │ Keywords                                                               │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Data Types        │ byte, short, int, long, float, double, char, boolean                   │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Control Flow      │ if, else, switch, case, default, break, return, continue, for, do,     │
│                   │ while                                                                  │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Modifiers         │ private, public, protected, static, abstract, final, synchronized,     │
│                   │ transient, volatile, native, strictfp                                  │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Class / Interface │ class, interface, extends, implements, package, import                 │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Object Related    │ new, this, super, instanceof                                           │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Exceptions        │ try, catch, finally, throw, throws                                     │
├───────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Others            │ void, enum, const*, goto* (*unused/reserved)                           │
└───────────────────┴────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Literals and Implicit Typing

### Literals
A **literal** is any constant value assigned to a variable.

```java
int num = 10; // '10' is a literal
```

- Every literal has an associated data type. The compiler checks type compatibility between the literal and the variable type on the left.
- **Literal Categories**:
  1. **Integral**: `byte`, `short`, `int`, `long`
  2. **Floating Point**: `float`, `double`
  3. **String**: `String` (e.g., `"Hello"`)
  4. **Character**: `char` (e.g., `'A'`)
  5. **Boolean**: `boolean` (`true` or `false`)

### Implicit Datatyping (Widening)
When a smaller data type is assigned to a larger data type container, Java performs implicit casting.

```java
long b = 123; // Valid, automatic conversion of int literal to long
```

---

## 4. Static vs Non-Static Methods

Methods in Java are blocks of code that execute a specific function. They are either **static** or **non-static**.

### Static Method
- Declared with the `static` keyword.
- Belongs to the class itself, not to any object instance.
- Can be called directly without creating an object.

```java
class Test {
    static void show() {
        System.out.println("This is a static method.");
    }

    public static void main(String[] args) {
        show();      // Direct call
        Test.show(); // Call using class name
    }
}
```

### Non-Static Method
- Declared without the `static` keyword.
- Belongs to an object instance.
- Can only be called after instantiating an object of the class.

```java
class Test1 {
    void show() {
        System.out.println("This is a non-static method.");
    }

    public static void main(String[] args) {
        Test1 obj = new Test1(); // Create object
        obj.show();              // Call using object reference
    }
}
```

---

## 5. Packages

A **package** is a container (namespace) used to group related classes, interfaces, and subpackages.

### Directory Structure Example
```text
Project
│
└── student/           <-- Package folder
      └── Student.java <-- Class file
```

```java
package student;

public class Student {
    public void display() {
        System.out.println("Hello from Student class!");
    }
}
```

### Types of Packages
1. **User-Defined Packages**: Created by the developer.
2. **Pre-defined Packages**: Provided by the Java Standard Library (historically packed in `rt.jar`):
   - `java.*`: Core Java APIs (e.g., `java.lang`, `java.util`, `java.io`, `java.net`).
   - `javax.*` / `jakarta.*`: Advanced or Enterprise Java APIs (e.g., servlets, database connections).

---

## 6. Scanner Class (User Input)

The `Scanner` class (`java.util.Scanner`) is used to read input from different sources, such as keyboard input (`System.in`).

### Common Scanner Methods
- `nextInt()`: Reads an `int`
- `nextFloat()`: Reads a `float`
- `nextDouble()`: Reads a `double`
- `next()`: Reads a single word (splits on whitespace)
- `nextLine()`: Reads a whole line/sentence

### Code Example
```java
import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter an integer: ");
        int num = sc.nextInt();
        
        System.out.println("You entered: " + num);
        sc.close(); // Close resources
    }
}
```

---

## 7. Access Modifiers

Access modifiers control the visibility and access level of classes, constructors, variables, and methods.

### Access Levels
- **`private`**: Accessible only within the declaring class itself.
- **`<default>`** (no keyword): Accessible only within classes in the same package (package-private).
- **`protected`**: Accessible within the same package, and by subclasses in other packages.
- **`public`**: Accessible from any package in the project.

### Applicability Table

| Access Modifier | Class | Static Method | Non-Static Method | Local Variable | Static Variable | Instance Variable |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **`private`** | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **`<default>`** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **`protected`** | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **`public`** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |

### Key Class Rules
1. There can be at most **one public class** per source file.
2. The source file name must match the name of the public class.
3. You can have **multiple default class declarations** in a single file.
4. You can declare and compile a class file without a `main` method (Non-Executable class). All predefined API library classes are non-executable.

---

## 8. OOP Foundations: Class and Object

### Class
- A blueprint or template from which objects are created.
- Logical entities; they do not occupy memory space.

### Object
- A physical instance of a class.
- Occupies memory space in the heap.

| Class Entities (Template) | Object Entities (Instance) |
| :--- | :--- |
| Name | Identity (reference address) |
| Variables | Data (state/attributes) |
| Methods | Behavior (operations) |

### Creating an Object
```java
Demo demo = new Demo();
```
- `Demo`: The data type of the reference variable (non-primitive class type).
- `demo`: The reference variable stored in the **Stack**.
- `new`: Keyword that instantiates the object dynamically.
- `Demo()`: The constructor used to initialize the object state.

---

## 9. JVM Memory Architecture

The JVM separates runtime data areas to optimize memory usage:

1. **Stack Memory**:
   - Stores local variables and reference variables pointing to objects in the heap.
   - Every method call gets its own stack frame.
2. **Heap Memory**:
   - Stores all actual objects and their non-static instance variables.
   - Objects are created here at runtime via the `new` keyword.
3. **Method Area**:
   - Stores class structures, static variables, methods, constants, and bytecode.
4. **PC Register**:
   - Stores the address of the JVM instruction currently being executed (acts like a cache).
5. **Native Method Stack**:
   - Stores instructions for native methods written in C/C++ (e.g., `clone()`).

### Instance Lifecycle
1. When JVM encounters the `new` keyword, it allocates memory block space in the **Heap**.
2. It assigns a unique Reference ID to this memory block.
3. The reference variable in the **Stack** stores this Reference ID.
4. The constructor (e.g., `demo()`) executes to initialize the object.

---

## 10. Static vs Non-Static Scope

| Characteristic | Static Scope | Non-Static Scope |
| :--- | :--- | :--- |
| **Memory Allocation** | Method Area | Heap Memory (Inside object) |
| **Association** | Belongs to the Class | Belongs to the Object |
| **Frequency** | Allocated once (single copy shared by all) | Allocated per instance |
| **Allocation Time** | Class loading time | Runtime (at object creation) |

---

## 11. Wrapper Classes

Wrapper classes provide a way to use primitive data types as objects (e.g., for Collections frameworks).

| Primitive Type | Wrapper Class |
| :--- | :--- |
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

### Default Values

- **Primitive type**: `int a;` defaults to `0`.
- **Wrapper class object**: `Integer num;` defaults to `null` because it is an object reference.
