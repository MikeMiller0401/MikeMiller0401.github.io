---
layout: wiki
title: find
cate1: Python
cate2: 
description: find()
keywords: find, Python
---

## 语法

```
def find(self,
         __sub: str,
         __start: SupportsIndex | None = ...,
         __end: SupportsIndex | None = ...) -> int
```

## 解释

Python find() 方法检测字符串 S 在指定的 [start, end] 范围中是否包含子字符串 sub  

- self ：类，自动传入
- sub ：待检测的字符串
- start ：检测开始的位置
- end：检测结束的位置

## 返回值

如果在指定范围内检查到了子字符串，则返回子字符串的索引值，否则返回-1。  

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
