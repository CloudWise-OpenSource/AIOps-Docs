---
title: 3.0版本
prev: ./deploy2_2
next: false
---

## 环境依赖

| 环境    | 说明   |
| ------- | ------ |
| node    | 14.9.0 |
| mysql | 5.7.x  |
| java | jdk8+  |
| nginx   | 1.20.1 |

## 开放端口

| 服务台                              | 端口 |
| ----------------------------------- | ---- |
| mysql | 18103 |
| FlyfishWeb 端口(nginx 静态资源代理) | 8089 |
| FlyfishCodeServer(在线编辑器)端口   | 8081 |
| FlyfishServer(主后端服务)端口       | 19531 |
| FlyfishDevServer(数据后端服务)端口   | 19532 |

## 部署流程

- [01-基础环境准备篇](https://toscode.gitee.com/CloudWise/fly-fish/blob/master/doc/01-%E5%9F%BA%E7%A1%80%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87%E7%AF%87.md)
- [02-FlyFish 平台部署篇](https://toscode.gitee.com/CloudWise/fly-fish/blob/master/doc/03-FlyFish%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2%E7%AF%87.md)
- [03-code_server 部署篇](https://toscode.gitee.com/CloudWise/fly-fish/blob/master/doc/02-code_server%E9%83%A8%E7%BD%B2%E7%AF%87.md)

