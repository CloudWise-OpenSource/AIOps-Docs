---
title: 1.0版本
prev: false
next: ./design1_0
---

## 项目目录

```tree
├── code-server                               # 在线编辑器
│   ├── linux
│   └── macos
├── config                                    # 初始化数据库配置文件
│   └── database.${dev}.json
├── src                                       # 后端项目核心代码
│   ├── common
│   └── web
│     ├── config
│     ├── controller
│     ├── logic
│     ├── model
│     └── service
├── www                                        # 前端项目核心代码
│   ├── solution-platform-web
│   └── static
│   └── upload
├── Dockerfile                                 # dockerFile
├── options.json
├── options.json
├── pm2.json
├── README.md
└── startup.sh                                 # 启动项目脚本
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

#### 2、thinkJs

```
ThinkJS 是一款面向未来开发的 MVC的Node.js 框架，整合了大量的项目最佳实践，让企业级开发变得更简单、高效。从 3.0 开始，框架底层基于 Koa 2.x 实现，兼容 Koa 的所有功能
框架比较老旧，目前官方已不再维护，可以考虑重构为目前其他优秀流行的nodejs框架，eg: Nestjs、Eggjs、Express等
```

#### 3、redis

```
Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件
用户临时存储用户login、logout信息，可重构
```

#### 4、mysql

```
MySQL 是一款安全、跨平台、高效的，并与 PHP、Java 等主流编程语言紧密结合的数据库系统
作为飞鱼平台主要的存储应用，处理90%数据存储，提供高性能的读写操作
```
