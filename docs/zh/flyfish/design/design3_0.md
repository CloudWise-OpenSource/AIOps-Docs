---
title: 3.0版本
prev: ./design2_2
next: false
---

## 项目目录

```tree
├── doc                                     # 部署文档
├── lcapCodeServer                          # 在线编辑器
│   ├── linux
│   └── macos
├── dataplatform                            # 后端项目源码
│   ├── flyfishDevServer                    # 组件、大屏开发服务
│   └── flyfishServer                       # 主后端服务
├── lcapWeb                                 # 前端项目源码
│   ├── FlyFish-2.1.0.conf                  # nginx 配置
│   ├── config
│   ├── postcss.config.js
│   ├── scripts
│   ├── src
│   ├── themes
│   └── webpack.config.js
└── lcapWww                                 # 飞鱼平台文件资源存储目录
    ├── application_build
    ├── application_tpl
    ├── applications
    ├── build.js
    ├── common
    ├── component_tpl
    ├── components
    ├── scripts
    ├── target
    └── web
```

## 技术栈

#### 1、nodeJs

```
Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！
Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范
当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。
在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性
飞鱼后端主要使用node作为核心开发环境，提供高级I/O操作、编译便捷打包环境
```

#### 2、nginx

```
Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。
飞鱼平台使用 Nginx 代理前端页面，以及反向代理飞鱼后端接口。
```

#### 3、mysql

```
MySQL是一个关系型数据库管理系统。使用C和C++编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。
作为飞鱼平台主要的存储应用，提供高性能的读写操作。
```

#### 4、java

```
Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。
飞鱼后端数据方面的代码由java实现。
```
