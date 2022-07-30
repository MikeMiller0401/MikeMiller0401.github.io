---
layout: wiki
title: QFileDialog.getOpenFileName
cate1: PyQt5
cate2: 
description: QFileDialog.getOpenFileName
keywords: File, OpenFileName
---

## 语法

```
PyQt5.QtWidgets.QFileDialog
@staticmethod
def getOpenFileName(parent: QWidget | None = ...,
                    caption: str = ...,
                    directory: str = ...,
                    filter: str = ...,
                    initialFilter: str = ...,
                    options: Options | Option = ...)
                     -> Tuple[str, str]
```

## 参数

QFileDialog.getOpenFileName 是一个用来弹出窗口让用户选择文件的静态方法。  

- parent ：指定父组件，可以是某个 QWidget 也可以填 None 
- caption：弹出窗口的窗口名
- directory：弹出窗口的默认目录，不填默认为项目的根目录
- filter：弹出窗口的后缀名过滤器
- initialFilter：弹出窗口默认选择的过滤器
- options：一些其他的选项

## 返回值

其返回的是一个 Tuple[str, str] 形式的元组，里面存储着所选择文件的绝对路径和所选择的后缀名。  

## 示例

INPUT  

```python
print(QFileDialog.getOpenFileName(self, "选择图片", "picture_test", "Images (*.jpg)"))
```

OUTPUT  

```python
('C:/Users/14252/Desktop/Program/test006/picture_test/006.jpg', 'Images (*.jpg)')
```

## 注释

无
