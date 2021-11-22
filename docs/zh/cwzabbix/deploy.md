---
title: 内网部署
prev: ./deploy
next: false
---

## 安装

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
```
