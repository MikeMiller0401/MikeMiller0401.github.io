---
layout: wiki
title: QFileDialog.getOpenFileName
cate1: PyQt5
cate2: 
description: QFileDialog.getOpenFileName
keywords: File, OpenFileName
---
QFileDialog.getOpenFileName 是一个用来弹出窗口让用户选择文件的静态方法，它的的官方解释是这样的：  

```
PyQt5.QtWidgets.QFileDialog
@staticmethod # 这是一个静态方法
def getOpenFileName(parent: QWidget | None = ..., # 指定父组件，可以是某个 QWidget 也可以填 None 
                    caption: str = ..., # 弹出窗口的窗口名
                    directory: str = ..., # 弹出窗口的默认目录，不填默认为项目的根目录
                    filter: str = ..., # 弹出窗口的后缀名过滤器
                    initialFilter: str = ..., # 弹出窗口默认选择的过滤器
                    options: Options | Option = ...) # 一些其他的选项
                     -> Tuple[str, str]
```
其返回的是一个 Tuple[str, str] 形式的元组，里面存储着你选择文件的绝对路径和你选择的后缀名。  

输入：  

```python
print(QFileDialog.getOpenFileName(self, "选择图片", "picture_test", "Images (*.jpg)"))
```

输出：  

```python
('C:/Users/14252/Desktop/Program/test006/picture_test/006.jpg', 'Images (*.jpg)')
```