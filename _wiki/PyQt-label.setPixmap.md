---
layout: wiki
title: label.setPixmap
cate1: PyQt5
cate2: 
description: label.setPixmap()
keywords: File, label, setPixmap()
---

## 语法

```
PyQt5.QtWidgets.QLabel  
def setPixmap(self, a0: QPixmap) -> None
```

## 参数

label.setPixmap()是一个在 label 中实例化图片的方法，图片必须是 QPixmap 形式的。

- self ：类对象，自动传入
- a0 ：需要在label上显示的图像

## 返回值

无

## 示例

INPUT  

```python
import sys
from PyQt5.QtGui import QPixmap
from PyQt5.QtWidgets import QMainWindow, QApplication, QLabel

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.resize(300, 300)
        self.setWindowTitle("test")

        self.label1 = QLabel(self)
        self.label1.resize(200, 100)

        self.pic = QPixmap(r"C:\Users\14252\Desktop\Program\test006\picture_test\001.JPG")
        self.label1.setPixmap(self.pic)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    main = MainWindow()
    main.show()
    sys.exit(app.exec_())

```

## 注释

若想要使图片填充整个label，需要添加：

```
self.label1.setScaledContents(True)
```
