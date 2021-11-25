# CW-Zabbix与Zabbix性能对比测试报告


## 测试背景

我们实现了Zabbix与Clickhouse对接，并且对CW-Zabbix进行了一些优化。需要一些指标来验证优化后的效果与原版Zabbix进行对比。

（说明：本报告中“Zabbix”代表未修改的Zabbix版本，“CW-Zabbix”为优化版本）

## 测试目的  

### CW-Zabbix的读写能力  

为了对比优化后的CW-Zabbix与Zabbix在性能方面的提升，本次测试需要设置对照实验，着重对比数据的读写指标。

1. 对比CW-Zabbix与Zabbix对监控项数据记录写入的处理能力

2. 对比CW-Zabbix与Zabbix对监控项数据记录读取的处理能力

## 测试环境及差异分析

本次设置CW-Zabbix与Zabbix对照组。每组设置一个Zabbix集成环境，将数据库分离。为测试不同机器配置下的表现，测试机器配置使用了4核16G内存与2核4G。分别使用Start_monitorV2.8.4-单机版监控性能指标。

测试机器如下：

|**用途** |**配置** |**涉及服务** |
|---|---|---|
|Zabbix|2C 4G 40G /4C16G 40G|Zabbix server 5.0.4 (Zabbix sender, Zabbix agent),Php7.2, Apache 2.4.6, Start_monitorV2.8.4-单机版|
|Mysql Server|2C 4G 40G /4C16G 40G|Mysql5.7, Start_monitorV2.8.4-单机版|



|**用途** |**配置** |**涉及服务** |
|---|---|---|
|Zabbix|2C 4G 40G /4C16G 40G|Zabbix server 5.0.4 (Zabbix sender, Zabbix agent), Php7.2(opcache, yac), Nginx 1.16.1, Start_monitorV2.8.4-单机版|
|Mysql、ClickHouse Server|2C 4G 40G /4C16G 40G|Mysql5.7, ClickHouse, Start_monitorV2.8.4-单机版|



## 测试方法及策略

### 测试方法

1. Zabbix写入clickhouse能力：

本次CW-Zabbix将History表从Mysql迁移到Clickhouse中，我们需要在History表中写入数据来获取磁盘写入情况。在Zabbix中设置Zabbix Trapper监控项，Key为：sender.ping，存储时间：30d，监控项数量为30万个。通过Zabbix Sender 构建并发脚本，向目标Zabbix Server所有Zabbix Trapper监控项定量发送sender.ping的记录。

2. Zabbix读取clickhouse能力：

测试通过调用Zabbix Api的方式，对key为sender.ping的监控项的历史记录进行查询，就可以查询到History表数据，达到测试目的。采用Jmeter进行并发测试，记录Api的响应情况，对比CW-Zabbix与Zabbix的响应指标。

### 监控策略

1. 机器资源

对Zabbix和ClickHouse所在机器的资源进行监控，主要监控指标如表所示，利用Start_monitor v2.8.4单机版监控测试机器各服务进程占用资源情况。

|**序号** |**指标名称** |**指标值** |
|---|---|---|
|1|CPU使用率|<75%|
|2|内存使用率|<75%|
|3|CPULoad(1/5/15)|<=1倍逻辑核|
|4|磁盘IO（Util%）|<80%|


2. 数据丢失率

在存储与读取测试用，数据丢失率不得高于0.01%。

## 测试场景

1. 写入性能测试场景

|场景|**配置** |**描述** |**指标** |
|---|---|---|---|
|一|2C 4G 40G|使用Zabbix-Sender脚本向两组发送10万、20万条数据。|脚本完成时间、数据落盘时间、磁盘TPS、I/O写入速度、系统资源消耗、数据丢失率|
|二|4C16G 40G|使用Zabbix-Sender脚本向两组发送20万、90万条数据。|脚本完成时间、数据落盘时间、磁盘TPS、I/O写入速度、系统资源消耗、数据丢失率|


2. 读取性能测试场景

|场景|**配置** |**描述** |**指标** |
|---|---|---|---|
|一|2C 4G 40G|使用Jemter请求Zabbix API，查询数据量50w、100w、200w。|请求响应时间、吞吐量、资源消耗、数据丢失率|



## 测试结果

### 写入性能测试结果说明

在测试写入性能前，首先准备30w条Stress Test Trapper监控项模版，导入模板后与主机进行关联。测试时通过Zabbix Sender脚本构造并发，向监控项发送指标数据。在脚本开始执行至数据完全落盘的时间内，根据Start_monitor生成的监测图表可查看各项指标记录。

### 测试场景一

场景一中，设备的配置为2核4G内存40G硬盘。在实验开始前记录对照组每个机器空闲时的资源利用率：

|对照组|Zabbix Server|CW-Zabbix Server|Mysql Server|Mysql、ClickHouse Server|
|---|---|---|---|---|
|CPU 利用率|5.01%|11.06%|8.82%|5.01%|
|CPU user|1.25%|2.01%|2.03%|1.25%|
|CPU Load(1/5/15)|0.17/0.07/0.06|0.23/0.17/0.10|0.17/0.16/0.11|0.17/0.07/0.06|
|内存使用率|10.26%|6.62%|17.47%|10.26%|



执行zabbix sender脚本，向20w监控项发送指标数据，记录脚本的执行完成与数据落盘时间：

|并发数据量|200000|CW-Zabbix|
|---|---|---|
|对照组|Zabbix|7min|
|脚本执行时间|10min|34min|
|数据落盘时间|28min||



根据两组对比测试可得出，Zabbix的脚本执行时间较长，数据落盘时间较快。而CW-Zabbix的脚本执行时间比Zabbix缩短约30%，可以看出CW-Zabbix对外部的响应速度较快，其机制是因为clickhouse在压力条件下，会将数据保存在history_buffer中，而history_buffer是存储在内存中，然后会将数据逐步的写入history。

### 测试场景二

场景二中，设备的配置为4核16G内存40G硬盘。在实验开始前记录对照组每个机器空闲时的资源利用率：

|对照组|Zabbix Server|CW-Zabbix Server|Mysql Server|Mysql、ClickHouse Server|
|---|---|---|---|---|
|CPU 利用率|2.11%|2.40%|6.26%|6.45%|
|CPU user|0.68%|0.62%|1.39%|1.24%|
|CPU Load(1/5/15)|0.15/0.11/0.08|0.16/0.07/0.06|0.5/0.35/0.23|0.47/0.41/0.32|
|内存使用率|5.03%|4.93%|3.39%|4.24%|



执行zabbix sender脚本，根据脚本的执行完成与数据落盘时间进行对比：

|并发数据量|200000|900000|Zabbix|CW-Zabbix|
|---|---|---|---|---|
|对照组|Zabbix|CW-Zabbix|37min|36min30sec|
|脚本执行时间|10min|9min30sec|37min|36min30sec|
|数据落盘时间|10min|9min30sec|||



实验表现出，在非压力条件下，脚本执行结束时间与落盘结束时间相同。而**测试场景一** 在压力条件下，sender脚本结束时间会小于落盘时间。通过场景一分析Zabbix Server数据存储机制，Zabbix会将收集到的内存（history_buffer表），不同的监控项数据会单独放入一个队列中，消费者会从对列中取得数据存储到数据库完成落盘。当系统性能较为优秀的情况下，消费者对于数据的处理较快，内存中的数据能够及时的处理存储到表中。所以脚本执行完毕的同时，数据也完成落盘。

接下来对比在写入数据时，两者的Mysql Server与Mysql、ClickHouse Server对系统的开销情况：

|并发数据量|200000|900000|Zabbix|CW-Zabbix|
|---|---|---|---|---|
|对照组|Zabbix|CW-Zabbix|14.7%!(NOVERB)|15.62%|
|CPU Use|3.04%!(NOVERB)|3.42%|3.94%!(NOVERB)|4.9%|
|CPU利用率|9.04%!(NOVERB)|10.16%|0.78/0.61/0.53 |1.07/0.92/0.78|
|CPU Load(1/5/15)|0.48/0.49/0.41|0.50/0.49/0.44|3.78%!(NOVERB)|5.81%|
|内存使用率|3.6%!(NOVERB)| 5.39%|2428.2Kb/s|4288.92Kb/s|
|磁盘写入速度|900.5Kb/s|1596.52Kb/s|17.8|72.2|
|每次I/O操作数据大小 (扇区)|5.23|63.16|0.83/ms|12.89/ms|
|I/O平均队列长度|0.38/ms|6.01/ms|0|0|
|数据丢失率|0|0|||



在写入数据时，Zabbix Server与CW-Zabbix Server对系统开销情况：

|并发数据量|200000|900000|Zabbix|CW-Zabbix|
|---|---|---|---|---|
|对照组|Zabbix|CW-Zabbix|2.94%|2.34%!(NOVERB)|
|CPU Use|2.17%|1.97%!(NOVERB)|7.83%|6.79%!(NOVERB)|
|CPU利用率|8.51%|7.32%!(NOVERB)| 1.22/0.81/0.62|1.04/0.92/0.73|
|CPU Load(1/5/15)|0.97/0.69/0.62|0.80/0.65/0.58|8.97%|5.61%!(NOVERB)|
|内存使用率|7.67%|4.93%!(NOVERB)|||



通过数据对比。在数据并发为200000、900000时，CW-Zabbix的Mysql、ClickHouse Server服务器系统CPU、内存占用较高，但IO请求平均大小、请求队列长度和磁盘写入速度均大于Zabbix。从CW-Zabbix Server 和Zabbix Server 服务器系统资源消耗情况可得出，CW-Zabbix Server在处理数据时，系统开销总体小于Zabbix Server系统开销，CPU利用率与内存利用率有所降低。

## 读取性能测试结果

使用Jmeter对Zabbix API进行请求，调用接口为查询监控项的历史数据，从而达到查询History表的目的。

### 测试场景一

使用Jmeter请求Zabbix API，记录API响应时间与并发量。对照组中History表数据量均>=300w条，测试时分别查询数据量为50w,100w,200w进行20次以上的请求，取平均响应情况与系统资源消耗。

|请求数据量|50w|100w|200w|CW-Zabbix|Zabbix|CW-Zabbix|
|---|---|---|---|---|---|---|
|对照组|Zabbix|CW-Zabbix|Zabbix|3057|26145|12561|
|平均响应时间 ms|4637|1541|11296|37.1|2.3|4.7|
|吞吐量 次/min|25.2|72|10.3|0.0%|50.0%!(NOVERB)|0.0%|
|异常 %|0.0%|0.0%|2.65%!(NOVERB)||||



根据统计数据得出，首先，CW-Zabbix在查询数据量为50w,100w,200w时，保证了API的正常响应，而Zabbix在查询数据量大于100w条时，出现请求超时异常的情况。其次，CW-Zabbix在接口响应速度上表现优异，进过进一步分析测试，当查询量在100w时（仅当前测试环境下），Zabbix中Mysql查询时间约为3.25s，Clickhouse查询消耗时间为0.021s。

# 结果分析

通过性能测试各项指标对比：在压力条件下，CW-Zabbix Server对测试脚本处理表现优秀，对于系统整体来说，对外体现出了较快的响应速度；在非压力条件下，CW-Zabbix Srever对系统资源开销较小，降低了系统的压力，而且在数据的查询读取中，Clickhouse的快速查询使得zabbix响应迅速，在并发较高的情况下依旧可以保证数据的请求。

