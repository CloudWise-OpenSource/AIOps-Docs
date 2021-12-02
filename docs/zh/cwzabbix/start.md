# 介绍

&emsp;&emsp;Zabbix-Clickhouse 项目编译出的应用支持将 Zabbix 数据导入到 Clickhouse 列数据库中。Zabbix 在运行中产生的主要数据基本上可以分为history 数据和 trend 数据。其中，trend 数据是根据 history 计算出的各种中间值，如平均值，最高值等。而 history 就是 zabbix 搜集到的各种指标的实时历史数据，我们的目标就是把这些时序数据导入到 clickhouse 中。  
&emsp;&emsp;需要配置 zabbix server 启动所需的配置文件来实现上面的目标。  
&emsp;&emsp;在配置之前需要预先启动 Clickhouse 并导入表结构。启动 Clickhouse 时请注意配置中设置的 http 服务监听的端口号，详细使用方法请查看本文档。