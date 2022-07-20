---
title: 2.1版本
prev: ./deploy2_0
next: ./deploy2_2
---

## 环境依赖

| 环境    | 说明   |
| ------- | ------ |
| node    | 14.9.0 |
| mongodb | 4.0.0  |
| nginx   | 1.20.1 |

## 开放端口

| 服务台                              | 端口 |
| ----------------------------------- | ---- |
| FlyfishWeb 端口(nginx 静态资源代理) | 8089 |
| FlyfishCodeServer(在线编辑器)端口   | 8081 |
| FlyfishServer(主后端服务)端口       | 7001 |

<!-- ## 部署流程

- [01-基础环境准备篇](https://gitee.com/CloudWise/fly-fish/blob/main/doc/01-基础环境准备篇.md)
- [02-FlyFish 平台部署篇](https://gitee.com/CloudWise/fly-fish/blob/main/doc/02-FlyFish平台部署篇.md)
- [03-code_server 部署篇](https://gitee.com/CloudWise/fly-fish/blob/main/doc/03-code_server部署篇.md) -->

<!-- > 或执行一键脚本：

```bash
# CentOS 7.5/7.6  x86-64
# 须使用root账户
mkdir -p /data/app/
cd /data/app/

git clone -b main https://github.com/CloudWise-OpenSource/FlyFish.git FlyFish
or
git clone -b main https://gitee.com/CloudWise/fly-fish.git FlyFish

cd /data/app/FlyFish
bash install.sh install

一键卸载
bash install.sh uninstall
``` -->

## 升级流程

```
# 1、更新代码
$ git checkout main
$ git pull
```
