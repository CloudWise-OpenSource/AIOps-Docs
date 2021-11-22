#### 配置文件

- 将仓库中/conf目录zabbix_server.conf 复制到 **/etc/zabbix/**
- 将仓库中/ui/conf/zabbix.conf.php.example，复制到**/etc/zabbix/**，删除“.example”后缀名

- zabbix_server.conf (zabbix-server配置文件) 除了下面四项配置，其他配置与官方一致：

  ```c
  HistoryStorageURL=http://localhost:8123 // 注意，由于使用的是Clickhouse的rest接口，需要制定Clickhouse监听的http端口
  HistoryStorageTypes=uint,dbl,str,log,text //使用默认配置即可
  HistoryStorageName=clickhouse // 指明History存储方式
  HistoryStorageDBName=zabbix // 指示Clickhouse中所用的数据库名称
  ```

- zabbix.conf.php (Zabbix-web配置文件)

  文件中除了默认配置外，添加$HISTORY配置（链接clickhouse相关）

  ```php
  // Zabbix GUI configuration file.
  // ...省略与官方使用一致的配置项，以下展示对接clickhouse配置项
  
  $HISTORY['storagetype']='clickhouse'; // 指明History存储方式
  $HISTORY['url']='http://localhost:8123';  // Clickhouse接口
  $HISTORY['dbname']='zabbix'; // Clickhouse数据库名称
  $HISTORY['types'] = ['uint', 'text', 'str', 'dbl']; // 默认配置即可
  $ClickHouseDisableNanoseconds=0; // 支持纳秒存储，不需要禁用
  $HISTORY['disable_trends']=1; // 是否禁用trends记录，Clickhouse中创建trends与trends_unit视图，需要设置为0开启
  $YAC_CACHE['enable']=1; // 1：开启，0：关闭。Zabbix-API开启yac缓存，数据将以分钟片段进行缓存。按需配置
  ```