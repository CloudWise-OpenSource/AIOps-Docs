# Dataset description

\iffalse

>  data from **MicroSS**  (data static)
>  >> metric (number)
>  >> log (number)
>  >> business log (from time to time)

There are two folders named **MicroSS**  and Company in the downloaded file.

>  data static for other data from our companions: metric
>  >> metric (number)


\fi

**GAIA**  contains the data from **MicroSS**  (in **MicroSS.zip** ) and metrics from companions (in **Companion Data.zip** ). Statistically, the data from **MicroSS**  contains {} metrics, {} log items and detailed trace data continuously collected for weeks. In this scenario, we also simulate the anomalies that may happen in real systems and provide the record for all anomaly injections for fair evaluation of root cause analysis algorithms. This is achieved by controlling the users' behaviors and mimicking the wrong manipulations to the systems.

The data files are listed below.

|File name|Relevant repository|Download|
|---|---|---|
|**MicroSS.zip** |metric | trace | business | run|// put the link to **MicroSS.zip**  here|
|**Companion Data.zip** |metric | log|// put the link to **Companion Data.zip**  here|



**MicroSS.zip** 

&ensp;&ensp;&ensp;&ensp;**MicroSS.zip**  contains all data in different types, selected from the business simulation system **MicroSS** . It comes from a scenario of logging-in with QR Code. The description of this scenario is also included in **MicroSS.zip.** 

**>> metric** 

&ensp;&ensp;&ensp;&ensp;In "metric" folder, each file contains the metrics of a single node, reformulated from the raw data collected by Metricbeat. The data includes fields as follows.

|timestamp|host_ip|service_name|metric|value|
|---|---|---|---|---|
|2021-07-01 18:00:12|10.1.1.115|redisservice2|docker_network_inbound_bytes|34201179|



timestamp: string of time record with the form YYYY-MM-DD hh:mm:ss

host_ip: the IP of the host running the service named service_name

service_name: name of service or host

metric: name of metric

value: value of metric at the timestamp

**>> trace** 

&ensp;&ensp;&ensp;&ensp;In "trace" folder, each file contains the trace record, reformulated from the raw data collected by OpenTracing. The data includes fields as follows.

|timestamp|host_ip|service_name|trace_id|span_id|parent_id|start_time|end_time|url|status_code|message|
|---|---|---|---|---|---|---|---|---|---|---|
|2021-07-01 10:54:23|10.1.1.117|dbservice1|c124e30fb40651dc|58ac80ceea500f66|8b3e4a4003c5119c|2021-07-01 10:54:22.632751|2021-07-01 10:54:23.151922|[http://10.1.1.117:9388/db_login_methods?uuid=a3036736-da17-11eb-9811-0242ac110003&user_id=ToeLCkHR](http://10.1.1.117:9388/db_login_methods?uuid=a3036736-da17-11eb-9811-0242ac110003&user_id=ToeLCkHR)|200|request call function 1 dbservice1.db_login_methods|



timestamp: string of time record with the form YYYY-MM-DD hh:mm:ss

host_ip: the IP of the host running the service named service_name

service_name: name of service or host

trace_id: UUID of the business trace

span_id: UUID of the node in current trace

parent_id: UUID of the parent node in current trace

start_time:the time this call is created

end_time: the time this call is closed

url: the RPC url

status_code: 200 for normal, and others for anomalies.

message: the out-band message for this call

**>> business** 

In "business" folder, each file contains the business log of a node, reformulated from the raw data. The data includes fields as follows.

|datetime|service|message|
|---|---|---|
|2021-07-01 00:00:00|dbservice2|2021-07-01 14:11:54,950 | INFO | 10.1.1.115 | 172.17.0.2 | dbservice2 | 12ef1025e43ec0ef | 3b12f3fa-da33-11eb-875f-0242ac110003-JKrdHZDV-END!RH0>_qOJ token generate success token=MTYyNTExOTkxNC45NTA0Njk1OjNiMTJmM2ZhLWRhMzMtMTFlYi04NzVmLTAyNDJhYzExMDAwM0pLcmRIWkRWRU5EIVJIMD5fcU9KOjE2MjUxMTk5NzQuOTUwNDc5NTpkZjk2YmIyOThmN2M4ZDg3N2NiYmY2MWZkYWM4ZjBlYw==|



datetime: string of time record with the form YYYY-MM-DD hh:mm:ss

service: the relevant node ID

message: extra information in this log.

**>> run** 

In "run" folder, we provide system log and anomaly injection records. The data includes fields as follows, with the same meaning to files in "business" folder.

|datetime|service|message|
|---|---|---|
|2021-07-01|dbservice1|2021-07-01 22:33:05,033 | WARNING | 10.1.1.117 | 172.17.0.3 | dbservice1 | [memory_anomalies] trigger a high memory program, start at 2021-07-01 22:23:04.230332 and lasts 600 seconds and use 1g memory|



**Companion Data.zip** 

&ensp;&ensp;&ensp;&ensp;**Companion Data.zip**  contains metric and log data provided by the companions of Cloudwise. All the data in **Companion Data.zip**  has achieved strict hyposensitization to protect users and companies' privacy.

**>> metric** 

In "metric" folder, each file records a single time series. Notice that all metrics here are labeled, so that metric anomaly detection can be tackled with fair evaluation. The data includes fields as follows.

|timestamp|value|label|
|---|---|---|
|1546272000000|168899765|0|
|1546272300000|168900938.6|0|
|1546272600000|168902112.2|0|
|1546272900000|168896334|0|
|1546273200000|168880129|0|
|1546273500000|168863924|0|



timestamp: the time of data collection.

value: metric value at the time.

label: anomaly label. 0 for normal, and 1 for anomaly.

**>> log** 

In "log" folder, each file contains a log dataset, mainly for named entity recognition (NER) task. There are currently six data sets available: apache, hadoop, hdfs, kafka, spark, openstack. The data set is labeled with nine entities, which are date, time, message level (LVL), path, function name (FUNC), class name (CLS), HOST, IP, URL.

&ensp;&ensp;&ensp;&ensp;A log in datasets is first segmented according to spaces and some special punctuation marks. Then they are labeled in so-called IOB2 format. Each token in a log is labeled with either ‘O’ (other), ‘B-XXXX’ (beginning token for entity of type ‘XXXX’), ‘I-XXXX’ (inside token for entity type ‘XXXX’).