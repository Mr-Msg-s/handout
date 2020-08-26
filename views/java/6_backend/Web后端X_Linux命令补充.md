# Web后端X | Linux命令补充

## 老师信息

**版权声明：** 本文为查老师原创文章，任何形式的使用请注明作者及出处。  
本文中引用的内容，版权归原作者所有。如有侵权请务必邮件联系我，我将会在24小时内进行删除！

| **老师**        | **电子邮件**      |
| :-------------- | :---------------- |
| Charles(查老师) | charles7c@126.com |

## 前言

**C：** Linux系统内



## 1. Linux Shell初体验

### 1.1 Shell 概述

> 在计算机科学中，Shell俗称壳（用来区别于核），Shell 是一个命令解释器， 它为用户提供了一个向 Linux 内核发送请求以便运行程序的界面系统级程序， 用户可以用 Shell 来启动、 挂起、 停止甚至是编写一些程序。
>
> Shell 还是一个功能相当强大的编程语言， 易编写、 易调试、 灵活性强。它类似于DOS下的 command.com 和后来的 cmd.exe。

### 1.2 Shell Script

> Shell 是解释执行的脚本语言， 在 Shell 编写的脚本中可以调用 Linux 系统命令。
>
> Shell脚本是包含一系列命令的文本文件，Shell读取此文件并执行命令。Shell 脚本的构成： 脚本声明， 注释信息， 可执行语句。
>
> Shell 脚本的应用场景：重复性操作、批量事务处理、自动化运维、定时任务执行

![image-20200531131949560](H:\CHARLES7C_TEACH\查老师的讲义\Charles7cHandouts\docs\java\6_backend\Web后端X_Shell编程.assets\image-20200531131949560.png)

### 1.2 第一个Shell脚本





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