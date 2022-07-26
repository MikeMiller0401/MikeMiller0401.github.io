---
layout: post
title: Python如何使用配置文件生成logging
categories: Python
description: Python如何使用配置文件生成logging
keywords: Python, 笔记
topmost: false
---

## 一、什么是日志

 日志是一种可以追踪某些软件运行时所发生事件的方法。软件开发人员可以向他们的代码中调用日志记录相关的方法来表明发生了某些事情。通过记录和分析日志可以了解一个系统或软件程序运行情况是否正常，也可以在应用程序出现故障时快速定位问题。  
 如果应用的日志信息足够详细和丰富，还可以用来做用户行为分析，如：分析用户的操作行为、类型洗好、地域分布以及其它更多的信息，由此可以实现改进业务、提高商业利益。  

## 二、日志的级别

在软件开发阶段或部署开发环境时，为了尽可能详细的查看应用程序的运行状态来保证上线后的稳定性，我们可能需要把该应用程序所有的运行日志全部记录下来进行分析，这是非常耗费机器性能的。  
当应用程序正式发布或在生产环境部署应用程序时，我们通常只需要记录应用程序的异常信息、错误信息等，这样既可以减小服务器的I/O压力，也可以避免我们在排查故障时被淹没在日志的海洋里。  
那么，怎样才能在不改动应用程序代码的情况下实现在不同的环境记录不同详细程度的日志呢？这就是日志等级的作用了，我们通过配置文件指定我们需要的日志等级就可以了。  
Python自带的logging库包含这几个常用的等级（从上到下等级依次提高）：

- DEBUG
- INFO
- NOTICE
- WARNING
- ERROR
- CRITICAL
  
## 三、日志包含的内容

- 事件发生的时间
- 事件发生的位置
- 事件级别
- 事件内容
  
上面这些都是一条日志记录中可能包含的字段信息，当然还可以包括一些其他信息，如进程ID、进程名称、线程ID、线程名称等。日志格式就是用来定义一条日志记录中包含那些字段的，且日志格式通常都是可以自定义的。

## 四、logging的模块

logging模块的四大组件：  

1. loggers：提供应用程序代码直接使用的接口
2. handlers：用于将日志记录发送到指定的目的位置
3. filters：提供更细粒度的日志过滤功能，用于决定哪些日志记录将会被输出（其它的日志记录将会被忽略）
4. formatters：用于控制日志信息的最终输出格式

## 五、使用配置文件生成logging

作为开发者，我们可以通过以下3种方式来配置logging:

1. 使用Python代码显式的创建loggers, handlers和formatters并分别调用它们的配置函数；
2. 创建一个日志配置文件，然后使用fileConfig()函数来读取该文件的内容；
3. 创建一个包含配置信息的dict，然后把它传递个dictConfig()函数；

第二种配置方式相对于第一种配置方式的优点在于，它将配置信息和代码进行了分离，这一方面降低了日志的维护成本，同时还使得非开发人员也能够去很容易地修改日志配置。

---

使用配置文件时，需要在程序中调用配置文件：

```python
import logging.config

# 读取日志配置文件内容
logging.config.fileConfig('logging.conf')

# 创建一个日志器logger，并以file_log为接口
logger = logging.getLogger('file_log')

# 创建一个日志器logger1，并以console_log为接口
logger1 = logging.getLogger('console_log')


def test():
    # 日志输出
    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warn message')
    logger.error('error message')
    logger.critical('critical message')

    logger1.debug('debug message')
    logger1.info('info message')
    logger1.warning('warn message')
    logger1.error('error message')
    logger1.critical('critical message')

test()
```

配置文件logging.conf内容如下：
注意：配置文件不能有中文注释，否则可能报错。此处注释为撰写文章时添加，建议在使用时将注释全部删除。

```conf
[loggers]
keys=root,console_log,file_log # 声明 logger ，必须声明，且必须要有root作为最高级别的接口

[handlers]
keys=fileHandler,consoleHandler # 声明 handler ，必须声明

[formatters]
keys=form1 # 声明 formatter ，必须声明

[logger_root] # 定义 root ，每个 logger 中都必须要有 level 和 handlers 
level=ERROR # 设定触发的最低级别
handlers=fileHandler # 设定要调用的 handlers

[logger_console_log]
level=DEBUG
handlers=consoleHandler
qualname=console_log # 设定在配置文件之外的名字
propagate=0 # 是否将日志向上级传递，一般认为0

[logger_file_log]
level=DEBUG
handlers=fileHandler
qualname=file_log
propagate=0

[handler_consoleHandler] # 定义 consoleHandler ，每个 handler 中都必须要有 class 和 args 
class=StreamHandler # 设定 StreamHandler 作为类名
args=(sys.stdout,) # args表示传递给 class 所指定的 handler 类初始化方法参数，它必须是一个元组（tuple）的形式。
# sys.stdout 表示将控制台作为输出对象
level=DEBUG
formatter=form1 # 日志采用 form1 的格式输出

[handler_fileHandler]
class=FileHandler
args=('logging.log', 'a') # 'logging.log' 表示以该文件作为输出对象
level=ERROR
formatter=form1

[formatter_form1] # 定义输出格式
format=%(asctime)s - %(levelname)s - %(filename)s[:%(lineno)d] - %(funcName)s - %(message)s # 日志输出内容
datefmt=%Y-%m-%d %H:%M:%S # 日志输出时间的格式
```

上述程序的输出：  

- 在控制台中会打印

```
2022-07-26 14:42:32 - DEBUG - test.py[:19] - test - debug message
2022-07-26 14:42:32 - INFO - test.py[:20] - test - info message
2022-07-26 14:42:32 - WARNING - test.py[:21] - test - warn message
2022-07-26 14:42:32 - ERROR - test.py[:22] - test - error message
2022-07-26 14:42:32 - CRITICAL - test.py[:23] - test - critical message
```

- 在文件logging.log中会输出

```
2022-07-26 14:42:32 - ERROR - test.py[:16] - test - error message
2022-07-26 14:42:32 - CRITICAL - test.py[:17] - test - critical message
```
