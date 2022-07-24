---
layout: post
title: PyQt 初次使用
categories: PyQt
description: 初次使用PyQt需要知道的内容
keywords: PyQt, 笔记
topmost: false
---
<<<<<<< Updated upstream
## 一、QTdesigner 的设置
=======
## 一、 QTdesigner 的设置
>>>>>>> Stashed changes

在使用 PyQt5 进行界面绘制时，可以打开 PyQt5 库自带的 QTdesigner 进行图形化 UI 设计，在 Pycharm 的外部工具中可以添加路径来快速打开，设置如下：

<div align=center>
<img src="/images/posts/PyQt_The_first_time/QTdesigner.png" width="60%">
</div>

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

<<<<<<< Updated upstream
## 三、转换 UI 文件为 Python 代码
=======
## 三、转化 UI 文件为 Python 代码
>>>>>>> Stashed changes

当需要添加额外的申明或者遇到一些奇奇怪怪的问题时，我们可能需要希望直接更改 .py 文件中的代码而不是在 QTdesigner 里面试错，此时就需要将 UI 文件转换为包含了界面设定的 Python 文件，网上关于这部分的资料相当杂乱，我就拿最麻烦但是也最容易实现的一种方法为例：

1. 打开 Python 的命令行或者 Anaconda 的 Anaconda Prompt （可以在你的开始菜单里找到）
2. 进入你 UI 文件所在的文件夹并在路径栏里复制文件夹的路径，在第一部中打开的窗口中键入（注意空格）并回车，来进入 UI 文件所在的文件夹。
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> Stashed changes

```shell
cd 你刚才复制的路径
```

3. 在进入你 UI 文件所在的文件夹后，再键入（注意空格）并回车，然后在你 UI 文件所在的文件夹下就会生成一个 Python 文件。

=======
```shell
cd 你刚才复制的路径
```
3. 在进入你 UI 文件所在的文件夹后，再键入（注意空格）并回车，然后在你 UI 文件所在的文件夹下就会生成一个 Python 文件。
>>>>>>> 833d261f3d81a203ae2723cbccf1405975045be4
```shell
python -m PyQt5.uic.pyuic XXX.ui -o YYY.py
```
（XXX代表你 UI 文件的名字，YYY代表你希望生成的 Python 文件的名字）

<<<<<<< Updated upstream

=======
<<<<<<< HEAD
>>>>>>> Stashed changes
<div align=center>
<img src="/images/posts/PyQt_The_first_time/ui-py.png" width="60%">
</div>

<<<<<<< Updated upstream
## 四、使用转换后的 Python 文件构建界面

在你的代码中调用生成的 Python 文件中的类（比如下面的Ui_Form）
=======
## 四、使用 Python 代码加载 UI 界面

然后在你的文件调用生成的 Python 文件中的类（这里是的类是Ui_Form）
>>>>>>> Stashed changes

```python
from PyQt5.QtWidgets import QMainWindow, QApplication
from ui import Ui_Form

class Test(QMainWindow):

    def __init__(self):
        super().__init__()
        # 使用ui文件导入定义界面类
        self.ui = Ui_Form()
        # 初始化界面
        self.ui.setupUi(self)

if __name__ == "__main__":
    app = QApplication([])
    test = Test()
<<<<<<< Updated upstream
    test.show() # 去掉ui
    app.exec_()

```

参考：[白月黑羽的Python Qt 简介](https://www.byhy.net/tut/py/gui/qt_01/)
=======
    test.show() # 这里去掉了ui
    app.exec_()
```

参考：[白月黑羽的Qt图形界面](https://www.byhy.net/tut/py/gui/qt_01/)
=======

<div align=center>
<img src="/images/posts/PyQt_The_first_time/ui-py.png" width="60%">
</div>
>>>>>>> 833d261f3d81a203ae2723cbccf1405975045be4
>>>>>>> Stashed changes
