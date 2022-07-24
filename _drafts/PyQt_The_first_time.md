---
layout: post
title: PyQt-初次使用需要知道的内容
categories: PyQt
description: 初次使用PyQt需要知道的内容
keywords: PyQt, 笔记
topmost: false
---
## 一、QTdesigner的设置

在使用 PyQt5 进行界面绘制时，可以打开 PyQt5 库自带的 QTdesigner 进行图形化 UI 设计，在 Pycharm 的外部工具中可以添加路径来快速打开，设置如下：
![Pycharm外部工具配置](images\posts\PyQt_The_first_time\QTdesigner.png)
程序目录（designer.exe文件的绝对路径）：C:\ProgramData\Anaconda3\envs\Opencv\Library\bin\designer.exe
工作目录（designer.exe文件所在文件夹的绝对路径）：C:\ProgramData\Anaconda3\envs\Opencv\Library\bin

## 二、使用 UI 文件加载界面

在使用 QTdesigner 进行了 UI 文件的绘制之后，**记得保存**！然后在 Python 文件引用生成的 UI 文件：

```python
from PyQt5 import uic

class Select:

    def __init__(self):
        # 从文件中加载UI定义
        self.ui = uic.loadUi("main.ui")

if __name__ == "__main__":
    app = QApplication([])
    select = Select()
    select.ui.show()
    app.exec_()
```

通过加载 UI 文件的方式进行页面绘制的好处就是在改动界面后，不需要转化，直接运行，特别方便。

## 三、转化UI文件为Python代码

当需要添加额外的申明或者遇到一些奇奇怪怪的问题时，我们可能需要希望直接更改 .py 文件中的代码而不是在 QTdesigner 里面试错，此时就需要将 UI 文件转换为包含了界面设定的 Python 文件，网上关于这部分的资料相当杂乱，我就拿最麻烦但是也最容易实现的一种方法为例：

1. 打开 Python 的命令行或者 Anaconda 的 Anaconda Prompt (可以在你的开始菜单里找到)
2. 进入你 UI 文件所在的文件夹并在路径栏里复制文件夹的路径，在第一部中打开的窗口中键入(注意空格)：

```shell
cd 你刚才复制的路径
```

并回车，来进入 UI 文件所在的文件夹。
3. 在进入你 UI 文件所在的文件夹后，再键入(注意空格)：

```shell
python -m PyQt5.uic.pyuic XXX.ui -o YYY.py
```

（XXX代表你 UI 文件的名字，YYY代表你希望生成的 Python 文件的名字）
并回车，然后在你 UI 文件所在的文件夹下就会生成一个 Python 文件。
![Anaconda Prompt截图](images\posts\PyQt_The_first_time\ui-py.png)
