### 从源码包安装
Zabbix编译安装参考：**此版本支持数据源为mysql+clickhouse**，编译时请注意参数！官方文档供参考：[Zabbix源代码安装](https://www.zabbix.com/documentation/5.0/zh/manual/installation/install)

#### 下载源码包

```shell
git clone https://github.com/CloudWise-OpenSource/CW-Zabbix.git
```

#### 创建用户账户

> 以 `root` 、`bin` 或其他具有特殊权限的账户运行 Zabbix 是非常危险的。

```shell
groupadd --system zabbix
useradd --system -g zabbix -d /usr/lib/zabbix -s /sbin/nologin -c "Zabbix Monitoring System" zabbix
```
