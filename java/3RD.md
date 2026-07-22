# [WRAPPER]
CONVERSION OF DATATYPE AND OBJECTS:->>


     1. CONVERT PRIMITIVE DATATYPE INTO OBJECTS IS BOXING.
     2. VICE-VERSA IS UNBOXING.

PRIMITIVE DATATYPE---> OBJECT  *[BOXING]*

OBJECT----> PRIMITIVE DATATYPE   *[UNBOXING]*

//BOXING--
 ```java
  int a=10;
  Integer num=Integer.valueof(a);

 ```

//UNBOXING--

int b=num.intvalue();

NOTE:  THESE ARE NON-STATIC METHODS AS WE OPERATE WITH OBJECTS.

# [AUTOBOXING]
   WHEN CONVERSION IS DONE BY COMPILER ITSELF.


# [METHODS OF CONVERSION ]      
```java

//toString()--     
                                      //IT IS A STATIC METHOD AND PRESENT IN ALL WRAPPER CLASS.
    string s1 =Integer.toString(a);                                                       //  Datatype.toString();


//parseInt()--                                          // IT IS ALSO A STATIC METHOD.

    int r1=Integer.parseInt(s1);                                                          // Datatype.parseInt();
```




**********************[JAVA-OOPS]**



# [CONSTRUCTOR]
THESE ARE SPECIAL METHODS USED TO INITAILZE OBJECT..

//syntax--

        ACCESS MODIFIER   constructor_name(){

         }



*[TYPES]*
        1.DEFAULT              [CREATED BY COMPILER]
        2.PARAMETERIZED        [BY USER]
        3.NON-PARAMETERIZED    [BY USER]


[DEFAULT]:

```java
        Demo(){

        }
```

[PARAMETERIZED]:
  
```java
        Demo(int a){

        }
```

```java
import java.util.Scanner;

public class Demo{
    int num;
    Demo(int num){                // compiler is being confused as which num to initialise.
        num=num;
    }
    public static void main(String[] args){
        Demo d = new Demo(10);
    }
}
```



**[THIS KEYWORD]**
    
    this.num=num;


# [DATA HIDING]

Data hiding is an OOP principle where the internal data of a class is protected from direct access using access modifiers such as private, and accessed through methods (getters/setters).

```java

    class Student {
    private int age;  // Data hiding

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}


```


  HOW METHOD IS FORMED IN JAVA AND  CHECKED:     
                               1.EXISTANCE
                               2.EXACT MATCH
                               3.UNIQUENESS

# (METHOD-BINDING)
# [DATA SCHEDULE]
         GLOBAL VARIALBE SHADOWS LOCAL VARIABLE ID NAME IS SAME. TO SOLVE THIS (this) KEYWORD IS USED.

                                 this.age = age;


