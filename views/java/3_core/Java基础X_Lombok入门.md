---
title: Java基础X | Lombok入门
date: 2020-05-18
categories:
 - Java基础X
tags:
 - Java基础X
 - Lombok
---

::: tip

作者：查老师(Charles7c)  
原文：http://charles7c.gitee.io/handout/java/1_intro/day01_%E5%88%9D%E8%AF%86Java.html  
本文为查老师原创文章，商业转载请联系作者获得授权，非商业转载请注明出处。  
本文引用的内容，版权归原作者所有。如有侵权请务必邮件联系我，我会在收到邮件后24小时内进行删除！  

强烈推荐阅读 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

:::

## 前言

**C：** 在Java开发中，为了符合`封装`这一面向对象特性，我们在构建类时往往要加上`getter/setter`方法。  

在封装的概念里，getter和setter方法是我们提供给外界的统一访问入口，我们可以在其中添加合理的逻辑控制语句来处理一些业务或解决一些不合理的赋值，非常好的特性！  

但实际好多时候我们编写的getter/setter方法体都是空的，IDEA都给你折叠了:sleepy:，它们冗余却不能去除。对此我们经常使用IDE的快捷键来迅速生成，Eclipse中是`Alt+Shift+S > R`，IDEA中是`[FN]+Alt+Insert > Getter and Setter`。  

我相信这些快捷键大家都很熟悉，基本每次创建完类，写完属性之后就是一通"火花带闪电"快速生成，就像下面的代码一样。  

```java
/**
 * 宠物类
 * @author Charles7c
 * @date 2020-05-10
 */
public class Pet {
	// 属性声明
	/** 宠物名 */
	private String name;
	/** 健康值 */
	private int health;
    
	// getter/setter方法
	public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getHealth() {
        return health;
    }
    public void setHealth(int health) {
        this.health = health;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pet pet = (Pet) o;
        return health == pet.health &&
                name.equals(pet.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name, health);
    }
    @Override
    public String toString() {
        return "Pet{" +
                "name='" + name + '\'' +
                ", health=" + health +
                '}';
    }	
}
```

其实不仅仅是`getter/setter`方法，我们通常一个类里还会覆写`toString`、`equals`、`hashCode`等方法，除去这些之后，这个类一无所有(这样类的对象，我们称之为贫血对象，它们只有状态信息，没有行为信息，简单说就是仅存储数据用，例如POJO)。  

毫无疑问，天下苦之久矣，于是Lombok出现了，旨在通过用简单的语法和注解(Annoation)代替众多的冗余代码，接下来我们就好好认识认识它。

![lombok_0_x1](http://img.muyoung.tech/lombok_0_x1.jpg)

## 课程简介

### 本章任务

1. 使用Lombok简化传统Java开发代码

### 本章目标

1. Lombok概述
2. Lombok安装
3. **Lombok常用注解** :fire:
4. Java 14新特性Records 

## 1. Lombok概述

> Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.   
> Never write another getter or equals method again, with one  annotation your class has a fully featured builder, Automate your  logging variables, and much more. 		

**C：** 上方是Lombok官网首页的简介，看不懂？没关系，查老师简单给你描述下，Lombok是一个Java库。这个库提供了很多注解，这些注解会在代码编译的时候，自动生成一些我们之前冗余的`getter 、setter、equals、hashCode`等方法。  

当然，人家还额外加了一些特别的注解，用来优化传统的判空、关流或对象创建等，使用上它之后，你甚至会觉得在使用一个基于Java构建的新语言，下面就是Lombok优化上述Pet类的冗余代码后的效果，一个`@Data`注解直接可以替代掉那些冗余方法们。怎么样，还不错吧，跟着查老师学学吧？  

```java
/**
 * 宠物类
 * @author Charles7c
 * @date 2020-05-10
 */
@Data
public class Pet {
	// 属性声明
	/** 宠物名 */
	private String name;
	/** 健康值 */
	private int health;
}
```

## 2. Lombok安装

### 2.1 IDEA插件安装

**C：** 因为Lombok是在项目编译时，根据我们使用的注解，生成我们不想写的冗余代码。  

也就是说如果你在类中没写对应的`getter/setter`等方法，那在IDE中编写类时，哪怕已经标注了`@Data`，也无法提示及使用它们。  

想要在IDE中正常使用Lombok，必须先在IDE中安装对应的Lombok插件。Lombok为主流的IDE提供了插件支持，我们本次就以IDEA为例，来安装下插件，并测试使用效果。 

![lombok_1](http://img.muyoung.tech/lombok_1.png)

其实Lombok官网对各种IDE如何安装插件是有教程的，IDEA的教程地址：https://projectlombok.org/setup/intellij，我个人认为写得已经很详细了，那接下来查老师就带大家实际操作一遍，你来实现的话记得按我的步骤来。

1. 首先打开IDEA，在菜单`File`中找到`Settings`子菜单。

   ![lombok_2](http://img.muyoung.tech/lombok_2.png)

2. 在弹出的对话框中，选择`Plugins`，然后在`Marketplace`插件市场中输入`lombok`回车搜索，搜索到了点击`Install`安装就可以了。

   ![lombok_3](http://img.muyoung.tech/lombok_3.png)

   安装成功后，直接点击`Restart IDE`重启IDEA，插件就安装成功了。

   ![lombok_4](http://img.muyoung.tech/lombok_4.png)

### 2.2 Lombok依赖引入

**C：** 安装好插件后就可以在你的项目中使用了，0202年了，你们所在的公司应该都在用`Maven`或`Gradle`吧？

Maven依赖如下。

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.12</version>
</dependency>
```

如果是Gradle那就参考下方。

```groovy
compile group: 'org.projectlombok', name: 'lombok', version: '1.18.12'
```

再如果你还是纯Jar包引入，那自己去下载然后导入吧。

## 3. Lombok常用注解

**C：** 安装和引入之后，我们开始看看Lombok的注解们吧！还真不少，要是全来一遍，时间花费可不少而且意义不大，所以我们挑一些常见常用的来介绍演示一下就可以了，对这些注解的使用，查老师奉行基本应用即可，特殊的类，麻烦的属性，不建议采用，以免上头。如果你到时候真的需要，自行搜索一下官网文档https://projectlombok.org/features/all即可。

下面附上注解列表，引用自博客园`794536524`作者原文：https://www.cnblogs.com/mayhh/p/10113169.html

- `val`：用在局部变量前，用于声明一个局部常量，例如：`final int i = 0; `可以写为`val i  = 0; `但是它不可以用于成员变量也不可以用于方法形参。

- `var`：与`val`基本一致，区别在于它不是生成局部常量，而是局部变量。`val和var`会自动进行数据类型推断，不过查老师个人不推荐使用"鸡肋"的`val`和`var`，因为`Java 10`已经增加了`var`关键字来实现局部变量的类型推断（也是吸纳脚本语言：JS、Python等的优势嘛）。

- `@NonNull`：用在属性或方法形参上，如果标注的属性/参数为空，则抛出`NPE(NullPointerException)`。

- `@Cleanup`：用在局部变量之前，类似于`Java 7`的`try-with-resource`，可以进行资源管理(关流)。

- `@Getter/@Setter`：用在属性或类上，再也不用手写`getter/setter`方法了，还可以指定访问范围。

- `@ToString`：用在类上，可以自动覆写`toString`方法，当然还可以加其他参数，例如`@ToString(exclude="id")`排除id属性，`@ToString(includeFieldNames=false)`生成的`toString`不带属性名，`@ToString(callSuper=true)`生成的`toString`会自动调用父类的`toString`内容。

- `@EqualsAndHashCode`：用在类上，自动生成`equals`和`hashCode`方法。

- `@NoArgsConstructor`、`@RequiredArgsConstructor`、`@AllArgsConstructor`：提供的一套构造方法生成注解，见下方详细解释。

- `@Data`：用在类上，相当于同时使用了`@ToString`、`@EqualsAndHashCode`、`@Getter`、`@Setter`和`@RequiredArgsConstrutor`这些注解，对于`POJO类`十分实用。

- `@Value`：用在类上，是`@Data`的不可变形式，相当于为属性添加`final`声明，将所有属性改为了常量，所以只提供`getter`方法，而不提供`setter`方法。

- `@Synchronized`：用在类方法或者实例方法上，效果和`synchronized`关键字相同，区别在于锁对象不同，对于类方法和实例方法，`synchronized`关键字的锁对象分别是类的`class`对象和`this`对象，而`@Synchronized`的锁对象分别是私有静态final对象`LOCK`和私有final对象`lock`，当然，也可以自己指定锁对象。

- `@Builder`：用在类、构造器、方法上，为你提供复杂的`builder APIs`，让你可以更优雅的创建对象。

- `@SneakyThrows`：自动抛出受检异常，而无需显式在方法上使用throws语句。

- `@Getter(lazy=true)`：可以替代经典的`Double Check Lock`样板代码。

- `Log系列注解`：根据不同的注解生成不同类型的log对象，但是实例名称都是`log`，有六种可选实现类。

  - `@CommonsLog`：Creates log = org.apache.commons.logging.LogFactory.getLog(LogExample.class);
  - `@Log`：Creates log = java.util.logging.Logger.getLogger(LogExample.class.getName());
  - `@Log4j`：Creates log = org.apache.log4j.Logger.getLogger(LogExample.class);
  - `@Log4j2`：Creates log = org.apache.logging.log4j.LogManager.getLogger(LogExample.class);
  - **`@Slf4j(推荐)`：Creates log = org.slf4j.LoggerFactory.getLogger(LogExample.class);**  
  - `@XSlf4j`：Creates log = org.slf4j.ext.XLoggerFactory.getXLogger(LogExample.class);

### 3.1 @NonNull

> or: How I learned to stop worrying and love the NullPointerException.
>
> 官方介绍地址：https://projectlombok.org/features/NonNull

我们在设值时，经常要进行非空判断，因为为空后再进行处理可能会引发业务错误，`@NonNull`注解可以帮助我们简化此类代码。  

下图中左侧是我使用Lombok的代码，右侧是`mvn compile`之后，打开的反编译代码(Lombok在编译时自动生成的)。

![lombok_5](http://img.muyoung.tech/lombok_5.png)

### 3.2 @Getter/@Setter

> Never write `public int getFoo() {return foo;}` again.
>
> 官方介绍地址：https://projectlombok.org/features/GetterSetter

`@Getter/@Setter`这两个注解，顾名思义就是为我们生成对应的`getter/setter`方法的，一般情况下直接在类上声明就可以了，这样类中所有的非静态私有属性都会生成`public`修饰的`getter/setter`方法了。

**额外注意：生成的getter遵循布尔属性的约定，例如：`boolean`类型的`deleted`生成的`getter`方法为`isDeleted`而不是`getDeleted`。**  

![lombok_6](http://img.muyoung.tech/lombok_6.png)

当然如果你只是想为部分属性生成对应的`getter/setter`方法，就在属性左侧或上方添加注解即可，它们默认生成的方法都是`public`修饰的。如果你想调整访问级别，可以通过注解内的属性值来进行设置。

![lombok_7](http://img.muyoung.tech/lombok_7.png)

`@Getter/@Setter`的确挺好用的，查老师个人比较喜欢使用，诚意推荐。

还有同学可能担心如果有一天需要自己在`getter/setter`方法中添加逻辑控制怎么办？不用担心，你直接正常写对应的方法即可，因为Lombok检测到你写了之后就不会生成了(这点"眼力见儿"还是有的)。

### 3.3 @ToString

> No need to start a debugger to see your fields: Just let lombok generate a `toString` for  you!
>
> 官方介绍地址：https://projectlombok.org/features/ToString

`@ToString` 就是帮助我们生成非静态属性的`toString`方法的一个注解，它的使用也很简单，一般情况下都是直接在类上面添加即可。有些时候我们不想生成输出某个属性的`toString`，可以直接在属性上标注`@ToString.Exclude`或采用`@ToString(exclude={"属性名",....)`来排除。

![lombok_x8](http://img.muyoung.tech/lombok_x8.png)

如果你不想`toString`方法输出属性名，那么`includeFieldNames=false`适合你。

![lombok_9](http://img.muyoung.tech/lombok_9.png)

另外如果一个子类想要在`toString`中也输出父类的`toString`内容，那么在`@ToString`内添加`callSuper`属性为`true`即可，但注意父类必须也重写`toString`，否则肯定是打印`Object`类默认的方法返回值了(哈希值)。

![lombok_10](http://img.muyoung.tech/lombok_10.png)

### 3.4 构造类注解

> `@NoArgsConstructor`、`@AllArgsConstructor`、`@RequiredArgsConstructor`
>
> Constructors made to order: Generates constructors that take no arguments, one argument per final / non-nullfield, or one argument for every field.
>
> 官方介绍地址：https://projectlombok.org/features/constructor

构造方法也是我们经常要生成的代码了，Lombok提供了三个注解来满足你的各种构造需求。`@NoArgsConstructor`可以自动生成无参数构造，`@AllArgsConstructor`可以按顺序自动生成所有参数的构造，`@RequiredArgsConstructor`仅为标注了`@NonNull`注解的属性生成构造方法。

我举一个`@AllArgsConstructor`注解的例子。

![lombok_11](http://img.muyoung.tech/lombok_11.png)

### 3.5 @Data

> All together now: A shortcut for `@ToString`, `@EqualsAndHashCode`, `@Getter` on all fields, and `@Setter` on all non-final fields, and `@RequiredArgsConstructor`!
>
> 官方介绍地址：https://projectlombok.org/features/Data

在上方Lombok概述的示例中，我们就看到了`@Data`这个注解，大多数人都喜欢使用了此注解，但查老师认为，如果你没有特别需求，仅仅要生成`getter/setter`方法，那使用`@Getter/@Setter`就可以了。

看看它的示例吧，我仅仅写了一个干干净净的Pet类，但是在使用时，它却提示出很多的方法，像`setter、getter、equals`等都提供出来了，显然是Lombok的"锅"，它等价于`@ToString`、 `@EqualsAndHashCode`, `@Getter`、`@Setter`、`@RequiredArgsConstructor`等注解的集合。

![lombok_12](http://img.muyoung.tech/lombok_12.png)

### 3.6 @Cleanup

> Automatic resource management: Call your `close()` methods safely with no hassle.
>
> 官方介绍地址：https://projectlombok.org/features/Cleanup

我们在使用IO系API时，需要自行进行资源管理(关流)，`Java 7`中上线了`try-with-resource`语法来帮助我们实现自动关流，现在Lombok又提供了一个注解来帮助你自动生成资源管理代码，孰优孰劣自行选择吧。

```java
// Java 7的try-with-resource
try(InputStream in = new FileInputStream("d:\\a.txt")){
    // ....
}catch (Exception e){
    e.printStackTrace();
}
```

`@Cleanup` 注解使用后及其反编译代码。

![lombok_13](http://img.muyoung.tech/lombok_13.png)

### 3.7 @Synchronized

> `synchronized` done right: Don't expose your locks.
>
> 官方介绍地址：https://projectlombok.org/features/Synchronized

为了解决多线程不安全的问题，我们经常使用`synchronized`关键字来进行加锁，可以加在方法上也可以使用代码块来加锁，查老师更倾向于代码块形式的使用，更具体且效率高。

`@Synchronized`的效果和`synchronized`关键字一样，它可以用在类方法或者实例方法上，是`synchronized`关键字更安全的变体。  

区别在于锁对象不同，对于类方法和实例方法，`synchronized`关键字的锁对象分别是类的`class`对象和`this`对象，而`@Synchronized`的锁对象则分别是私有静态final对象`$LOCK`和私有final对象`$lock`。当然，也可以自己指定锁对象。

![lombok_15](http://img.muyoung.tech/lombok_15.png)

### 3.8 @Builder

> ... and Bob's your uncle: No-hassle fancy-pants APIs for object creation!
>
> 官方介绍地址：https://projectlombok.org/features/Builder

`@Builder`用在类上，类似于构建者模式的一个注解，它的作用就是帮你生成一套`builder APIs`，将对象构建过程和细节进行封装，更简单和优雅的实现对象的创建及赋值。我们看个对象创建的对比例子吧。

```java
// 不使用@Builder注解 常见的创建对象方式
Pet pet = new Pet();
pet.setName("小白");
pet.setHealth(100);
// ......

// 使用@Builder注解后 创建对象
// 在IDEA中，你直接一路敲下来就可以了 链式编程简直不要太舒服
Pet pet1 = Pet.builder()
    .name("小白")
    .health(100)
    .build();
```

那么`@Builder`注解实际帮助我们添加了什么代码呢？看看反编译后的内容吧。

```java
public class Pet {
    private String name;
    private int health;
	// 1.一个构造
    Pet(String name, int health) {
        this.name = name;
        this.health = health;
    }
	// 2.一个静态构建方法  返回构建类对象
    public static Pet.PetBuilder builder() {
        return new Pet.PetBuilder();
    }
	// 3.一个静态内部构建类
    public static class PetBuilder {
        private String name;
        private int health;

        PetBuilder() {
        }
		// 4.属性同名赋值方法  
        // 【调用完还会返回构建对象，这样可以继续调用其他方法】
        public Pet.PetBuilder name(String name) {
            this.name = name;
            return this;
        }

        public Pet.PetBuilder health(int health) {
            this.health = health;
            return this;
        }
		// 5.最终构建对象方法
        public Pet build() {
            return new Pet(this.name, this.health);
        }
		// 6.一个toString
        public String toString() {
            return "Pet.PetBuilder(name=" + this.name + ", health=" + this.health + ")";
        }
    }
}
```

## 4. Java 14新特性Records

2020年3月17日，`Java 14` 正式 `GA`，虽然我们目前仍然主要使用`Java 8`，但更新肯定是趋势，未来升级到14或更高的某个版本只是时间问题，所以这些新特性我们还是应该关注关注的。

在`Java 14`中有一个预览特性`Records`，`Records` 提供了一种紧凑的语法来`声明类`(我们经常用来做类声明的方式有`class、enum`等，这回又多一个)，以帮助开发者写出更简洁的代码，该特性主要用在特定领域的类，这些类主要用于保存数据，不提供领域行为。再通俗的讲就是我们可以给一些简单的，一般不提供业务操作的类(`POJO类`等)更改下声明类的方法了。官方对`Records`的介绍地址：https://openjdk.java.net/jeps/359 

![lombok_14](http://img.muyoung.tech/lombok_14.png)

来个简单的语法示例吧？看看下面的代码，它也自动解决了头疼的getter、setter、equals、hashCode、和无参构造，这是直接从语法上的调优，可以称之为`语法糖`。

```java
// record声明类语法
{ClassModifier} record TypeIdentifier [TypeParameters] 
    (RecordComponents) [SuperInterfaces] [RecordBody]
// 示例代码：注意这是类，不是方法
public record Pet(String name,int health){
    
}
```

## 后记

**C：** Lombok入门到这里也就介绍完了，感觉怎么样？这只是个入门示例，如果想再多研究研究其他注解和属性，那需要更多的篇幅和时间。

实际上，在现在的业内，Lombok的使用存在着争议，有些人认为它是`开发利器`，有些人`避之不及`。认为它好的是因为它的确减少了大量的冗余代码，相当于写代码随时带个生成器，阅读代码也变得更加清晰直观。认为它不好的是因为它的使用还需要安装额外的插件，且是侵入性的设计(有些人认为它这种改变语法的事应该是语言本身自己该做的)，如果开发中IDEA、JDK、Lombok不配套，那结果显而易见，还有些人认为它影响了业务控制代码的添加和阅读。

孰是孰非，仁者见仁智者见智，查老师个人觉得自己平时练习和测试可以用用，如果上升到公司，还是应该以实际和团队整体出发。
