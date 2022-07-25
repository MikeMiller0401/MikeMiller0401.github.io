---
layout: wiki
title: find()
cate1: Python
cate2: 
description: find()
keywords: find, Python
---

## 定义

```
def find(self,
         __sub: str,
         __start: SupportsIndex | None = ...,
         __end: SupportsIndex | None = ...) -> int
```

## 解释

Python find() 方法检测字符串 S 中是否包含子字符串 sub ，如果指定 start 和 end 范围，则检查是否包含在指定范围内，如果包含子字符串返回开始的索引值，否则返回-1。  

## 用法

S.find(sub, start=0, end=len(string))

## 示例

INPUT

```python
str1 = "this is string example....wow!!!";
str2 = "exam";
 
print str1.find(str2);
print str1.find(str2, 10);
print str1.find(str2, 40);
```

OUTPUT

```python
15
15
-1
```

## 注释

反向查找： S.rfind(sub, start=0, end=len(string)) 
