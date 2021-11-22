# 介绍

&emsp;&emsp;Zabbix-Clickhouse项目编译出的应用支持将Zabbix数据导入到Clickhouse列数据库中。Zabbix在运行中产生的主要数据基本上可以分为history数据和trend数据。其中，trend数据是根据history计算出的各种中间值，如平均值，最高值等。而history就是zabbix搜集到的各种指标的实时历史数据，我们的目标就是把这些时序数据导入到clickhouse中。  
&emsp;&emsp;需要配置zabbix server启动所需的配置文件来实现上面的目标。  
&emsp;&emsp;在配置之前需要预先启动Clickhouse并导入表结构。启动Clickhouse时请注意配置中设置的http服务监听的端口号，详细使用方法请查看本文档。