---
layout: wiki
title: os.listdir
cate1: Python
cate2: 
description: os.listdir()
keywords: os.listdir, Python
---

## 语法

```
def listdir(path: int) -> List[str]
```

## 参数

os.listdir() 方法用于返回指定的文件夹包含的文件或文件夹的名字的列表。

- path ：文件夹路径，不能为空

如果输入“."，则会输入 py 文件所在文件夹的路径；如果输入“..”，则会输入 py 文件所在文件夹上一层文件夹的路径；如果输入的路径非法，则会引发 NotImplementedError 错误。

> The list is in arbitrary order.

生成的列表是乱序列表（但假设采取000，001，002的方式命名文件，其返回的居然也是顺序列表）。

> It does not include the special entries '.' and '..' even if they are present in the directory.

它不包括特殊条目“.” 和“..”，即使它们存在于目录中。

## 返回值

返回指定的文件夹所包含的文件或文件夹名字的列表

## 示例

INPUT

```python
import os

print(os.listdir("."))
```

OUTPUT

```python
['.idea', 'logging.conf', 'logging.log', 'main.py', 'main.ui', 'picture_test', 'test.py', 'ui.py', '__pycache__']
```

----

INPUT

```python
import os

print(os.listdir("picture_test"))
```

OUTPUT

```python
['001.JPG', '002.JPG', '003.JPG', '004.JPG', '005.JPG', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg']
```

## 注释

只支持在 Unix, Windows 下使用，在 Macos 中使用也能够返回文件中的文件名，但是生成的是乱序列表。

参考文献：

- <https://www.runoob.com/python/os-listdir.html>
