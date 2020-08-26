---
title: 第四章 | 循环结构
date: 2020-06-05
categories:
 - Java语法入门
tags:
 - Java语法入门
 - 循环结构
---

::: tip

作者：查老师(Charles7c)  
原文：http://charles7c.gitee.io/handout/java/1_intro/day01_%E5%88%9D%E8%AF%86Java.html  
本文为查老师原创文章，商业转载请联系作者获得授权，非商业转载请注明出处。  
本文引用的内容，版权归原作者所有。如有侵权请务必邮件联系我，我会在收到邮件后24小时内进行删除！  

强烈推荐阅读 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

:::

## 前言

**C：** 



## 课程简介

### 课程任务

- 使用while循环实现50份试卷的打印
- 使用for循环实现算数图形的打印和班级平均分计算
- 使用多重循环打印各种图形
- 使用debug调试程序

### 课程目标

- **掌握while循环结构** :fire:
- **掌握do-while循环结构** :fire:
- **掌握for循环结构** :fire:
- 理解各种循环结构的适用场景
- **掌握代码调试**  :weary:
- **掌握多重循环，break和continue的用法** :fire:



## 1. while循环结构

### 1.1 为什么需要循环(程序)

**C：** 上节课中，我们了解到了流程控制语句，也学习了选择语句，那么本章我们要学习的是另一种控制语句：循环。另外**查老师友情提示：**上节课和本章要讲解的控制语句都是非常基础的内容，你去学任何一门编程语言都要学，而且学起来会发现都极其相似。

​    那么本章要学习的循环语句，究竟为什么诞生？我们通过一个案例来了解一下。

**案例演示：张浩Java考试成绩未达到自己的目标。为了表明自己勤奋学习的决心，他决定写一百遍“好好学习，天天向上！”**

​    这么有上进心的学生，如何用Java代码来实现输出100遍”好好学习，天天向上”呢？

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002.png)

​    好像没什么毛病，如果掌握了Ctrl+C和Ctrl+V，就变得更加简单了。但是如果现在这位有上进心的学生，决定写10000遍呢？哪怕是用复制粘贴，这工作量也够”表决心了”！

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image004.png)

 

而如果采用我们本章要学的循环语句之后，再看看会变成怎样？如果想变成写10000遍，只需要调整一下while(条件表达式)  ->  while(i <= 10000)即可，以此类推，变得更加灵活，甚至输出当前是第几遍也是自动计数。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image006.png)



### 1.2 为什么需要循环(生活)

**C：** 还是那句老话，**程序一定是来源或超脱于现实生活的。**最初这些流程控制语句也是从现实生活中取材而出的，你看看下方我们现实生活中的场景，每一个都是要涉及到循环的。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002-1591089763069.png)



### 1.3 什么是循环

**C：** 说完循环的优势和用途，接下来就好好认识一下它的概念吧！下方的[百度百科]有其解释，通俗一点来讲就是**重复性的去做某件事**！**循环语句的固定组成一定包含：循环条件(终止条件)和循环操作(循环体)。**

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002.jpg)

​    下方就是我们要学习的**第一种循环语句语法：while循环**。右侧是循环语句的流程简图，它在写法方面有些类似于上节学到的选择语句。（查老师友情提示：注意规范，缩进和对齐）

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image004-1591089790524.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image006-1591089790525.png)



### 1.4 循环的使用

**C：** 我们了解了Java提供的第一种循环语法:while，接下来我们通过案例来掌握一下使用步骤。

**案例演示1：实现打印50份试卷。**

1. 首先要确定此案例中的循环的两个固定组成部分！即循环条件和循环操作。

2. 套用while循环的语法来编写代码

3. 检查是否能够退出循环。（借助变量i来作条件，如果i的值不变动，会出现死循环）

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002-1591089819131.jpg)

**C：** 诚然，语法结构是需要记忆的，但是这种步骤记忆过程中有一些规律，于是我们可以将循环解决问题的过程分为4个要素。记住四个要素就能基本保证一个循环的完整。

1. 初始化循环变量

2. 循环条件

3. 循环操作

4. 循环出口

**案例演示2：老师每天检查张浩的学习任务是否合格，如果不合格，则继续进行。老师给张浩安排的每天的学习任务为：上午阅读教材，学习理论部分，下午上机编程，掌握代码部分。**

1. 确定此案例中的循环条件为任务不合格则继续进行。循环操作为执行学习任务。

2. 套用while循环语法

3. 检查当合格后是否能正常退出循环

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002-1591089849106.jpg)



### 1.5 do-while循环

**C：** 上方我们学习了第一种循环语法，接下来再学习此种循环语法的一个变种，do-while。为什么需要学习它，我们先来看一个案例。

**案例演示：经过几天的学习，老师给张浩一道测试题，让他先上机编写程序完成，然后老师检查是否合格。如果不合格，则继续编写……**

这个案例，大致一看可确定循环条件为：不合格继续进行 循环操作为：上机编写程序，但是我们发现按照之前的案例所描述应该是先进行判断是否合格，然后才会去执行循环操作。但是本次案例合格不合格不是直接先列出来了，而是先做一次上机（循环操作）然后才开始去判定是否继续。所以用while不太合适，do-while更适合一些。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002-1591089906624.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image004-1591089906624.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image006-1591089906625.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image008.png)

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image010.jpg)



![image-20200602165029726](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\image-20200602165029726.png)



### 1.6 while和do-while的区别

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image002-1591089929764.png)

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image004-1591089929764.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image006-1591089929764.png)

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day04_循环结构.assets\clip_image008-1591089929764.png)



## 2. for循环

### 2.1 为什么使用for循环

**C：** 看看下方需求，可以使用多重if选择结构实现，但是多重if选择结构，结构复杂，啰嗦。

我们这需求只是简单的等值判断，所以我们可以使用Java提供的另一种选择结构语句：switch选择结构，来解决此问题。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image002.png)

**注意事项：**

1. 在满足等值判断的前提下，才可以使用switch来进行判断。 

2. 规范要求：如果没有特殊要求，必须给每一个case后追加break;

   break;是结束某个case，如果没有break，它会发生case的穿透性,继续往下执行直到遇到下一个break;结束！

3. 最好switch加上一个default来进行默认处理。

```java
// 存储名次
int score = 2;
// 使用多重if
if(score == 1){
    System.out.println("参加麻省理工大学组织的1个月夏令营！");
}else if(score == 2){
    System.out.println("奖励惠普笔记本电脑一部！");
}else if(score == 3){
    System.out.println("奖励移动硬盘一个！");
}else{
    System.out.println("没有奖励！");
}

// 使用了switch

```





![点击查看源网页](http://dingyue.nosdn.127.net/EcD2J=NGGWoqOacaootdu9IfUZz5rE5iFCxDubkPlvATD1536646808047compressflag.jpg)





switch的表达式支持的类型有：int、(short、byte、char可以自动类型转换为int)，枚举类型(Enum)、String。自JDK1.7开始，switch支持了字符串的等值判断。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image002.jpg)

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image004.png)![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image006.jpg)



### 2.2 switch和if的对比

**相同点：** 都是用来处理多分支条件的结构。

**不同点：** switch只能处理等值条件判断的情况，多重if选择结构没有switch选择结构的限制，特别适合某个变量处于某个连续区间时的情况。

**补充： ** switch从效率方面考虑，是要比if选择结构快，但是随着硬件的发展，这两者之间的效率差距几乎可以忽略不计。所以用哪个无所谓。



### 2.3 Scanner异常处理

**C：** 目前我们是为了去解决一些简单的程序异常，并不是专业处理，等后期会学习专业的异常处理。

我们清楚nextInt()是属于接收输入的整数，但是用户很有可能不按套路出牌，输入一些非整数的情况，这时候程序就会出现异常。（InputMismatchException输入不匹配异常）

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image002-1591089304473.jpg)

为了使程序更加健壮，程序员在编码时要考虑用户可能出现的任何问题，并且在程序中做出相应的判断，给用户一个友好的提示。

![img](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\1_introduction\day03_选择结构.assets\clip_image004.jpg)

## 5. 作业

### 5.1 课后作业

- 首先自行敲一遍老师上课演示时的代码(注释量要求不低于40%)，并整理笔记，理清整堂课思路

- 


### 5.2 预习作业

- 举例说明，循环结构用于解决哪些问题？
- 要求使用加法运算符对100个数值2求和，请指出循环条件和循环操作
- Java循环结构中使用了哪些关键字？
- while循环的特点是什么？
- 程序调试有哪些步骤？

## 后记

**C：** 今天其实才算是初次学习语法，很多同学在写一些目前要求记忆的内容时，总是很抵触。他想把内容"全都掌握"，不仅仅是死记硬背，但实际上有些东西前期不适合你了解，甚至可以说前期学习，就是老老实实背代码，等到你的代码沉淀到位了，就到了解的时候了。

还有，千万不要试图去研究你研究了很久都整不明白的东西，或许是你的层次不到，也或许是你从未在实际的应用场景接触过，这种情况下你去研究，只会事倍功半，徒劳一番罢了。

这是查老师给你的建议，也是见过很多个班中存在的现象后给出的中肯提议。