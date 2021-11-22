### 软件要求

Zabbix 是基于先进 Apache Web 服务器、领先的数据库引擎和 PHP 脚本语言构建的。

#### 数据库

|    数据库    |     版本      |                             备注                             |
| :----------: | :-----------: | :----------------------------------------------------------: |
|   *MySQL*    | 5.7.3 - 8.0.x | 使用 MySQL 作为 Zabbix 后端数据库。需要InnoDB引擎。 MariaDB 同样支持。 |
| *Clickhouse* | 20.12.*或以上 |    使用 Clickhouse 作为 Zabbix 历史、趋势数据存储数据库。    |

#### 前端

Zabbix 前端需要使用下列软件:

|   软件   |     版本      | 备注 |
| :------: | :-----------: | :--: |
| *Apache* | 1.3.12 或以上 |      |
|  *PHP*   | 5.4.0 或以上  |      |

PHP扩展：

| PHP扩展   | 版本          | 备注     |
| --------- | ------------- | -------- |
| gd        | 2.0 or later  |          |
| bcmath    |               |          |
| libXML    | 2.6.15 或以上 |          |
| xmlreader |               |          |
| xmlwriter |               |          |
| session   |               |          |
| sockets   |               |          |
| mbstring  |               |          |
| gettext   |               |          |
| ldap      |               |          |
| ibm_db2   |               |          |
| mysqli    |               |          |
| oci8      |               |          |
| pgsql     |               |          |
| opcache   |               | 选择安装 |
| yac       |               | 选择安装 |