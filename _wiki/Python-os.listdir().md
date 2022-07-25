---
layout: wiki
title: os.listdir()
cate1: Python
cate2: 
description: os.listdir()
keywords: os.listdir, Python
---

## 定义

```
def listdir(path: int) -> List[str]
```

## 解释

os.listdir() 方法用于返回指定的文件夹包含的文件或文件夹的名字的列表，并能够排序。它不包括 . 和 .. 即使它在文件夹中。  
只支持在 Unix, Windows 下使用。

## 用法

os.listdir(path)

## 示例

INPUT

```python
无
```

OUTPUT

```python
无
```

## 注释

在 Macos 中使用也能够返回文件中的文件名，但是是乱序列表。
