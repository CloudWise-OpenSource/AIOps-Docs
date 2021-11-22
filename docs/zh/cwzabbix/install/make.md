#### 编译源代码

```shell
shell> yum install unixODBC-devel mariadb-devel mariadb-server net-snmp-devel libxml2-devel libcurl-devel libevent-devel autoconf gcc automake  
shell> autoreconf --install  
shell> autoconf  
shell> ./configure --enable-server --enable-agent --with-mysql --enable-ipv6 --with-net-snmp --with-libcurl --with-libxml2  
shell> make install
# 如果要配置 Zabbix agent 的源代码，您可以运行：
./configure --enable-agent
```

- 当需要使用不在默认位置的库时，在 MySQL 配置文件–with-mysql = / <path_to_the_file> / mysql_config 中添加可选路径，以选择所需的 MySQL 客户端库。 当在同一系统上安装了多个版本的 MySQL 或与 MySQL 一起安装了 MariaDB 时，此功能很有用。