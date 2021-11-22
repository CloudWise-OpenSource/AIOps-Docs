### 硬件要求

#### 内存和磁盘  
Zabbix 运行需要物理内存和磁盘空间。如果刚接触 Zabbix，128 MB 的物理内存和 256 MB 的可用磁盘空间可能是一个很好的起点。 然而，所需的内存和磁盘空间显然取决于被监控的主机数量和配置参数。 如果您计划调整参数以保留较长的历史数据，那么您应该考虑至少有几 GB 磁盘空间，以便有足够的磁盘空间将历史数据存储在数据库中。

每个 Zabbix 守护程序进程都需要与数据库服务器建立多个连接。 为连接分配的内存量取决于数据库引擎的配置。

#### CPU  
Zabbix，尤其是 Zabbix 数据库可能需要大量 CPU 资源，该具体取决于被监控参数的数量和所选的数据库引擎。

#### 其他硬件  
如果需要启用短信（SMS）通知功能，需要串行通讯口（serial communication port）和串行GSM调制解调器（serial GSM modem）。USB转串行转接器也同样可以工作。

#### 硬件资源配置参考  
下表提供了几个硬件配置参考：

| 规模     | 平台                    | CPU/内存          | 数据库                                 | 受监控的主机数量 |
| :------- | :---------------------- | :---------------- | :------------------------------------- | :--------------- |
| *小型*   | CentOS                  | Virtual Appliance | MySQL InnoDB                           | 100              |
| *中型*   | CentOS                  | 2 CPU cores/2GB   | MySQL InnoDB                           | 500              |
| *大型*   | RedHat Enterprise Linux | 4 CPU cores/8GB   | RAID10 MySQL InnoDB 或 PostgreSQL      | >1000            |
| *极大型* | RedHat Enterprise Linux | 8 CPU cores/16GB  | Fast RAID10 MySQL InnoDB 或 PostgreSQL | >10000           |

