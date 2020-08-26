---
title: 初识Java附录 | JDK安装
date: 2020-05-18
categories:
 - Java语法入门
tags:
 - Java语法入门
 - JDK
 - 开发环境
---

::: tip

作者：查老师(Charles7c)  
原文：http://charles7c.gitee.io/handout/java/1_intro/day01_%E5%88%9D%E8%AF%86Java.html  
本文为查老师原创文章，商业转载请联系作者获得授权，非商业转载请注明出处。  
本文引用的内容，版权归原作者所有。如有侵权请务必邮件联系我，我会在收到邮件后24小时内进行删除！  

强烈推荐阅读 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

:::

## 前言

**C：** 要进行Java程序开发，我们首先应该在计算机中，准备好对应的开发环境。我们在`《初识Java》`章节中了解到`JDK`和`JRE`的关系，其中`JDK`就是我们开发者要准备的环境(安装好这个软件即可)。

所以按理来讲，搭好Java基础开发环境就是Java系开发者必会技能。但令人难堪的是，部分同学哪怕学习到了后期，`JDK`还是无法熟练安装。我们就不说家里亲朋好友对我们这些学计算机的"误解"了，单从业内，它也说不过去啊。

![jdk_1_x1](http://img.muyoung.tech/jdk_1_x1.jpg)

所以查老师建议你，收藏好本篇教程，JDK多安装个几遍，它又不是流氓软件，不影响（卸载不残留，重装如新装）。



## 课程简介

### 本章任务

1. 搭建Java开发环境

### 本章目标

1. 了解JDK在业内的使用现状
2. **掌握JDK下载和安装** :fire:
3. **掌握基本的DOS命令** :fire::weary:
4. 掌握path环境变量的配置 :weary:

## 1. JDK安装

### 1.1 JDK概述

**C：** `JDK`的全称是`Java Development Kit`，即Java开发工具包，是Sun公司提供的一套用于开发Java应用程序的开发包，它提供了编译、运行Java程序所需的各种工具和资源，包括Java编译器、Java运行时环境（`JRE`），以及常用的Java类库等。

这里又涉及到一个概念：`JRE`，全称`Java Runtime Environment`，Java运行时环境。它是运行Java程序的必须条件。如果只是运行Java程序，可以只安装`JRE`，无需安装`JDK`。当然在业内，一般都是直接安装`JDK`，因为`JDK`内置了一个`JRE`。



### 1.2 JDK现状

**C：** 再次了解完`JDK`概念之后，我们还要了解下目前JDK的现状。Sun公司当初开发了Java语言，作为Java语言的开发工具包，`JDK`在发展中被Sun公司分化为了两大分支。[可延伸阅读文章：https://www.51cto.com/specbook/11/35089.htm]

一个分支是开源(源代码公开)版本即`Open JDK`，以GPL V2(General Public License)协议的形式开源。另一个是`Sun JDK`，使用JRL(JavaResearch License，Java研究授权协议)发布。

::: tip 小知识

GPL协议，在开源协议里被称为"病毒"协议，只要是基于GPL协议开源的代码来开发项目，那么这项目也必须开源。

JRL协议，是Sun公司自己搞出来的协议，理解起来就是Sun公司公开代码，但是代码的所有权完全归它自己所有，你们能看，但是不能基于它的代码来搞事情。

不过它们对我们使用JDK没有什么影响，它影响的是那些想改动JDK或基于JDK代码二次开发的个人或公司群体，我们又不动JDK代码。

:::

其实两个分支版本，在发展中有很大部分的相同代码，不过`Open JDK`不如`Sun JDK`完整是肯定的(缺少一些特性API)，且一部分代码由于产权等原因无法授权给`Open JDK`使用，便在`Open JDK`中替换为没有产权问题的代码。

很多大公司为了避免版权问题，都在使用基于`Open JDK`开发或自主开发的JDK版本，例如IBM、亚马逊等。

![jdk_1_1](http://img.muyoung.tech/jdk_1_1.png)

另外我们都知道，Sun(升阳公司)在2009年被Oracle(甲骨文公司)收购了，Java相关业务及版权也就归Oracle所有。后续的`JDK`更新当然也就由Oracle负责了，但是Oracle在行业内有一个"不太好"的名声，"什么都要钱，什么都死贵"。(实际上，商业公司的本质就是盈利，Sun公司当初还没做到怎么盈利就没了，Oracle后面继续做这件事也无可厚非)。

在2009年到2019年期间，Oracle没有做什么收费的大动作，但是这种情况在2019年1月1日出现了点变化。Oracle宣布从2019年1月1日起，`Oracle JDK 8`的后续更新将需要收费。`Oracle JDK 8`的`8u211`和`8u212`更新，开始把许可协议从`BCL`换成了`OTN`，这就意味着，你不能在生产环境使用这个版本了。另外`Oracle JDK 11`直接就是收费版。

::: tip 小知识

BCL协议，即Oracle Binary Code License  Agreement，协议规定你可以使用JDK，但是不能进行修改(和上文的JRL类似)。私用和商用都可以，但是JDK中的某些商业特性，是需要付费才可以使用的。OTN协议，即Oracle Technology Network License Agreement，目前新发布的JDK用的都是这个协议，可以私用，商用需要付费。

:::

一石激起千层浪，本来就担心的事终于发生了，很多公司更是开始进行`JDK`版本转移和考虑以后的选择。

下图是2020年初，Jrebel在Java生态报告中，对`JDK`选择的调查结果(中国内也差不多，仅供参考)。根据结果表示，`Oracle JDK(Sun JDK)`和`Oracle Open JDK(Sun Open JDK)`还是占据比较大的市场地位，但`AdoptOpenJDK`的占有率也在迅速提升中。

我们现在学习选择用`Oracle JDK`就可以了，公司内就看公司的架构师或领导想法了。不过一般在生产服务器还是用`Open JDK`更多一些。[可延伸阅读，了解更多的JDK发行版：https://www.oschina.net/news/99836/time-to-look-beyond-oracles-jdk]

![jdk_1_2](http://img.muyoung.tech/jdk_1_2.png)

每个版本的对应`Open JDK`更新也不是无限期，是有支持期限的。`Oracle JDK 8`还有个人版、商业版。这些事其实还挺头疼的，不过我们现在学习用`Oracle JDK`没有问题，进公司到时候就"入乡随俗"吧。

选定好发行版之后，那我们用第几版本呢？下面是Jrebel的报告，其中很明显是`JDK 8`应用最广。虽然截止查老师调整教程今天，JDK已经发布到了`JDK 14`，但是公司追求的是稳定，所以没有太大更新或修复的情况，一般升级就非常慢，你想想Windows 7到Windows 10的用户升级之路就理解了。另外JDK 9、JDK 10都没人用，是因为它们都是过渡版本，类似于Windows8一样，不是长期支持(维护)版本。

![jdk_1_3](http://img.muyoung.tech/jdk_1_3.png)

### 1.3 JDK下载

**C：** 既然我们选择了`Oralce JDK 8`，那就前往Oracle官网下载吧。

1.打开下方的链接，或者自行百度搜索`JDK`，找到类似下方页面。

国际官网：http://www.oracle.com/technetwork/java/javase/downloads/index.html 

中国官网：http://www.oracle.com/technetwork/cn/java/javase/downloads/index.html 

![jdk_1_4](http://img.muyoung.tech/jdk_1_4.png)

2.下拉到页面最下方，找到`Java Archive`点击进入`JDK`历史版本存档页面。

![jdk_1_5](http://img.muyoung.tech/jdk_1_5.png)

你看`Java SE 8`分为了两个链接，`8u211及之后`收费和`8u202及之前`免费。

![jdk_1_6](http://img.muyoung.tech/jdk_1_6.png)

3.点击`Java SE 8(8u2020 and earlier)`进入下载页面，然后选择你所需的平台版本。大多数同学应该用的都是Windows 64位的系统，选择下方箭头指示的版本即可。

![jdk_1_7](http://img.muyoung.tech/jdk_1_7.png)

记得勾选`卖身协议`。

![jdk_1_8](http://img.muyoung.tech/jdk_1_8.png)

Oracle现在要求下载`JDK`必须先登录，没有帐号的同学，自己先注册一个吧。网络是真慢！忍忍！

![jdk_1_9](http://img.muyoung.tech/jdk_1_9.png)

4.终于下载好了，查老师家里开的热点网络，太慢了。

![jdk_1_10](http://img.muyoung.tech/jdk_1_10.png)

### 1.4 JDK安装

**C：** 开始安装`JDK`吧，和安装QQ等软件一样，而且不是流氓软件，不会静默给你下载一个"全家桶"。

1.双击程序安装包，开始进行`JDK`安装，点击下一步。

![jdk_1_11](http://img.muyoung.tech/jdk_1_11.png)

2.点击更改，更改`JDK`的安装位置。**Tips：**   为了防止出现，你自己安装的软件自己都找不到在哪儿这种问题，所以我们统一安装位置，任选一个磁盘，在其下新建一个`develop`的文件夹，用于以后安装所有开发软件。查老师演示时将`develop`文件夹放在了`d`盘下。

![jdk_1_12](http://img.muyoung.tech/jdk_1_12.png)

在弹出的更改安装目录对话框中，只需要修改前面的盘符`d:`和文件夹`develop`，后面的子文件夹`Java\jdk1.8.0_xxx\`不需要修改，然后点击确定。如果文件夹不存在，安装时会自动创建。**安装路径不要出现空格，中文，符号等！**  

![jdk_1_13](http://img.muyoung.tech/jdk_1_13.png)

这个时候程序将要安装的位置已经更改，点击下一步即可开始安装。

![jdk_1_14](http://img.muyoung.tech/jdk_1_14.png)

**补充(了解)：关于我们安装JDK时到底安装了些什么？**  

我们选中第一个`开发工具`时，右侧给出了提示，这是安装的`JDK`。它是最主要的，甚至我们可以说只需要有它就可以。

![jdk_1_15](http://img.muyoung.tech/jdk_1_15.png)

当我们选中第二个`源代码`时右侧给出提示，这是Java 8的源代码，因为Java是公开源代码的。

![jdk_1_16](http://img.muyoung.tech/jdk_1_16.png)

当我选中第三个`公共JRE`时，右边给出提示，这是一个独立的`JRE`，我们可以不用安装。不过一般情况我们都选择安装，目的是为了以后如果有一些Java程序想单独运行，那么必须配套一个`JRE`，到那时候就可以用上了。

![jdk_1_17](http://img.muyoung.tech/jdk_1_17.png)

比如下方是做支付宝第三方支付支持时，支付宝官方给提供的一个做签名校验的Java程序。后缀名为`.jar`的是Java程序，但是如果想运行此程序就必须依赖上方的一个独立`jre`，我们刚才安装选择界面看到的就是它。(支付宝官方下载下来的这工具，就自己给你带着这个JRE)

![jdk_1_18](http://img.muyoung.tech/jdk_1_18.png)

4.等待安装，这步只是在安装`JDK`。

![jdk_1_19](http://img.muyoung.tech/jdk_1_19.png)

安装完`JDK`后，会弹出一个提示框，提示我们安装的`JDK`版本不受到收费影响，点确定即可。

![jdk_1_20](http://img.muyoung.tech/jdk_1_20.png)

5.因为刚才我们没有放弃独立`JRE`的安装，所以现在开始安装它，自己更改好安装路径。最好类似我下方示例，然后点击下一步。

![jdk_1_21](http://img.muyoung.tech/jdk_1_21.png)

等待安装。

![jdk_1_22](http://img.muyoung.tech/jdk_1_22.png)

点击关闭，即完成安装。

![jdk_1_23](http://img.muyoung.tech/jdk_1_23.png)

安装完成后，你的桌面不会出现任何图标，不用大惊小怪，`JDK`是开发环境，不是QQ这类软件。

`JDK`的安装目录如下。（刚才之所以说可以不安装那个独立`JRE`，因为`JDK`本身自己就自带一个`JRE`，为什么`JDK`会自带一个？其实我们也能理解，因为我们用`JDK`开发Java程序，但是开发好后也需要进行运行测试啊，所以自然需要这`JRE`(运行环境)了。）

![jdk_1_24](http://img.muyoung.tech/jdk_1_24.png)

独立`JRE`的安装目录如下。

![jdk_1_25](http://img.muyoung.tech/jdk_1_25.png)

安装完之后，我们想测试一下`JDK`是否安装成功，可以运行`JDK`安装目录下`bin`目录内的`java.exe`程序。如果你看不到`.exe`，记得自行开启下计算机的扩展名显示。

在`Windows`中我们习惯双击，但是却发现`java.exe`会弹出一个黑窗口一闪而过。这是因为这种程序没有主界面，它们需要在特别的系统内运行，比如说我们的`DOS`系统，下面就和查老师去学一下基本的`DOS`使用吧。

![jdk_1_26](http://img.muyoung.tech/jdk_1_26.png)

## 2. DOS命令

### 2.1 什么是DOS？

**C：** 那`DOS`是什么呢？它的全称是`Disk Operating System`，即磁盘操作系统。简单点说，你看过的电影里，黑客们是不是在计算机的一个黑窗口中"运指如飞"？这个所谓的黑窗口不是`DOS`就是Linux系。

实际上`DOS`它就是早期主流的计算机操作系统，后来Windows等主打可视化的系统出现，才让计算机逐渐摆脱专业的概念，变得"平民化"，走入千家万家。之前之所以专业化，就是因为这个系统需要通过命令来进行计算机操作，而不能使用鼠标点来点去，所以非专业人士去背命令和习惯这使用方式，简直"太难"了。

![jdk_2_1](http://img.muyoung.tech/jdk_2_1.png)

### 2.2 进入DOS系统

在Windows系统任何位置，可以通过按下`Windows`键 + `r`键，在左下角弹出的运行窗口输入`cmd`然后回车，就可以弹出`DOS`命令行。

![jdk_2_2](http://img.muyoung.tech/jdk_2_2.png)

另外，还可以通过在`开始菜单`中直接搜索`cmd`，然后`右键以管理员身份运行`的方式打开。

![jdk_2_3](http://img.muyoung.tech/jdk_2_3.png)

进入了`DOS`命令行。要求左上方有管理员标识(如果没有此标识，你创建文件等都没有权限，有些命令甚至提示不存在)。当你是`Windows 10`系统，那么很可能没有，因为`Windows 10`对于权限的把控比较严格，所以你可以采取上方的第二种方法进入`DOS`命令行。

![jdk_2_4](http://img.muyoung.tech/jdk_2_4.png)

进入了`DOS`命令行，先认识下组成，前部分是当前你在`DOS`系统所处的路径（当前目录/文件夹，目录就是文件夹的意思，之后不再解释），后部分就是可以输入命令的位置。

![jdk_2_5](http://img.muyoung.tech/jdk_2_5.png)

上方的路径，等价于你在`Windows`系统中进入了如下位置。

![jdk_2_6](http://img.muyoung.tech/jdk_2_6.png)

### 2.3 DOS常用命令

#### 2.3.1 查看列表

在上图中，如果我们在`Windows`系统中进入了某个路径，可以很直观的看到当前路径下的所有文件和文件夹。那么在`DOS`中如何实现这一目的呢？

输入`dir`命令，即可列出当前所处位置的文件和文件夹列表，如下图所示。

![jdk_2_7](http://img.muyoung.tech/jdk_2_7.png)

#### 2.3.2 切换目录

那如果不想待在默认的路径了，想切换到其它位置。

- 相同磁盘的目录切换，直接通过`cd 目录路径`来切换。（这个路径必须存在，不然切换不过去）

  例如：我想切换到当前目录下的`Documents`目录。

  ![jdk_2_9](http://img.muyoung.tech/jdk_2_9.png)

- 不同磁盘的目录切换，先通过`盘符:`来切换磁盘，然后`cd 目录路径`（注意cd后有空格）再切换到对应位置。

  例如：我想切换到刚才`JDK`的安装目录。

  如果路径长，在输入的时候，还可以通过`Tab`键来进行内容补全。例如下方的输入，输入完`De`就可以按一下`Tab`键快速补全。因为DOS会自动识别所在目录下的内容名字，如果能匹配到就可以快速补全，当然如果有多个`De`打头的内容，那就尽量输入多一些字母后再按`Tab`，这样就更精准。

  ![jdk_2_8](http://img.muyoung.tech/jdk_2_8.png)

还有一些特别的路径切换，比如返回上一级目录。在`Windows`系统中，鼠标点一下返回键就可以了，在`DOS`中，可以通过`cd ..`命令来切换。`..`和`.`是每个目录下都存在的两个隐藏文件夹，它们一个代表上一级目录，一个代表当前目录。

![jdk_2_10](http://img.muyoung.tech/jdk_2_10.png)

![jdk_2_11](http://img.muyoung.tech/jdk_2_11.png)

还有在磁盘比较深的路径时，可以输入`cd  /`来快速回到磁盘根目录下。

![jdk_2_12](http://img.muyoung.tech/jdk_2_12.png)

#### 2.3.3 运行程序

在`Windows`中如果想运行程序，我们都是双击程序快捷方式或程序启动文件。而在`DOS`中，如果我们想要运行程序，只需要输入程序启动文件路径，然后回车即可。

例如：我想运行钉钉程序，我知道它的启动程序地址，那么就可以利用`Tab`快速提示着来输入好地址。下图的`""`是按`Tab`自动生成的，`DOS`里为了防止空格产生的影响，可以加`""`进行包裹，表示一个整体。

![jdk_2_13](http://img.muyoung.tech/jdk_2_13.png)

这个路径实在太长了，如果在`DOS`中，使用过了且没关闭`DOS`窗口的情况下，还需要使用时，建议按`↑`或`↓`方向键，翻一翻历史命令。

### 2.4 测试JDK是否安装成功

OK，掌握了`DOS`基本使用，这时候我们再来通过它运行下`java.exe`，输入`java.exe`路径太长了，我们可以偷点懒。

先通过`Windows`找到`java.exe`，然后在地址栏输入`cmd`，回车后就可以快速进入程序所在的位置了。

![jdk_2_14](http://img.muyoung.tech/jdk_2_14.png)

![jdk_2_15](http://img.muyoung.tech/jdk_2_15.png)

然后就可以运行`java.exe`了，`DOS`中可以省略`exe`之类的后缀。后面追加一个`-version`可以用来查看`JDK`的版本，如果出现下方所示内容，说明`JDK`的安装是完全正常的。

![jdk_2_16](http://img.muyoung.tech/jdk_2_16.png)

## 3. 环境变量

### 3.1 环境变量概述

**C：** 在刚才的内容搞定后，其实我们的Java开发环境已经搭建完了，我们之后开发Java程序会一直使用刚才的`java.exe`程序。不过现在使用还是挺麻烦的，每次都要在`DOS`中先找到程序或输入程序路径才能运行，有没有什么办法可以在`DOS`任意目录使用`java.exe`呢？

看看百度百科了解一下环境变量吧，其实环境变量就是操作系统里存储的一些参数或关键值，每个在操作系统里运行的程序都可以获取到这些存储的内容。（学到第二章《变量和数据类型》就可以更好的理解变量的作用了，到时候记得回来再看看）

![jdk_3_1](http://img.muyoung.tech/jdk_3_1.png)

在`开始菜单`中搜索`环境变量`，点击`编辑系统环境变量`，打开`系统属性`对话框。

![jdk_3_2](http://img.muyoung.tech/jdk_3_2.png)

在`高级`选项卡中，点击`环境变量`就可以进入修改环境变量的对话框。

![jdk_3_3](http://img.muyoung.tech/jdk_3_3.png)

![jdk_3_x1](http://img.muyoung.tech/jdk_3_x1.png)



### 3.2 path环境变量 

其中`path`环境变量就是用来存储路径列表的，里面存储了一个个的路径。当我们在`DOS`命令行中直接输入程序的名字然后回车，这时候`DOS`会先在当前目录下搜索该文件，若找到则运行之，若找不到该文件，则根据`path`环境变量所设置的路径列表，顺序逐条地搜索这些路径下是否有该程序，有的话也能运行。

这就是我们现在需要的，可以有效解决我们为了运行`java.exe`而很麻烦的输入路径等，一劳永逸。有些同学还把一些游戏启动程序存到了`path`环境变量。

### 3.3 配置JAVA_HOME环境变量

接下来就将`java.exe`的程序目录存储到`path`环境变量吧。

1.点击`系统变量`下的`新建`，在弹出`新建系统变量`窗口后，将变量值设为JDK安装路径(bin目录上一级)，变量名设为`JAVA_HOME`(之所以叫这名，是因为Maven、Tomcat等日后所用软件大多会使用到此环境变量)，所以名称不允许修改。

![jdk_3_5](http://img.muyoung.tech/jdk_3_5.png)

2.上方存储的环境变量还不完整，并且没添加到`path`环境变量。所以我们需要在`path`环境变量中再做些处理。

点击系统变量中的`path`环境变量，然后点击`编辑`，删除其中Oracle默认生成的一个目录配置（JDK 1.8之后就开始自动加上了，但是这个地址对我们用处不大，删掉）。

![jdk_3_6](http://img.muyoung.tech/jdk_3_6.png)

点击`新增`，添加一条`%JAVA_HOME%\bin`变量，`%JAVA_HOME%`表示引用`JAVA_HOME`环境变量的值，这一条变量等价于在`path`中添加了`D:\Develop\Java\jdk1.8.0_202\bin`。

![jdk_3_7](http://img.muyoung.tech/jdk_3_7.png)

注意：`Win7`系统的`path`环境变量是全部在一起的，而不是像`Win10`这样一条条很清晰。自己去新加入一条：`%JAVA_HOME%\bin;`（结尾这一定要用英文;号来分隔其他的环境变量啊！）。还有我们在配置Java安装路径的时候需要格外注意不要将之前的还有一些系统的`path`配置删除，也不要写错。（不要在蓝色选中状态时直接输入，会全部替换的！！！）

![jdk_3_8](http://img.muyoung.tech/jdk_3_8.png)

### 3.4 测试效果

配置好`path`环境变量之后，关闭所有的`DOS`窗口。再重新打开`DOS`后，输入`java -version`，我们看到和之前一样的效果，而且我们不用在输入`java.exe`冗长的路径了！

![jdk_3_9](http://img.muyoung.tech/jdk_3_9.png)



## 后记

**C：** `JDK`的安装环节也就介绍到这。补充了一些基础内容，比较杂的感觉，但实际是顺序流程的学习，好好看看本篇文章大纲！每个步骤一定要实践一下！加油！有问题可以邮箱或订阅号联系查老师。

![jdk_4_1](http://img.muyoung.tech/jdk_4_1.png)