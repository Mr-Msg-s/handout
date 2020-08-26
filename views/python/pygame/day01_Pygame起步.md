---
title: day01 | Pygame介绍
date: 2019-12-20
---

## 1. 初识Pygame

首先对我们要使用的Pygame库进行个简单介绍：

::: tip

pygame (**the library**) is a Free and Open Source [python](https://www.python.org/) programming language library for making multimedia applications like games built on top of the excellent [ SDL](http://www.libsdl.org)library. Like SDL, pygame is highly portable and runs on nearly every platform and operating system. Millions of people have downloaded pygame itself, which is a whole lot of bits flying across the interwebs.

[Pygame官方Wiki](https://www.pygame.org/wiki/about)

:::

看不懂？没关系，简单说，**Pygame是一个利用SDL[1]开发库写就的游戏库，这个游戏库的特色也是致力于2D游戏开发！**

[1]SDL（Simple DirectMedia Layer）是一套开放源代码的跨平台多媒体开发库，使用C语言写成。SDL的作者是Sam Lantinga, Loki Entertainment Software公司的主力程序员。这个SDL开发库提供了数种控制图像、声音、输出入的函数，让开发者只要用相同或是相似的代码就可以开发出跨多个平台（Linux、Windows、MacOS X等）的应用软件。目前SDL多用于开发游戏、模拟器、媒体播放器等多媒体应用领域。它虽然使用C语言写成，不过它也可以使用C++等其他语言进行开发，Pygame就是Python中使用它开发的一个库。

![https://www.pygame.org/images/logo_lofi.png](https://www.pygame.org/images/logo_lofi.png)

## 2. Pygame安装

好了，废话不多说，这个Pygame到底如何用？首先按照标准的Python库使用规则，我们先将Pygame安装到本地。

这里以windows系统为例，且本地安装的Python版本建议为3.6.1以上！

**官网和查老师都最推荐的安装方式如下：**

1. 打开cmd命令行，输入下方命令：(确保python配置过本地path环境变量)

   ```
   python -m pip install -U pygame --user
   ```

2. 安装成功之后可以输入下方命令检查是否能够正常运行，它会弹出一个zz的2D游戏。

   ```
   python -m pygame.examples.aliens
   ```

![检查是否安装正确命令行代码.png](https://i.loli.net/2019/12/30/vCRtZYkq8O79NGS.png)

![检查是否安装正确.png](https://i.loli.net/2019/12/30/5BVXnZ9Qsb8S7OY.png)

3. 好了，Pygame就安装成功了！简单不简单？

