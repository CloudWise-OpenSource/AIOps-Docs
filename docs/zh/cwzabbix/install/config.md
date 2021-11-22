#### 配置文件

- 将仓库中 **/conf** 目录`zabbix_server.conf`复制到 **/etc/zabbix/**
- 将仓库中`/ui/conf/zabbix.conf.php.example`，复制到 **/etc/zabbix/**，删除 “.example” 后缀名

- zabbix_server.conf (zabbix-server 配置文件) 除了下面四项配置，其他配置与官方一致：

  ```c
  HistoryStorageURL=http://localhost:8123 // 注意，由于使用的是 Clickhouse 的 rest 接口，需要制定 Clickhouse 监听的 http 端口
  HistoryStorageTypes=uint,dbl,str,log,text //使用默认配置即可
  HistoryStorageName=clickhouse // 指明 History 存储方式
  HistoryStorageDBName=zabbix // 指示 Clickhouse 中所用的数据库名称
  ```

- zabbix.conf.php (Zabbix-web 配置文件)

  文件中除了默认配置外，添加`$HISTORY`配置（链接 clickhouse 相关）

  ```php
  // Zabbix GUI configuration file.
  // ...省略与官方使用一致的配置项，以下展示对接clickhouse配置项
  
  $HISTORY['storagetype']='clickhouse'; // 指明 History 存储方式
  $HISTORY['url']='http://localhost:8123';  // Clickhouse 接口
  $HISTORY['dbname']='zabbix'; // Clickhouse 数据库名称
  $HISTORY['types'] = ['uint', 'text', 'str', 'dbl']; // 默认配置即可
  $ClickHouseDisableNanoseconds=0; // 支持纳秒存储，不需要禁用
  $HISTORY['disable_trends']=1; // 是否禁用 trends 记录，Clickhouse 中创建 trends 与 rends_unit 视图，需要设置为 0 开启
  $YAC_CACHE['enable']=1; // 1：开启，0：关闭。Zabbix-API 开启 yac 缓存，数据将以分钟片段进行缓存。按需配置
  ```