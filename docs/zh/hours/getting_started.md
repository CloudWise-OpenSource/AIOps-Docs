# 快速入门

## 如何在摩尔平台中使用Hours服务接口

###1、环境准备
（1）申请摩尔平台账号，申请地址 https://www.wjx.top/vj/O0QnuCN.aspx
通过审核后会以邮件方式，下发摩尔平台账号

摩尔平台使用手册见文档 http://10.2.3.211:8002/zh/

（2）需要在摩尔平台上面创建开发环境
我们以jupyter服务为示例，在摩尔平台环境列表中创建jupyter环境并启动


启动成功后“查看日志” 获取jupyter 的登录token


进入jupyter


### 2、算法服务调用示例

我们在其中执行调用hours服务接口，相关hours接口详情文档见 http://10.2.3.211:8002/zh/hours

```python
import requests
url_auto_value='http://106.75.53.174:4399/anomaly_detection_api/auto_value'
params = {
    'data_id':'hppivkerl_TRADE_NUM_from2020-07-06to2020-09-05_11206',
    'show_result_as_image':False
}
r = requests.get(url_auto_value, params=params) # now, data update success
r.text
```



