---
layout: wiki
title: copyMakeBorder
cate1: OpenCV
cate2: 
description: copyMakeBorder
keywords: copyMakeBorder, OpenCV
---

## 语法

```
def copyMakeBorder(src: Any,
                   top: Any,
                   bottom: Any,
                   left: Any,
                   right: Any,
                   borderType: Any,
                   dst: Any = None,
                   value: Any = None) -> None
```

## 参数

cv2.copyMakeBorder 函数是一个用来给图片设置边框的函数，其参数的含义如下  

- src ：输入的图片
- top，bottom，left,right :上下左右的边框宽度
- borderType ：边框的填充方式
- dst ：设定画布尺寸，为（src.shape[1] + left + right, src.shape[0] + top + bottom），可为空
- value ：borderType为纯色填充时所填充的颜色，为空时填充黑色

borderType的几种类型：
- cv2.BORDER_CONSTANT：添加的边界框像素值为常数（需要额外再给定一个参数）
- cv2.BORDER_REFLECT：添加的边框像素将是边界元素的镜面反射，类似于gfedcba|abcdefgh|hgfedcba
- cv2.BORDER_REFLECT_101 or cv2.BORDER_DEFAULT：和上面类似，但是有一些细微的不同，类似于gfedcb|abcdefgh|gfedcba
- cv2.BORDER_REPLICATE：使用最边界的像素值代替，类似于aaaaaa|abcdefgh|hhhhhhh
- cv2.BORDER_WRAP：不知道怎么解释，直接看吧，cdefgh|abcdefgh|abcdefg

## 返回值

返回带有边框的图片

## 示例

pic_copy = cv2.copyMakeBorder(pic, 20, 20, 0, 0, cv2.BORDER_CONSTANT, value=[240, 240, 240])

## 注释

反向查找： S.rfind(sub, start=0, end=len(string))
