---
title: 变量和数据类型附录 | Eclipse初识
date: 2020-05-21
categories:
 - Java语法入门
tags:
 - Java语法入门
 - Eclipse
 - IDE
---

::: tip

作者：查老师(Charles7c)  
原文：http://charles7c.gitee.io/handout/java/1_intro/day01_%E5%88%9D%E8%AF%86Java.html  
本文为查老师原创文章，商业转载请联系作者获得授权，非商业转载请注明出处。  
本文引用的内容，版权归原作者所有。如有侵权请务必邮件联系我，我会在收到邮件后24小时内进行删除！  

强烈推荐阅读 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

:::

## 前言

**C：** 在程序开发过程中，得心应手的`IDE`永远令人着迷(vim党除外)。在众多`Java IDE`中，如果单纯从初期学习建议和情怀角度评论的话，查老师更喜欢`Eclipse`。**免费** ，扩展性良好，初期使用体验不错，比较简单，都是初期开发者值得一试的选择。

虽然近两年在中高级开发中有所没落，但是不妨碍我们在初期选择学习一下。提前提示一点：前期很多学生喜欢使用汉化版的软件，但是殊不知，在众多`IDE`中，中文的并不是很多，养成依赖之后尤为可怕，所以有“汉化一时爽，xxxx”一说。对于我们来讲，编程语言大多是英文的，如果我们连使用工具都要用中文，不仅显得不专业，而且也浪费了大好的学习英文的机会！所以谨记查老师的劝告，切勿汉化。

![eclipse_0_1](http://img.muyoung.tech/eclipse_0_1.jpg)

## 1. 没落的王族IDE

### 1.1 Eclipse概述

**C：** `Eclipse`是一个开源免费的`Java IDE`，由`Eclipse`基金会负责维护，为各种编程语言都开发了对应的版本或插件。在查老师看来，它的软件体积和使用方式比较适合初期和入门的编程人员。

![eclipse_1_1](http://img.muyoung.tech/eclipse_1_1.png)

`Jrebel`在2020年初的最新Java生态报告中，`Eclipse`的市场占有率为`24%`，仅次于`IntelliJ IDEA`。

![eclipse_1_2](http://img.muyoung.tech/eclipse_1_2.png)

在`PYPL`的`TOP IDE`热度排行榜上，`Eclipse`则常年霸占第二。（`Eclipse`适配了很多编程语言版本，名字都叫`Eclipse`）。

![eclipse_1_3](http://img.muyoung.tech/eclipse_1_3.png)

这些最新的数据看起来也还可以，实际上在更早前，数据还要更加可观。只不过在2017年左右开始，`JetBrains`家的产品在国内开始风靡。

例如：随着`Spring Boot`框架等现代开发技术的兴起，`JetBrains`适配Java开发的`IntelliJ IDEA`产品以更加方便快捷的优势，快速抢占了`Eclipse`的市场，`Eclipse`的使用者们纷纷"投敌"。下面是近期`IntelliJ IDEA`与`Eclipse`的话题讨论，管中窥豹，可见一斑。

![eclipse_1_4](http://img.muyoung.tech/eclipse_1_4.png)

好了，简单说这些，就是让你了解一下现状，见见"世面"，不至于懵头懵脑的。

本篇毕竟是`Eclipse`的主场，查老师也不再过多给你介绍其他`IDE`产品。想知道更多的，关于`Eclipse`在不同语言内的生态地位对比，自己查阅一下对应语言的学习章节或度娘即可。

### 1.2 Eclipse下载

**C：** 接下来我们准备下载`Eclipse`，`Eclipse`官网有两种下载方式，一种是`Installer`(exe安装包，引导型安装)，另一种是`Package`(zip包，解压就可以使用，类似于绿色软件)。

查老师个人建议以`Package`形式下载，下载地址：https://www.eclipse.org/downloads/eclipse-packages/ 。

下载前一定要牢记好三个注意：

1. 注意要下载的`Eclipse`与安装的`JDK`版本是否契合

   可查看Eclipse官方介绍：https://wiki.eclipse.org/Eclipse/Installation

   |        Eclipse版本         |     首发时间      |                 JDK版本                 |
   | :------------------------: | :---------------: | :-------------------------------------: |
   |   Eclipse 4.5 (Mars火星)   |   2015年6月24日   |                   1.7                   |
   |  Eclipse 4.6 (Neon霓虹灯)  |   2016年6月22日   |                   1.8                   |
   |  Eclipse 4.7 (Oxygen氧气)  |   2017年6月28日   | 1.8及以上，1.9建议选择**4.7.1a** 及以上 |
   |  Eclipse 4.8 (Photon光子)  |   2018年6月27日   |                1.8及以上                |
   |   Eclipse 4.9 (2018-09)    |   2018年9月19日   |                1.8及以上                |
   |         ..........         |    ..........     |               ..........                |
   | **Eclipse 4.15 (2020-03)** | **2020年3月18日** |     **1.8及以上，不再支持32位JVM**      |

2. 注意要下载的`Eclipse`与安装的`JDK`位数是否契合(要么都是32位，要么都是64位)  

3. 注意要下载的`Eclipse`与你的电脑系统和位数是否契合

我们现在用的`JDK 8`，下载当前的最新版`Eclipse`(2020-03版本)就可以了。

![eclipse_1_5](http://img.muyoung.tech/eclipse_1_5.png)

在下载确认页面，我们可以点击`Select Another Mirror`选择其他的镜像源，可以选择国内的镜像源，不然下载太慢了。

![eclipse_1_6](http://img.muyoung.tech/eclipse_1_6.png)

点击后进入`Eclipse`捐献页面，国外盛行捐赠文化，用来支持这些非盈利组织。不打算捐赠就在页面等一会儿，这个页面按理应该会自动开始下载或弹出下载提示，如果没有开始，你直接点击下图的`click here`也可以开始下载。

![eclipse_1_7](http://img.muyoung.tech/eclipse_1_7.png)

等待一会儿，一个`Eclipse`的`zip`安装包就下载好了。

![eclipse_1_8](http://img.muyoung.tech/eclipse_1_8.png)

### 1.3 Eclipse安装

**C：** 查老师刚才的下载方式，下载的就是zip格式的压缩包。它就像你平时下载的一些破解版绿色软件一样，不需要双击`.exe`安装程序进行引导安装，只需要解压就可以使用。

右键点击压缩包，寻找个位置解压，查老师还是希望你将其放到你统一的开发软件安装目录(例如：查老师之前建议的`develop`文件夹)。

![eclipse_1_9](http://img.muyoung.tech/eclipse_1_9.png)

去掉勾选，否则提取的内容额外带一个压缩包同名文件夹。

![eclipse_1_10](http://img.muyoung.tech/eclipse_1_10.png)

解压后，找到解压的位置。其中`.exe`结尾的就是启动程序。为了方便以后快速打开，可以右键在弹出的菜单中将其发送到桌面快捷方式。

![eclipse_1_11](http://img.muyoung.tech/eclipse_1_11.png)

然后我们双击这个`.exe`程序，或者双击快捷方式就可以打开`Eclipse`了。

![eclipse_1_12](http://img.muyoung.tech/eclipse_1_12.png)

只要你上面三条下载注意都核查过了，并且`JDK`的`JAVA_HOME`配置按照查老师要求做了，理论上不会出现别的毛病。没配置好`JAVA_HOME`时，下方就是结果。

当然，如果你是`win 10`还可能会出现一些兼容性问题：我们环境变量明明配置好了，但是还是提示下图，这时候需要你再次去看一下`JAVA_HOME`，甚至不用动，去看环境变量然后确定关闭即可，这个问题曾经在部分同学那儿多次出现。

![eclipse_1_13](http://img.muyoung.tech/eclipse_1_13.png)

打开之后，第一个弹出的窗口会要求你选择或输入一个文件夹地址作为工作空间，文件夹不存在时会自动创建。`Eclipse`会使用此工作空间存储你的代码、项目和一些配置。

注意：如果切换工作空间，那么你的配置等都需要重新设置，不同的工作空间是相互独立的。

![eclipse_1_14](http://img.muyoung.tech/eclipse_1_14.png)

进入之后，则来到了欢迎界面，点击关闭`Welcome选项卡`进入程序主界面。

![eclipse_1_15](http://img.muyoung.tech/eclipse_1_15.png)



## 2. Eclipse初始配置

### 2.1 视图窗口配置

**C：** 进入了主界面，自然意味着我们安装成功了。本身我们下载的就是适配`J2EE`开发的`Eclipse`，所以打开之后，`Eclipse`默认就处于`Java EE`视图下。但是查老师喜欢在Java视图操作，所以我们需要切换一下视图。不同的视图模式，一些窗口和菜单显示也不太一样，建议初期先用Java视图模式。

![eclipse_2_1](http://img.muyoung.tech/eclipse_2_1.png)

点击`Open Perspective`按钮，在弹出的对话框中，选中Java，然后点击`Open`，则切换到了Java视图模式。

![eclipse_2_2](http://img.muyoung.tech/eclipse_2_2.png)

![eclipse_2_3](http://img.muyoung.tech/eclipse_2_3.png)

可以在以后学习使用中，逐渐关闭一些自己用不上的选项卡窗口，也可以随意调整每个选项卡窗口的位置。如果弄乱了，不用怕，直接在右上角视图名上右击，选择`Reset(重置)`即可回到视图窗口初始的状态。

![eclipse_2_4](http://img.muyoung.tech/eclipse_2_4.png)

另外还可以在`Window`菜单的`Show View`选项中去添加一些自己需要的选项卡窗口。

例如：我们之后常用的`Console`控制台。

![eclipse_2_5](http://img.muyoung.tech/eclipse_2_5.png)

最后初步调整后的窗口效果如下，你们后面使用久了，然后按自己习惯调整就好了。

![eclipse_2_7](http://img.muyoung.tech/eclipse_2_7.png)

### 2.2 字符编码配置

**C：** `Eclipse`中默认使用`GBK`作为字符编码，但是为了解决我们之后开发的编码问题，我们要求统一字符编码的配置，将默认的字符编码更改为`UTF-8`。因为这种字符编码具有更好的适用性，对于汉语和外语支持都比较好。

点击`Window` > `Preferences(首选项)`，Eclipse的所有设置基本都在这里。

![eclipse_2_8](http://img.muyoung.tech/eclipse_2_8.png)



在搜索框输入`workspace`，然后选择图示的选项，在右侧的窗口中设置文本文件编码为`Other` > `UTF-8`，然后点击`Apply and Close(应用并关闭)`。

![eclipse_2_9](http://img.muyoung.tech/eclipse_2_9.png)

### 2.3 字体配置

**C：** 最后一个配置，写代码没有一个合适的字体及大小怎么行？

再次打开首选项窗口，依次点击`General` > `Appearance` > `Colors and Fonts` > `Basic`，然后点击`Basic`里的最后一项`Text Font(文本字体)`，双击或者点击`Edit(编辑)`进入修改界面。

![eclipse_2_10](http://img.muyoung.tech/eclipse_2_10.png)

![eclipse_2_11](http://img.muyoung.tech/eclipse_2_11.png)

一般来讲，字体都是使用默认值`Consolas`，只是简单改改大小，方便查看而已，选完之后，一直点确定即可应用成功。实际上，Eclipse现在已经支持在文本编辑时，通过`Ctrl`加 ` +号`或`-号`来调整编辑区的文字大小了，这一步其实可以不用这么麻烦了。

![eclipse_2_12](http://img.muyoung.tech/eclipse_2_12.png)

另外`JetBrains`为开发者设计了一套字体，据说可以降低眼疲劳，有需要的从《Java基础R | 常用资源清单》找一下链接下载即可。

![eclipse_2_13](http://img.muyoung.tech/eclipse_2_13.png)

## 后记

到这里，`Eclipse`的初步安装配置就结束了。`Eclipse`还支持更改主题，自己有兴趣可以了解一下。其他的配置，未来我们课程涉及到了，就会进行对应讲解，目前已经够了。

`Eclipse`还有一段传闻：据说是当初的`SUN`公司名称缩写是`太阳`的意思，而且`SUN`公司因为`Java`的原因真的是如日中天，在互联网行业首屈一指，于是`IBM`希望能出一款产品来盖过太阳的光芒，所以起名为`eclipse(日蚀)`。

孰真孰假，不得而知。只是这个将伴随我们很久的开源`IDE`，请记得善待它。