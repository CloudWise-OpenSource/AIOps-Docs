#### 创建 Zabbix 数据库

##### Mysql

```shell
# 创建 zabbix 用户和数据库
shell> mysql -uroot -p<password>
mysql> create database zabbix character set utf8 collate utf8_bin;
mysql> create user 'zabbix'@'localhost' identified by '<password>';
mysql> grant all privileges on zabbix.* to 'zabbix'@'localhost';
mysql> quit;
# 需要先编译 Zabbix 服务后，才会生成 schema.sql 等文件，初始化 Zabbix数据库
shell> cd database/mysql
shell> mysql -uzabbix -p<password> zabbix < schema.sql
# stop here if you are creating database for Zabbix proxy
shell> mysql -uzabbix -p<password> zabbix < images.sql
shell> mysql -uzabbix -p<password> zabbix < data.sql
```

##### Clickhouse

```sql
CREATE DATABASE zabbix;
CREATE TABLE zabbix.history ( day Date, 
 itemid UInt64, 
 clock DateTime, 
 ns UInt32, 
 value Int64, 
 value_dbl Float64, 
 value_str String 
 ) ENGINE = MergeTree(day, (itemid, clock), 8192);
CREATE TABLE zabbix.history_buffer (day Date, 
 itemid UInt64, 
 clock DateTime, 
 ns UInt32, 
 value Int64, 
 value_dbl Float64, 
 value_str String ) ENGINE = Buffer(zabbix, history, 8, 30, 60, 9000, 60000, 256000, 256000000) ;

# 如果需要在 Clickhouse 中创建 trends 与 trends_unit 视图，请执行以下语句
CREATE MATERIALIZED VIEW zabbix.trends
ENGINE = AggregatingMergeTree() PARTITION BY toYYYYMM(clock) ORDER BY (clock, itemid)
AS SELECT
 toStartOfHour(clock) AS clock,
 itemid,
 count(value_dbl) AS num,
 min(value_dbl) AS value_min,
 avg(value_dbl) AS value_avg,
 max(value_dbl) AS value_max
FROM zabbix.history GROUP BY clock,itemid;

CREATE MATERIALIZED VIEW zabbix.trends_uint
ENGINE = AggregatingMergeTree() PARTITION BY toYYYYMM(clock) ORDER > BY (clock, itemid)
AS SELECT
 toStartOfHour(clock) AS clock,
 itemid,
 count(value) AS num,
 min(value) AS value_min,
 avg(value) AS value_avg,
 max(value) AS value_max
FROM zabbix.history GROUP BY clock,itemid;
```