---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /java/
typora-root-url: ..\.vuepress\public
---



## Collection

[Source Code](https://github.com/Q10Viking/learncode/tree/main/javabasic/src/org/hzz/collection)

![https://images.gitbook.cn/ae489970-ca62-11e9-bd50-998f3938aecb](/images/java/ae489970-collections.png)



集合的根节点是Collection



## List与Set的区别

- List：有序，按对象进入的顺序保存对象，可重复，允许多个Null元素对象，可以使用Iterator取出所有元素，在逐一遍历，还可以使用get(int index)获取指定下标的元素
- Set：无序，不可重复，最多允许有一个Null元素对象，取元素时只能用Iterator接口取得所有元素，在逐一遍历各个元素



## ArrayList和LinkedList区别

- 是最常见的非线程安全的有序集合

ArrayList：基于动态数组，连续内存存储，适合下标访问（随机访问），扩容机制：因为数组长度固定，超出长度存数据时需要新建数组，然后将老数组的数据拷贝到新数组，如果不是尾部插入数据还会涉及到元素的移动（往后复制一份，插入新元素），使用尾插法并指定初始容量可以极大提升性能、甚至超过linkedList（需要创建大量的node对象）

```java
public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList();
        list.add(1); // 尾插法
        list.add(0,2); // 不是尾插法，会移动数据
        list.add(0,3); // 不是尾插法，会移动数据
        System.out.println(Arrays.toString(list.toArray()));
    }
}
/**
 * [3, 2, 1]
 */
```

LinkedList：基于链表，可以存储在分散的内存中，适合做数据插入及删除操作，不适合查询：需要逐一遍历

**遍历LinkedList必须使用iterator不能使用for循环，因为每次for循环体内通过get(i)取得某一元素时都需要对list重新进行遍历，性能消耗极大**。

另外不要试图使用indexOf等返回元素索引，并利用其进行遍历，使用indexlOf对list进行了遍历，当结果为空时会遍历整个列表。



## Vector

Vector 是 Java 早期提供的线程安全的有序集合，如果不需要线程安全，不建议使用此集合，毕竟同步是有线程开销的。

```java
public synchronized boolean add(E e) {}
```

```java
public class VectorDemo {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("cat");
        vector.add("cat");
        vector.add("dog");
        vector.remove("cat"); // 会删除第一个遇到的元素
        System.out.println(vector); // [cat, dog]
    }
}
```



## HashSet

它底层是实现是通过HashMap来实现的

```java
public HashSet() {
    map = new HashMap<>();
}
// Dummy value to associate with an Object in the backing Map
private static final Object PRESENT = new Object();
public boolean add(E e) {
    return map.put(e, PRESENT)==null;
}

public boolean remove(Object o) {
    return map.remove(o)==PRESENT;
}

public Iterator<E> iterator() {
    return map.keySet().iterator();
}
```

> 从上面的代码可以看到我们往set放元素的时候，实际上是往map的key存放，绑定的value为Object.

```java
public class HashSetDemo {
    public static void main(String[] args) {
        Set<String> set = new HashSet();
        set.add("dog");
        set.add("camel");
        set.add("cat");
        set.add("ant");
        System.out.println(set); // [camel, ant, cat, dog]
    }
}
```



## TreeSet

底层是通过TreeMap实现的

```java
public TreeSet() {
    this(new TreeMap<E,Object>());
}
```

TreeSet 集合实现了自动排序，也就是说 TreeSet 会把你插入数据进行自动排序

```java
public class TreeSetDemo {
    public static void main(String[] args) {
        Set<String> set = new TreeSet();
        set.add("dog");
        set.add("camel");
        set.add("cat");
        set.add("ant");
        System.out.println(set); // [ant, camel, cat, dog]
    }
}
```



## LinkedHashSet

LinkedHashSet 是按照元素的 hashCode值来决定元素的存储位置，但同时又使用链表来维护元素的次序，这样使得它看起来像是按照插入顺序保存的。

```java
public class LinkedHashSetDemo {
    public static void main(String[] args) {
        Set set = new LinkedHashSet();
        set.add("dog");
        set.add("camel");
        set.add("cat");
        set.add("ant");
        System.out.println(set); // [dog, camel, cat, ant]
    }
}
```



## 集合与数组❤️

> 集合转数组，Collection接口提供了toArray方法
>
> ```java
> Object[] toArray();
> <T> T[] toArray(T[] a);
> ```

```java
String[] strings = set.toArray(new String[set.size()]);
String[] strings = vector.toArray(new String[vector.size()]);
String[] strings = list.toArray(new String[list.size()]);
```

> 数组转集合

```java

//-----------------list-------------------------
Arrays工具
public static <T> List<T> asList(T... a) {
    return new ArrayList<>(a);
}
List<String> list = Arrays.asList(arr);


//------------------------------------------------------
// Set构造方法接收一个集合
public HashSet(Collection<? extends E> c) {}
// 所以我们可以先把数组转化为list
Set<T> mySet = new HashSet<>(Arrays.asList(someArray));
```



## 集合排序😊

在 Java 语言中排序提供了两种方式：Comparable 和 Comparator



### Comparable

Comparable 位于 `java.lang` 包下，是一个排序接口，也就是说如果一个类实现了 Comparable 接口，就意味着该类有了排序功能。

Comparable 接口只包含了一个函数，定义如下：

```java
package java.lang;
public interface Comparable<T> {
    public int compareTo(T o);
}
```

> 测试

```java
@Data
@AllArgsConstructor
public class Dog implements Comparable<Dog> {
    private String name;
    private Integer age;
    @Override
    public int compareTo(Dog o) {
        return this.age.compareTo(o.age);
    }
}

public class ComparableTest {
    public static void main(String[] args) {
        Dog[] dogs = new Dog[]{
                new Dog("老旺财", 10),
                new Dog("小旺财", 3),
                new Dog("二旺财", 5),
        };

        Arrays.sort(dogs);
        System.out.println(Arrays.toString(dogs));
    }
}
/**
 * [Dog(name=小旺财, age=3), Dog(name=二旺财, age=5), Dog(name=老旺财, age=10)]
 */
```



### Comparator

Comparator 是一个外部比较器，位于 java.util 包下，之所以说 Comparator 是一个外部比较器，是因为它无需在比较类中实现
Comparator 接口，而是要新创建一个比较器类来进行比较和排序。

Comparator 接口包含的主要方法为 compare()，定义如下：

```java
package java.util;

@FunctionalInterface
public interface Comparator<T> {
    int compare(T o1, T o2);
}
```

> 测试

```java
@Data
@AllArgsConstructor
public class User {
    private String name;
    private Double salary;
}

public class ComparatorTest {
    public static void main(String[] args) {
        List<User> users = Arrays.asList(
                new User("张三", 1000.0),
                new User("李四", 2000.0),
                new User("王五", 900.0)
        );

        // 外部比较器定义
        Comparator<User> comparator = (user1,user2)-> user1.getSalary().compareTo(user2.getSalary());
        users.sort(comparator);

        System.out.println(Arrays.toString(users.toArray()));
    }
}
/**
 * [User(name=王五, salary=900.0), User(name=张三, salary=1000.0), User(name=李四, salary=2000.0)]
 */
```



> 如果两个都存在以谁为准？通过下面的例子可以看出以外部排序为准

```java
public class CombineTest {
    public static void main(String[] args) {
        Book[] books = new Book[]{
            new Book("Java", 100.0, 1000),
                new Book("Python", 200.0, 2000),
                new Book("C++", 50.0, 2000),
                new Book("C", 50.0, 3000),
                new Book("C#", 350.0, 2500),
                new Book("PHP", 350.0, 100),
        };

        Comparator<Book> bookSalesComparator = (book1,book2)->book1.getSales().compareTo(book2.getSales());
        // 内部根据价格
        // 外部根据销量
        Arrays.sort(books, bookSalesComparator);
        Stream.of(books).forEach(System.out::println);
    }
}
/**
 * Book(name=PHP, price=350.0, sales=100)
 * Book(name=Java, price=100.0, sales=1000)
 * Book(name=Python, price=200.0, sales=2000)
 * Book(name=C++, price=50.0, sales=2000)
 * Book(name=C#, price=350.0, sales=2500)
 * Book(name=C, price=50.0, sales=3000)
 */
```



> 如果我们需要先按销量，在按照价格排序，可以在一个比较器中实现就可以了

```java
Comparator<Book> bookComparator = (book1,book2)->{
    // 先根据销量，如果销量相同再根据价格
    if (book1.getSales().equals(book2.getSales())) {
        return book1.getPrice().compareTo(book2.getPrice());
    } else {
        return book1.getSales().compareTo(book2.getSales());
    }
};
```

> 效果

```java
//=================之前===========================
Book(name=Python, price=200.0, sales=2000)
Book(name=C++, price=50.0, sales=2000)
//=================之后============================
Book(name=C++, price=50.0, sales=2000)
Book(name=Python, price=200.0, sales=2000)
```



## 周边问题

### Vector、ArrayList、LinkedList 使用场景有什么区别

Vector 和 ArrayList的内部结构是以数组形式存储的，因此非常适合随机访问，但非尾部的删除或新增性能较差，比如我们在中间插入一个元素，就需要把后续的所有元素都进行移动。

LinkedList 插入和删除元素效率比较高，但随机访问性能会比以上两个动态数组慢



### 数组和集合有什么区别？

数组和集合的区别如下：

  * 集合可以存储任意类型的对象数据，数组只能存储同一种数据类型的数据；
  * 集合的长度是会发生变化的，数组的长度是固定的；
  * 集合相比数组功能更强大，数组相比集合效率更高。
