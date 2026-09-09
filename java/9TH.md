# SET
In Java, Set is an interface used when you want to store unique elements.

The 3 important implementations are:

        1.HashSet
        2.LinkedHashSet
        3.TreeSet


1. What is a Set?

A Set does not allow duplicates.

```java
Set<Integer> s = new HashSet<>();

s.add(10);
s.add(20);
s.add(10);

System.out.println(s);
```

Output could be:

[20, 10]

The second 10 is ignored.


## Java Set Implementations

## HashSet

- Stores unique elements
- Does not maintain any guaranteed order
- Allows one `null` element
- Uses hashing internally
- `add()` → O(1) average
- `remove()` → O(1) average
- `contains()` → O(1) average
- Best when you need fast lookup and uniqueness
- Default size is 16.( capacity)
- Default Java HashMap/HashSet load factor = 0.75

---

## LinkedHashSet

- Stores unique elements
- Maintains insertion order
- Allows one `null` element
- Uses hashing + linked list internally
- `add()` → O(1) average
- `remove()` → O(1) average
- `contains()` → O(1) average
- Best when you need uniqueness + insertion order

---

## TreeSet

- Stores unique elements
- Maintains sorted order
- Generally does not allow `null`
- Uses a Red-Black Tree internally
- `add()` → O(log n)
- `remove()` → O(log n)
- `contains()` → O(log n)
- Best when you need uniqueness + sorted elements
- Provides `first()`, `last()`, `lower()`, `higher()`, `floor()`, and `ceiling()`



The size of container doubles if one extra element is added.

IN hashset if 17th data is put the container get doubles 16->32.



# CONSTRUCTOR OVERLOADING IN LIST

## 1. ArrayList Constructors

### 1.1 Empty ArrayList

```java
ArrayList<Integer> a1 = new ArrayList<>();
```

Creates an empty ArrayList.

### 1.2 ArrayList with Initial Capacity

```java
ArrayList<Integer> a2 = new ArrayList<>(20);
```

Creates an ArrayList with an initial capacity of 20.

Important:

Capacity is not the same as size.

Initial capacity = 20
Size = 0

The list can grow automatically when more elements are added.

### 1.3 ArrayList from Another Collection

```java
ArrayList<Integer> a3 = new ArrayList<>(a1);
```

Creates a new ArrayList containing the elements of a1.

<!-- The constructors are:
ArrayList()
ArrayList(int initialCapacity)
ArrayList(Collection<? extends E> c) -->

## 2. LinkedList Constructors

### 2.1 Empty LinkedList

```java
LinkedList<Integer> l1 = new LinkedList<>();
```

Creates an empty LinkedList.

### 2.2 LinkedList from Another Collection

```java
LinkedList<Integer> l2 = new LinkedList<>(a1);
```

Creates a LinkedList containing the elements of another collection.

<!-- The constructors are:

LinkedList()
LinkedList(Collection<? extends E> c) -->

Important

LinkedList does not have an initial-capacity constructor.

So this is invalid:

```java
LinkedList<Integer> l3 = new LinkedList<>(20);
```

## 3. Vector Constructors

Vector provides more constructor variations.

### 3.1 Empty Vector

```java
Vector<Integer> v1 = new Vector<>();
```

Creates an empty Vector.

### 3.2 Vector with Initial Capacity
```java

Vector<Integer> v2 = new Vector<>(20);
```

Creates a Vector with an initial capacity of 20.

Initial capacity = 20
Size = 0

### 3.3 Vector with Initial Capacity and Capacity Increment

```java
Vector<Integer> v3 = new Vector<>(20, 5);
```

Here:

Initial capacity = 20
Capacity increment = 5

When the Vector needs more capacity, its capacity can increase by thespecified increment.

### 3.4 Vector from Another Collection

```java
Vector<Integer> v4 = new Vector<>(a1);
```

Creates a Vector containing the elements of another collection.

<!-- The constructors are:

Vector()
Vector(int initialCapacity)
Vector(int initialCapacity, int capacityIncrement)
Vector(Collection<? extends E> c) -->


# MAP

Map in Java is used to store data in key-value pairs.

Example:
```java

Map<Integer, String> map = new HashMap<>();
```

map.put(1, "Aayush");
map.put(2, "Rahul");
map.put(3, "Aman");

Here:

Key       Value
----------------
1         Aayush
2         Rahul
3         Aman

## MAP IS ALSO AN INTERFACE": 
                 Map
                  |
        ---------------------
        |         |         |
    HashMap    TreeMap   LinkedHashMap
        |
    Hashtable

    
    
(ADD METHOD RETURNS BOOL TYPE)


