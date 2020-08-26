---
title: 集合框架附录_List面试题
date: 2020-08-24
categories:
 - 集合框架附录
tags:
 - 集合框架附录
 - List面试题
---

## 前言

**C：** List作为工作中很可能(almost)是用的最多的集合类型，在Java基础面试中必须得问一问，不问都感觉差了点什么。

查老师在本篇就带着你去一次"面试现场"，快来看看你能闯过几关？

**场景：** 在收到了"宇宙合伙公司"的面试邀请后，你在指定时间来到了指定地点参加面试，你面前现在坐着一位"地中海"小哥，他推了推厚重的眼镜，轻咳了两句，开始了面试前的日常"寒暄"....此处略掉5分钟...."寒暄"完毕，小哥直入主题开始考察你的Java基本功。

## 1. 面试官：谈谈你对List的理解？

**你：** List是Java集合框架体系中的一个常用接口，它常见的实现类有`ArrayList`和`LinkedList`，在日常开发中用得最多的是`ArrayList`。

## 2. 面试官：ArrayList和LinkedList的区别是什么？

**你：** `ArrayList`顾名思义，它的底层数据结构是数组，而`LinkedList`底层数据结构是双向链表。

由于不同数据结构的影响，`ArrayList`在面对查找操作时相比于`LinkedList`更有优势， 而`LinkedList`在链表首尾数据插入删除时则更有优势。

## 3. 面试官：那我们本身就有数组了，为什么要用ArrayList呢？

**你：** 在使用原生数组的时候必须要为它指定大小，且长度不可变，而`ArrayList`在封装了原生数组之后解决了此问题。

## 4. 面试官：那你说说ArrayList是如何解决的扩容问题？

**你：** 在大多数情况下我们使用`ArrayList`都是直接通过`new ArrayList()`来先创建一个对象，此时默认就会有一个空的`Object数组`，大小/长度为`0`。

```java
[java.util.ArrayList]

/**
 * Shared empty array instance used for default sized empty instances. We
 * distinguish this from EMPTY_ELEMENTDATA to know how much to inflate when
 * first element is added.
 */
private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
/**
 * The array buffer into which the elements of the ArrayList are stored.
 * The capacity of the ArrayList is the length of this array buffer. Any
 * empty ArrayList with elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA
 * will be expanded to DEFAULT_CAPACITY when the first element is added.
 */
transient Object[] elementData; // non-private to simplify nested class access
// ..........................
/**
 * Constructs an empty list with an initial capacity of ten.
 */
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
// ..........................
```

使用ArrayList在每一次`add`的时候，它都会先去计算这个数组够不够空间，如果空间是够的，那直接追加上去就好了。如果不够，那就得扩容。

当我们 **第一次** `add`添加数据的时候，会给这个数组初始化一个大小，这个大小默认值为`10`。

除了第一次之外，则每一次扩原来的`1.5`倍。比如说，初始化的值是10。现在我第11个元素要进来了，发现这个数组的空间不够了，就会扩到15。

真正进行空间扩容是通过调用`Arrays`的`copyOf()`来对数组进行拷贝。

```java
[java.util.ArrayList]

/**
 * The size of the ArrayList (the number of elements it contains).
 *
 * @serial
 */
private int size; // 默认值为0
// .........
/**
 * Appends the specified element to the end of this list.
 *
 * @param e element to be appended to this list
 * @return <tt>true</tt> (as specified by {@link Collection#add})
 */
public boolean add(E e) {
    // 1.确认内部容量大小是否充足，不够就进行扩容
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    // 2.追加存储数据
    elementData[size++] = e; // 追加的同时并递增长度
    // 3.返回添加成功标识
    return true;
}

// 1.1 
private void ensureCapacityInternal(int minCapacity) {
    ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

/**
 * Default initial capacity.
 */
private static final int DEFAULT_CAPACITY = 10;

// 1.2 计算应该扩充的容量
private static int calculateCapacity(Object[] elementData, int minCapacity) {
    // 如果是第一次添加元素，那就扩充默认的初始化容量：10
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    // 否则扩充最小容量：1
    return minCapacity;
}

// 1.3 扩容前检查
private void ensureExplicitCapacity(int minCapacity) {
    // protected transient int modCount = 0; 来自于AbstractList基类
    modCount++;

    // overflow-conscious code
    // 如果要扩充的容量大于现在内部Object[]数组的长度，就进行扩容
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}

/**
 * The maximum size of array to allocate.
 * Some VMs reserve some header words in an array.
 * Attempts to allocate larger arrays may result in
 * OutOfMemoryError: Requested array size exceeds VM limit
 */
private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

// 1.4 扩容指定容量
/**
 * Increases the capacity to ensure that it can hold at least the
 * number of elements specified by the minimum capacity argument.
 *
 * @param minCapacity the desired minimum capacity
 */
private void grow(int minCapacity) {
    // overflow-conscious code
    // 原有容量
    int oldCapacity = elementData.length;
    /*
    	<< : 左移运算符，num << 1,相当于num乘以2

		>> : 右移运算符，num >> 1,相当于num除以2

		>>> : 无符号右移，忽略符号位，空位都以0补齐
	*/
    // 新容量为原有容量的1.5倍，例如：原有容量为10则新容量为10 + 5 = 15
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    // 如果新容量还不能满足要求就再做一些处理
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    // 创建并拷贝数组
    elementData = Arrays.copyOf(elementData, newCapacity);
}

// 1.5
private static int hugeCapacity(int minCapacity) {
    if (minCapacity < 0) // overflow
        throw new OutOfMemoryError();
    return (minCapacity > MAX_ARRAY_SIZE) ? Integer.MAX_VALUE:MAX_ARRAY_SIZE;
}
```

## 5. 面试官：为什么在日常开发中用得最多的是ArrayList呢？

**你：** 是由底层的数据结构来决定的，在日常开发中，遍历的需求比增删要多，即便是增删也是往往在List的尾部添加就OK了。像在尾部添加元素，`ArrayList`的时间复杂度也就`O(1)`。

另外的是，`ArrayList`的增删底层调用的`copyOf()`被优化过，现代CPU对内存可以 **块操作** ，`ArrayList`的增删一点儿也不会比`LinkedList`慢。

## 6. 面试官：Vector你了解吗？

**你：** Vector底层结构也是数组，一般现在我们已经很少用了。相对于`ArrayList`，它是线程安全的，在扩容的时候它是直接扩容两倍的，比如现在有10个元素，要扩容的时候，就会将数组的大小增长到20。

## 7. 面试官：如果不用Vector，线程安全的List还有什么？

**你：** 首先，我们也可以用`Collections`来将`ArrayList`来包装一下，变成线程安全。但这肯定不是你想听的，对吧。在`java.util.concurrent`包下还有一个类，叫做`CopyOnWriteArrayList`。

要讲`CopyOnWriteArrayList`之前，我还是想说说`copy-on-write`这个意思，下面我会简称为`cow`。比如说在Linux中，我们知道所有的进程都是`init`进程`fork`出来的，除了进程号之外，`fork`出来的进程，默认跟父进程一模一样的。在`fork`之后`exec`之前，两个进程用的是相同的内存空间的，这意味着子进程的代码段、数据段、堆栈都是 **指向** 父进程的物理空间。

当父子进程中有更改的行为发生时，再为子进程分配相应物理空间。这样做的好处就是，等到真正发生修改的时候，才去分配资源，可以减少分配或者复制大量资源时带来的 **瞬间延时** 。简单来说，就可以理解为我们的懒加载，或者说单例模式的懒汉式。等真正用到的时候再分配。

在文件系统中，其实也有`cow`的机制。文件系统的`cow`就是在修改数据的时候，不会直接在原来的数据位置上进行操作，而是重新找个位置修改。比如说：要修改数据块A的内容，先把A读出来，写到B块里面去。如果这时候断电了，原来A的内容还在。这样做的好处就是可以保证数据的完整性，瞬间挂掉了容易 **恢复** 。

再回头来看`CopyOnWriteArrayList`吧，`CopyOnWriteArrayList`是一个线程安全的List，底层是通过 **复制数组** 的方式来实现的。

## 8.  面试官：它的add()方法如何实现的呢？

**你：** 在`add()`方法中其实它会加`lock`锁，然后会复制出一个新的数组，往新的数组里边`add`真正的元素，最后把`array`的指向改变为新的数组。

其实`get()`方法又或是`size()`方法只是获取array所指向的数组的元素或者大小。读不加锁，写加锁。

可以发现的是，`CopyOnWriteArrayList`跟文件系统的COW机制是很像的。

## 9. 面试官：那你能说说CopyOnWriteArrayList有什么缺点吗？

**你：** 很显然，`CopyOnWriteArrayList`是很耗费内存的，每次`set()/add()`都会复制一个数组出来，另外就是`CopyOnWriteArrayList`只能保证数据的 **最终一致性** ，不能保证数据的实时一致性。假设两个线程，线程A去读取`CopyOnWriteArrayList`的数据，还没读完，现在线程B把这个List给清空了，线程A此时还是可以把剩余的数据给读出来。

## 后记

在一阵火花带闪电的对话中，面试小哥的脸上逐渐扬起了微笑，你也缓缓输了一口气，心里暗想：这部分面试应该稳了，下一波基本功又要考啥呢？

**C：** List集合总体来说不会太难，但`CopyOnWriteArrayList`可能很多同学还不知道有这么一个类。继续学习吧！