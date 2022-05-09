---
title: 2.0版本
prev: false
next: ./deploy2_1
---

<!-- ## 安装

(描述依赖项，及其安装/配置方式)

| 环境  | 说明      |
| ----- | --------- |
| jdk   | >= v1.8   |
| node  | >= 8.9.3  |
| redis | >= 4.0.8  |
| mysql | >= 5.6.38 |

1、进入项目目录
```
cd flyfish
```
2、修改mysql、redis配置文件
```
vim src/common/config/adapter.js
vim src/common/config/adapter.production.js
```
3、修改code-server配置文件
```
vim code-server/linux/out/browser/pages/vscode.browserified.js
```

4、build dockerfile
```
docker build -t flyfish .
```

5、run docker
```
docker run -itd --name flyfish -p 8364:8364 -p 3306:3306 -p 6379:6379 -p 8081:8081 flyfish
```

## 服务器管理

```
docker exec -it flyfish /bin/bash
```

## 升级
1、更新代码
```
git checkout master
git pull
```
2、更新容器
```
重复【安装】步骤
``` -->

## 环境依赖

| 环境  | 说明         |
| ----- | ------------ |
| node  | 推荐@12、@14 |
| redis | >= 4.0.8     |
| mysql | >= 5.6.38    |

## 部署流程

- [基础环境准备篇.md](https://gitee.com/CloudWise/fly-fish/blob/2.0/doc/基础环境准备篇.md)
- [code_server 部署篇](https://gitee.com/CloudWise/fly-fish/blob/2.0/doc/code_server部署篇.md)
- [应用平台部署篇 v2.0](https://gitee.com/CloudWise/fly-fish/blob/2.0/doc/应用平台部署篇v2.0.md)
- [组件开发平台部署篇](https://gitee.com/CloudWise/fly-fish/blob/2.0/doc/组件开发平台部署篇.md)

## 升级流程

```
# 1、更新代码
$ git checkout master
$ git pull

# 2、停止并删除容器
$ pm2 restart ${id}

```