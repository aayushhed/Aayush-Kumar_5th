# Collection
The Collection Framework is a set of classes and interfaces used to store and manipulate groups of objects.

Iterable
   |
Collection (Interface)
   |
   +-- List
   |     +-- ArrayList
   |     +-- LinkedList
   |     +-- Vector
   |           +-- Stack
   |
   +-- Set
   |     +-- HashSet
   |     +-- LinkedHashSet
   |     +-- TreeSet
   |
   +-- Queue
         +-- PriorityQueue
         +-- LinkedList

# Generics in Java
Generics allow you to specify the type of data that a class, interface, or method can work with. They provide type safety, eliminate explicit type casting, and make code reusable.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        list.add("Java");
        // list.add(10); // Compile-time error

        System.out.println(list);
    }
}
```

Without generics:

```java
List list = new ArrayList();
list.add("Hello");

String s = (String) list.get(0);
```

With generics:

```java
List<String> list = new ArrayList<>();
list.add("Hello");

String s = list.get(0);
```


For removal:

```java
  list.remove(1);
```

EXAMPLE
```java

import java.util.*;

public class Main {
    public static void main(String[] args) {

        List list1 = new ArrayList();

        list1.add(10);
        list1.add("Java");
        list1.add(20.5);
        list1.add(true);
        list1.add('A');

        System.out.println("List1: " + list1);

        System.out.println("Contains Java? " + list1.contains("Java"));
        System.out.println("Contains 100? " + list1.contains(100));

        List list2 = new ArrayList();

        list2.add("Java");
        list2.add(100);
        list2.add(true);

        System.out.println("List2: " + list2);

        List list3 = new ArrayList();

        list3.addAll(list1);

        System.out.println("List3 after addAll(): " + list3);

        list3.retainAll(list2);

        System.out.println("List3 after retainAll(): " + list3);

        list3.clear();

        System.out.println("List3 after clear(): " + list3);
    }
}
```

size();    //returns int 

To convert a Collection (List) into an array, use the toArray() method.
  ex:
   ```java
        List list = new ArrayList();

        list.add(10);
        list.add("Java");
        list.add(20.5);
        list.add(true);

        Object[] arr = list.toArray();
   ```
NOTE:
        1.
        Converts the collection into an Object[].
        2.
        <T> T[] toArray(T[] a);
        Converts the collection into the specified array type (String[], Integer[], etc.).

