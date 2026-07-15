   High-level language
   
   JAVA----JDK->JRE-->JVM

      Write Code
              │
              ▼
       Hello.java (Source Code)
              │
              │ javac (Java Compiler)
              ▼
       Hello.class (Bytecode)
              │
              │ JVM (Java Virtual Machine)
              ▼
     Class Loader loads .class file
              │
              ▼
     Bytecode Verifier checks code
              │
              ▼
     Interpreter / JIT Compiler
              │
              ▼
      Machine Code (0s and 1s)
              │
              ▼
          CPU Executes
              │
              ▼
         Output on Screen
   
   
   
Keyword [48]

Datatype:- byte, short, int, long, float, double, char, boolean

General keyword:- if,else,switch, case, break, defult, return, continue, for, do, while

Modifiers:- private, <default>, protect, static, abstract, final, synchronized, transient, volatile, native, strict


class related:- class, interface, extends, implements, package,

object related:- new, this, super, instance of

exception related:-try, catch, finally, throw, throws

void, enum



--------------------**[LITERALS]**:

Definition:- any constant value given to a datatype is a literal

int num=10;
[10 is constant data  and this is literal]
[ literals have a datatype and it should match the one on the right]

-------------------[TYPE]:

1.------Intergral:  int num=10;   //(10);    compiler checks type compactibility
[byte/short/int/long]

2.------Floating Point:
[float/double]

3.------String:
[string]
4.------Char
[char]

5.Boolean


--------IMPLICIT DATATYPING 
[when a small datatype is stored in big containers   such as long b=123; // gives no error]



------METHOD[function in java]

------TYPE: 1.static   2. non static 

------IDENTIFIERS
[An identifier is the name given to a variable, method, class, interface, package, or object. It is used to identify program elements.]

[CLASS/METHOD/VARIABLE]


------------------------[ACCESS MODIFIERS]
Control who can access a class, method, or variable.  [IF NOT USED <default>]


----------------------[NON-ACCESS MODIFIERS]
Control how a class, method, or variable behaves.     [It is optional]

static int num=20;
        int num=12;

ACCESS MODIFIERS      NON-ACCESS MODIFIERS        DATATYPE         NAME

   <default>                 static                  int           num  []
    public                   static                  void          main()
    public                      x                    class         Test


[num is a static integer variable with default (package-private) access.]
[The main method is public, static, and returns nothing (void).]
[Test is a public class. class is not a data type—it's the keyword used to declare a class.]


------------------------[STATIC METHOD]
class Test {

    static void show() {
        System.out.println("This is a static method.");
    }

    public static void main(String[] args) {

        // No object needed
        show();

        // OR
        Test.show();
    }
}


-------------------------**[NON STATIC METHOD]**---------------

class Test1 {

    void show1() {
        System.out.println("This is a non-static method.");
    }

    public static void main(String[] args) {

        // Create object
        Test obj = new Test();

        // Call method using object
        obj.show();
    }
}


/*\
-----PACKAGES(Layman-Folder of class)

Project
│
└── student
      Student.java

PACKAGE--> SUBPACKAGES[14]--> FILE--> CLASS-->CODE
  |-------------------------|


                            package student;

                            public class Student {
                                public void display() {
                                    System.out.println("Hello");
                                }
                            }


-----------[TYPE]:

1. USER DEFINED

2. PRE-DEFINED:

                 Java Libarary - rt.jar  
               [java]          [javax or Jakarta]
             core java            advance java

-------------[SUBPACKAGE]

lang, utils, io, net, sql, etc.....


Class A{                            
    show();                             
}

Class B{
    object-name call   [non-static method]
    Class-name call    [static method]
}




-------[SCANNER FOR INPUT]    (non static method)

nextInt()
nextFloat()   ------All three for numbers
nextDouble()

next()--------  for string
nextLine()------for string

Import java.util.Scanner;

public class Demo{
    public static void main(Strings[] args){
        Scanner sc=new Scanner(System.in);

        int num=sc.nextInt();

        System.out.println(num);
    }
}
****************** [REFER TO TYPE.JAVA]*********************** 


   NOTE-------1..[[PRIVATE] DECLARED CAN ONLY BE ACCESS IN THE CLASS ITSELF ]
              2..[[PROTECTIVE] CAN BE ACCESSED WITHIN PACKAGE AND OUTSIDE THE PACKAGE WITH CONDITION]
              3..[[PUBLIC] CAN BE ACCESSED ANY-WHERE]


                                    [METHOD]                                       [VARIABLE]
                 CLASS         STATIC      NON STATIC                  LOCAL         STATIC          INSTANCE
PRIVATE            x             y             y                         x             y                y
<default>          y             y             y                         x             y                y
PROTECTED          x             y             y                         x             y                y
PUBLIC             y             y             y                         x             y                y


 NOTE---------------1.[ONLY ONE PUBLIC CLASS IN A FILE]
                    2.[MORE THAN ONE DEFAULT CLASS IN A SINGLE FILE]
                    3.[CAN MAKE A CLASS IN A FILE WITHOUT MAIN FUNCTION]  NON-EXECUTABLE CLASS.
                    4.[ALL PREDEFINED CLASSES ARE NON-EXECUTABLE CLASS]


--------------------------------------------------------------------------------------------------------------------------------



                                                         [JAVA-OOPS]
            [CLASS-BLUEPRINT]                                                 [OBJECT-INSTANCE]
-----------------------[CLASS ARE LOGICAL ENTITES. CLASS DO NOT OCCUPIES SAPCE.]-------------------

                    CLASS ENTITIES:                             OBJECT ENTITIES:
                            NAME                  -                      IDENTITY
                            VARAIABLE             -                       DATA 
                            METHOD                -                       BEHAVIOR



        CREATING OBJECT

      Demo demo = new demo();

   NOTE: 
        1.demo IS A NON PRIMITIVE DATAYPE(i.e class).
        2.new KEYWORD CREATED OBJECT.


--------3.JVM MEMORY:
          -> STACK
          -> HEAP
          -> METHOD AREA
          -> PC REGISTER
          -> NATIVE METHOD STACK

        4. JVM RUNS THE CODE AND ENCOUNTER new KEYWORD
        5. JVM CREATES A BUFFER AREA FOR new KEYWORD AFTER THAT JVM PROVIDES REFRENCE ID TO BUFFER AREA AND PUT IN THE REFRENCE BARRIER.
        6. NOW demo(); CONSTRUCTOR IS PUT IN THE OBJECT.
          (refrence barrier variable)
        7. OBJECT IS CREATED AT THE RUNTIME BY JVM IN HEAP MEMORY.

        8. PC REGISTER IS LIKE A CACHE FOR JVM.

        9. JAVA IS MADE FORM "C" LANGUAGE AND WHEN NEEDED IT IS IN NATIVE METHOD STACK  FOR-ex: CLONE.

        10. ALL NON STATIC RESOURCES STORES INSIDE OBJECT-->[OBJECT IS STORED INSIDE HEAP].



                     [STATIC]                VS               [NON-STATIC]

[GET MEMORY]        METHOD AREA                               HEAP[OBJECT]
                    BELONG TO CLASS                           BELONG TO OBJECT
[GET MEMORY]        SINGLE TIME MEMORY                        MULTIPLE TIME
[GET MEMORY]        CLASS LOADING TIME                        AT RUN TIME




************  REFER TO GOOD.JAVA*************


------------------------[WRAPPER-CLASS]-----------------------------------------
                        [PRIMITVE DATATYPE AS A CLASS]

                            byte-----------> Byte
                            short----------->Short
                            int------------->Integer
                            long------------>Long
                            double---------> Double
                            float----------> Float
                            char ----------->Char
                            boolean--------->Boolean


stataic Integer num;  [BY DEFAULT IT IS NULL]

static int a;         [BY DEFAULT IT IS 0]










