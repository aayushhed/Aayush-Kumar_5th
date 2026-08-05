# Exception Handling
# [THROWABLE IS THE TOP CLASS OF EXCEPTION]
flow of program stops due to an error in program, for handling such exception or error whe have handlers:

            1. try  --> Risky code (exception might be occuring)      
            2. catch --> Handler code   
            3. finlly --> Safe case  
            4. throw
            5. throws

```java

public class Demo{
    public static void main(String [] args){
        System.out.print("Start line");

        int num=10/0;

        System.out.print("End Line")
    }
}                     // output will only show Start line as 10/0 shows exception flow stops preventing end line to show.


```

# [ TRY / CATCH ]

```java
public class Demo{
    public static void main(String [] args){
        System.out.print("Start line");
        try{
        int num=10/0;
        }
        catch(AirthmaticException e){
            System.out.println(e);
        }

        System.out.print("End Line")
    }
}                                                  //output:   // Start line   
                                                               // exception airthmatic exception   
                                                               // End line

```


# [TYPES]  :
            1. CHECKED EXCEPTION ( It is compulsory to handle it because program will not compile)
            2. UN CHECKED

1. CHECKED EXCEPTION: 
            IT IS CHECKED BY COMPILER.
            IT HAPPENS AT COMPILE TIME.



2. UN-CHECKED EXCEPTION: 
            IT IS CHECKED BY JVM.
            IT HAPPENS AT RUN TIME.


```java
try{
    int num=10/0;
    System.out.println("Hello")      // unreachable line [jvm basically sees the try error and directly goes to catch].
        }
        catch(AirthmaticException e){
            System.out.println(e);
        }
```


# THROWABLE:
THROWABLE CHI;D CLASS ARE:
            1. EXCEPTION CLASS
            2. ERROR           [terminate dues to some system problem/system menory problem and **[ it cannot be handled~~]**]


# EXCEPTION CLASS
        1. FileNotFoundException
        2. SQLException
        3. SarvletException                               [1-5]  are checked exception
        4. IOException
        5. ClassNotFoundException
        6. RunTimeException------------->>>|
            etc                            a. AirthmaticException
                                           b. NullPointerException
                                           c. ArrayOutOfBoundException
                                           d. IMException                         //these are unchecked exception


ArrayOutOfBoundException


```java
public class ArrayOutOfBoundsExample {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};

        try {
            System.out.println(arr[5]); // Invalid index
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Out Of Bounds Exception");
        } finally {
            System.out.println("Finally block always executes");
        }

        System.out.println("Program continues...");
    }
}
```




# NOTES
        1. we can use try without catch or without finally  but not ano with someone.
        2. we need try to use catch.
        3. we can create nested try catch.

IN A NESTED TRY CATCH JVM CHECKS INNER CATCH EXCEPTION IF NOT FOUND IT CHECKS THE OUTER EXCEPTION.

# EXCEPTION PROPAGATION

Exception propagation means an exception is passed from one method to another until it is handled.

```java
    
public class ExceptionPropagation {

    static void method3() {
        int a = 10 / 0;   // ArithmeticException
    }

    static void method2() {
        method3();
    }

    static void method1() {
        method2();
    }

    public static void main(String[] args) {
        try {
            method1();
        } catch (ArithmeticException e) {
            System.out.println("Exception handled in main()");
        }
    }
}
```