---
layout: wiki
title: self.button.clicked.connect
cate1: PyQt5
cate2: 
description: self.button.clicked.connect
keywords: button, clicked, connect
---

## 定义

无

## 解释

self.button.clicked.connect(self.click) 是一个将信号与槽链接的方法（method），它的作用是在点击 button 时，执行（self.click）里的方法。

## 用法

无

## 示例

```python
import sys
from PyQt5.QtWidgets import QMainWindow, QApplication, QPushButton, QMessageBox

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.resize(300, 300)
        self.setWindowTitle("test")

        self.button1 = QPushButton('按键', self) # 创建一个button1
        self.button1.clicked.connect(self.click) # 将button1与self.click链接

    def click(self):
        print("click!")
        QMessageBox.about(self, '提示', 'click!')  # 弹窗

if __name__ == '__main__':
    app = QApplication(sys.argv)
    main = MainWindow()
    main.show()
    sys.exit(app.exec_())

```

## 注释

无
