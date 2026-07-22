```java
public class Demo{
    int num;
    Demo(int num){
        this.num=num;
    }
    public void show(){
        system.out.println(this);
        public static void main(Strings[] args){
            Demo d=nw Demo(10);
            d.show();
        }
    }
}
```


HOW METHOD IS CALLED IN JAVA:

IT CHECKS:-->
            1. EXISTANCE
            2. EXACT MATCH---
            3. UNIQUENESS --- CHECKS FOR DUPLICACY

METHOD BINDING:
Method binding is the process of associating a method call with the actual method implementation that will be executed.




# [METHOD OVERLOADING]

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator obj = new Calculator();

        System.out.println(obj.add(5, 10));      // 15
        System.out.println(obj.add(5, 10, 15));  // 30
    }
}
```

METHOD-OVERLOADING:-----
            1. NUMBER OF PARAMETER MUST BE DIFFERENT       (int a)   and (int a, int b)
            2. TYPE OF PARAMETER IS DIFFERENT              (int a)   and  (double a)
            3. SEQUENCE OF PARAMETER MUST BE DIFFERENT     (int a, double b)   and   (double a, int  a)

     NOTE:
            1. WE CAN OVERLOAD STATIC AND NON STATIC AND CONSTRUCTOR IN JAVA.
            2. WE CAN NOT OVERLAOD VARIABLE OR OPERATOR EXCEPT '+'.
            3. WE CAN CALL MAIN METHOD.

////////////////////////////


```java
public void show(){
    System.out.print('a');

}

public string show(){
    System.out.print('b');
}
```

HERE THERE WILL BE NO METHOD OVERLAODING BECAUSE THERE IS SAME NUMBER OF PARAMETER NAD NAME IS SAME.


///////////////////////////////

```java
public class Demo{
    int num;
    Demo(int num){
        this.num=num;
    }


public void show(){
    System.out.print('a');

}

public string show(int num){
    System.out.print('HELLO'+num);
}

public static void main(String[] args){
    Demo d= new Demo(10);
    d.show('a');                                   //OUTPUT WILL BE HELLO 97  , here 97 is the ascii char for 'a';
}

}
```

# [CONSTRUCTOR-CHAINING]
```java

public class Demo{
    static{
        System.out.println()
    }
    Demo(){
        this(10);
        System.out.println("Constructor-1");
    }
    Demo(int num){
        this(25.5);
        System.out.println("Constructor-2"+num);
    }
    Demo(double a){
        System.out.println("Constructor-3"+a);
    }
    
    public static void main(String[] args){
        Demo d= new Demo(10);
        System.out.println("HELLO EVERYONE");
}

}
```


$$

STATIC BLOCK GETS ITS MEMORY ON THE CLASS LOADING TIME.
STATIC EXECUTES AT THE TIME OF CLASS LOADING.
STATIC RUNS BEFORE MAIN FUNCTION BECAUSE IT DONESNOT REQIURE MEMORY.

$$

RELATION-SHIP IN JAVA BETWEEN OBJECTS
            1. HAS-A   ASSOCIATION    (waek) ---|
                                                --> a.AGGREGATION  (weak)
                                                --> b.COMPOSITION (strong)
            2. IS-A    INHERITANCE    (strong)---|
                                                --> a.extends 
                                                -->b.implemnents    (interface)


# [ASSOCIATION]
```java
public class Demo{
    public void show(){
        System.out.println("SHOW METHOD");
    }
        public static void main(Strings[] args){
            Demo d=new Demo(10);
            System.out.println("hello everyone");
        }
    }
class Test{
    public static void main(String[] args){
        Demo d=ne Demo();
        d.show();
    }
}
```
# [INHERITANCE]

```java
class Parent{
    private int num;
    int a;
    public void show(){
        System.out.println("Show method");
    }
}
public class Demo extends Parent{
    int a;

}
public static void main(String[] args){
    Demo d=new Demo(10);
    System.out.println("hello everyone");

}
```
--[TYPES OF JAVA]--
            1. SINGLE LEVEL    A->B
            2. MULTILEVEL      A->B->C
            3. HEIRAICHAL            ->B
                                  A--|
                                     ->C
            4. MULTIPLE    B--|
                               -->A
                           C--|

MULTIPLE INHERITANCE CAUSES AMBIGUITY  SO THATS WHY INTERFACE IS USED FOR MULTIPLE INHERITANCE RATHER THAN CLASS


# [METHOD-OVERRIDING]
        IT IS A TECHNIQUE WE TRY TO CHANGE PARENT CLASS METHOD BODY IN CHILD CLASS.

WE CAN OVERRIDE NON-STATIC METHOD AND WE CANNOT OVERRIDE STATIC METHOD IN JAVA.

***[WHEN STATIC METHOD IS CREATED THRN  COMPILER GIVES DUPLICACY PROBLEM, TO SOLVE THIS METHOD HIDING IS IMPLEMENTED AND PARENT METHOD IS HIDDEN IN CHILD CLASS.]***

***[CONSTRUCTOR IS NOT INHERITED AND NOT OVERRIDDEN.]***
**[MAIN METHOD CAN BE INHERITED AND NOT OVERRIDDEN ]**

```java
class Parent{
    private int num;
    public static void main(String[] args){
    Demo d=new Demo(10);
    System.out.println("hello everyone");
}
}
public class Demo extends Parent{
    
    public static void career(){
        System.out.print("Parent choice");
    }
}
```

**[VARIABLE CAN NOT BE OVERRIDE IN JAVA]**
**[OPERATORS CAN NOT BE OVERRIDE IN JAVA]**
**[DATA HIDING]**


[COMPILER EXTEND THE PARENT CLASS WITH OBJECT]

```java
class Parent extends Object{

}
public class Demo extends Parent{
    
}


```
# OBJECT 
            1. Object have 13 non static method.
            2. (toString) method is used to generate refrence id.(internally call hashcode())


override toString Method

```java
class Parent extends Object{
    int num=100;
    public void show(){
        System.out.println("SHOW METHOD");
    }
}
public class Demo extends Parent{
    
    public String toString(){
        return "hello";
    }
    public static void main(String[] args){
        Demo d=new Demo(10);
        System.out.println(d);
    }
}

```
To  check the refrence id using equal method.

```java
class Parent extends Object{
    int num=100;
    public void show(){
        System.out.println("SHOW METHOD");
    }
}
public class Demo extends Parent{
    
    public String toString(){
        return "hello";
    }
    public static void main(String[] args){
        Demo d1=new Demo(10);
        Demo d2=new Demo(20);
        System.out.println(d1.equal d2);                    //output== false
    }
}
```


To get the name of class 

```java
class Parent extends Object{
    int num=100;
    public void show(){
        System.out.println("SHOW METHOD");
    }
}
public class Demo extends Parent{
    
    public String toString(){
        return "hello";
    }
    public static void main(String[] args){
        Demo d1=new Demo(10);
        Demo d2=new Demo(20);
        System.out.println(d1.getClass().getName());                    
    }
}
```


# UPCASTING
 When we create the object of child class and store in the refrence variable of parent class.

```java
class Parent extends Object{

}
public class Demo extends Parent{
    Parent d1= new demo(10);
}                                                       // output gives parent class output

```

If the type of object is parent class so the parent class will run.

# [FINAL]

A final variable can be assigned only once. After initialization, its value cannot be changed.

```java
class Demo {
    public static void main(String[] args) {
        final int x = 10;
        // x = 20;   // Error
        System.out.println(x);
    }
}
```
```java
A final method cannot be overridden by a subclass.
class Parent {
    final void show() {
        System.out.println("Parent Method");
    }
}

class Child extends Parent {
    // void show() { }   // Error: Cannot override final method
}

public class Demo {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();
    }
}
```

A final class cannot be inherited (extended).


```java

final class Animal {
    void sound() {
        System.out.println("Animal Sound");
    }
}

// class Dog extends Animal { }   // Error

public class Demo {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();
    }
}
```