# Docs文档使用方法

***

> 本文档系统主要采用VuePress为基础搭建，官方文档地址[VuePress](https://vuepress.vuejs.org/zh/)，文章采用**Markdown格式**，目录需要手动修改

## 文档说明
本仓库下收录了AIOps社区开源产品的技术文档，欢迎所有开发者一起来完善文档，让社区越来越繁荣

### FlyFish
飞鱼平台(FlyFish)是云智慧公司自主设计、研发的一款低门槛、高拓展性的低代码应用开发平台，为数据可视化开发场景提供了高效的一站式解决方案。

仓库地址：[FlyFish仓库地址](https://github.com/CloudWise-OpenSource/FlyFish)

### 摩尔平台
摩尔平台是一套云服务管理平台，它为开发者提供资源分配-环境管理-编码、部署，并支持开源服务、组件、算法的无缝接入，个性化服务需求以流程化的方式完成衔接，使开发者专注于业务需求的定制，提高开发者的工作效率。

注册地址：[摩尔平台注册地址](http://moore.cloudwise.com/app-web/login)

### GAIA数据集
全称Generic AIOps Atlas，是一个用于分析异常检测、日志分析、故障定位等运维问题的全量数据集。

仓库地址：[GAIA数据集](https://github.com/CloudWise-OpenSource/GAIA-DataSet)

### CW-Zabbix
CW-Zabbix是基于Zabbix5.0.4版本的二次开发项目，使得Zabbix支持向Clickhouse写入指标数据
仓库地址：[CW-Zabbix](https://github.com/CloudWise-OpenSource/CW-Zabbix)

## 文档目录结构

文章内容主要在`docs`目录下，下面简单介绍一下`docs`目录

```bash
.
├── .vuepress # vuepress配置
├── en # 存放英文文档
└── zh # 存放中文文档
```

主要介绍一下`docs/.vuepress`的配置文件夹

```bash
.vuepress
├── config
│   ├── head.js
│   ├── locales # 本地化文件夹，一些基本样式js文件存放于这里
│   └── plugins.js
├── config.js # 总配置
├── public # 公共文件夹，主要存储一些静态图片资源
│   ├── en
│   ├── favicon-192x192.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── images # 静态图片资源，文档里的图片放在这里
│   ├── js
│   └── logo-docs.svg
└── styles # 论坛样式
    ├── index.styl
    └── palette.styl
```

## 开始写作

- 文档根据语言存放在`docs`下的对应文件中
    |语言|对应的文件夹名称|
    |---|---|
    |中文|zh/|
    |英文|en/|

- 文档名称可以使用中文或者英文，<u>**建议使用英文名称便于后期国际化**</u>

- 每一篇只能有一个一级（# ）文档标题，用于识别目录

- 静态资源位置（图片），使用markdown格式，文件夹统一使用/images/即可，示例
  
  `![屏幕快照 2021-01-28 11.39.42](/images/x7BPm89tbrTri8KSUYacgP.png)`

  可以参考已有文章


## 修订目录结构

完成文档后，需要根据对应的语言，修改左侧边栏目录
以中文文档为例
样式文件位于`docs/.vuepress/config/locales/zh/sidebar.js`

```javascript
  ...

  '/zh/gaia/': [ //目录，gaia代表zh目录下的gaia分类文件夹
    {
      title: 'Generic AIOps Atlas', //分组标题
      collapsable: false, //是否可以折叠
      children: [ //该分组下的子文档
        '', //该目录下的README.md文件
        'overview', //文档名称,对应的是zh/gaia下的overview.md
        'description',
        ['tasks','任务'], //也可以以这种形式指定左侧标题，如果未指定，默认读取文档首行# 一级标题

      ]
    },
  ],

  ...
```
