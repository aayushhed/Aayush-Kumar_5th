# ABSTRACTION

        --> abstract
        --> interface


```java
abstract class Parent{                // abstract is non acceess modifier   and can not create an object for it  but can access it by using inheritance.
    public void show(){
        System.out.println("Parent Mehtod");
    }
}
 public class Demo extends Parent{
    public static void main(){
        Parent d1= new Demo;
    }
 }
```

ABSTRACT METHOD IS WITHOUT ANY BODY  ONLY METHOD SIGNATURE.

```java
abstract class Parent{                
    public void show(){
        System.out.println("Parent Mehtod");
    }
    public abstract void display();  // abstract method
}
 public class Demo extends Parent{
    public static void main(){
        Parent d1= new Demo;
    }
 }
```

WHEN A ABSTRACT CLASS HAS ABSTRACT METHOD THEN IT IS COMPULSORY TO OVERRIDE IN CHILD CLASS.

IN OVERRIDING THE DATATYPE CAN BE CHANGES IF IT  IS PRIMITIVE AND IF IT IS NON- PRIMITIVE SO NO OVERRIDNG OF DATATYPE.

IN OVERRIDNG ACCESS MODIFIERS CAN BE CHANGED FROM LOWER TO HIGHER  private->default(within package)->protected(within package and outside with subclass)->pubic

```java
abstract class Parent{                
    public void show(){
        System.out.println("Parent Mehtod");
    }
     abstact void display();  // now default
}
 public class Demo extends Parent{
    final int num=10;
    public void diaplay({               //now public
        System.out.println("display method");    
    })
    public static void main(){
        Parent d1= new Demo;
    }
 }
```

**WE CAN CREATE CONSTRUCTOR, VARIABLE , STATIC AND NON STATIC IN ABSTRACT CLASS  BUT NOT CREATE AN OBJECT**

WE CAN MAKE THE CHILD CLASS AN ABSTRACT CLASS IF WE DONT WANT TO OVERRIDE THE ABSTRACT METHOD OF PARENT CLASS.
 
ABSTRACT
```java
 abstract public class Demo extends Parent{
 }
```
WE CAN NOT USE STATIC AND NON STATIC KEYWORD IN METHOD.

WE CAN USE FINAL AND STATIC IN  SINGLE METHOD.

# INTERFACE
We can acheive upto 100% abstraction. (not fully).

```java

interface I1{                             //public or default
    public abstract void show();        // we can only use public in interface\

    abstract void display();          // here our compiler knows it is not default but public in this case.

    void hello();                // compiler will put public and abstract by itself.
}
public class Demo implements I1{
    public void show(){
        System.out.println("override method");
    } 
    // protected void display(){                             // it will throw error
    //     System.out.println("override method");
    // }
    public void display(){                                    // we can go only downwards in terms of  visibility    private-> default->protected->public    not backwards.
        System.out.println("override method");
    }
    public static void main(String[] args){
        Demo d1= new Demo;
    }
}
```
WE CAN NOT DECLARE CONSTRUCTOR IN INTERFACE.
***[WE CAN DECLARE VARIABLE IN INTERFACE IF IT IS {public,static,final}]***

# CONCRETE METHOD INSIDE INTERFACE---->
                                1. DEFAULT METHOD
                                2. STATIC METHOD


# WHY CONCRETE CLASS-   
                    IF A INTERFACE IS IMPLEMENTED 1000+ TIMES BUT WHEN SOME CHANGES ARE DONE IN PARENT CLASS ALL CHILD CLASS WILL BE INCONSISTENT.


```java
interface I1{                            
    public static final int num=100;
    int b=12;
    public abstract void show();  
    abstract void display();      
    default void repo(){                         // here default is a keyword for concrete class not access meodifier
        System.out.println("reporate");
    }
    static void reverseRepo(){
        ystem.out.println("reverseRepo");
    }
    }         
public class Demo implements I1{
    public void show(){
        System.out.println("override method");
    } 

    public void display(){                                   
        System.out.println("override method");
    }
    public static void main(String[] args){
        Demo d1= new Demo;
    }
}
```


TO CALL Interface_name.super.methodName();

HERE   

 ```java
 I1.Super.repo();
```