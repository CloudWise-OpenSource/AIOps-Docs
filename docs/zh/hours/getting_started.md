# 快速上手

如何在摩尔平台中使用Hours服务接口

## 环境准备
申请摩尔平台账号，申请地址 https://www.wjx.top/vj/O0QnuCN.aspx
通过审核后会以邮件方式，下发摩尔平台账号

摩尔平台使用手册见文档 http://10.2.3.211:8002/zh/

需要在摩尔平台上面创建开发环境
我们以jupyter服务为示例，在摩尔平台环境列表中创建jupyter环境并启动


启动成功后“查看日志” 获取jupyter 的登录token


进入jupyter


我们在其中执行调用hours服务接口，相关hours接口详情文档见 http://10.2.3.211:8002/zh/hours

### 算法服务调用示例
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

## Hours API使用
1、直接访问  
[http://106.75.53.174:4399/hours](http://106.75.53.174:4399/hours)
2、获取数据
点击Data Layer API， 选择“Get time series data by name”，所有参数均选择默认，点击Execute

点击"try it out"

ok，现在你的第一个可视化的数据已经出现

3、获取一系列数据
你一定不满足于就看这一个Toy数据，Hours提供了完整的数据访问方式。
选择 get_time_series_data_list接口，填写你想要的数据页数和每个的个数，你将得到一整页的时序数据。

点击“try it out”后点击Execute

ok，一系列的数据集包括他的元数据信息已经获得。包括开始时间、结束时间、原始粒度、来源等等信息。

你可以复制一个数据名称（uu_name）,使用2 Get time series data by name接口，查看数据
4、尝试一个算法应用
4.1 使用Auto Value algorithm
点击Anomaly Detection Algorithum API，选择fixed_value算法应用，全部默认点击Execute


你的第一个可视化fixed_value算法应用结果已经出现

4.2尝试调参
修改上界，尝试获得不同结果

