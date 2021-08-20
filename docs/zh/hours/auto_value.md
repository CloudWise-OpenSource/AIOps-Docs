# auto_value 自动阈值算法

## 应用场景及描述
自动阈值算法主要应用于DOCP平台中的事件管理和指标体系工作台产品模块。
1、在事件管理模块通过定期对历史指标数据的模型训练，自动计算出未来一段时间的指标上下阈值，在实时数据到达时，实时聚合出当前指标数值，与预测的上下阈值进行比较，超出阈值区间范围的判定为异常数据，根据具体配置的告警规则进行进一步判断或通知
2、在指标体系工作台模块，针对选择自动阈值算法作为指标健康度计算的，同样定时选取历史数据进行模型训练，计算出未来一段时间的指标上下阈值和基准值。根据实际指标与基准值的偏离程度与上下阈值比较来评估指标健康度。

## API接口

```
http://106.75.53.174:4399/hours/#/Anomaly%20Detection%20Algorithm%20API/get_anomaly_detection_api_auto_value
```

### 参数

```
up：上边界
down：下边界
yhat：基线的幅度大小
anomaly：0正常点，1异常点
_up: True表示单边检测，anomaly中的异常点为大于上边界的点
_down：True表示单边检测，anomaly中的异常点为小于下边界的点
```

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_auto_value='http://106.75.53.174:4399/anomaly_detection_api/auto_value'
params = {
          #ibpialr_valuelist_from2019-11-16to2019-12-16_1
          # ibpialr_valuelist_from2019-11-16to2019-12-16_1
            'data_id': 'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for auto value algorithm
            #true
            'show_result_as_image':  True,  # True show result as image, False show result as json
            'q_big': 1e-3,  # parameters of sensitivity of anomaly detection
            'q_small': 1e-3,  # the same value and meaning with q_big
            'std_boundary': 0.5,  # boundary of standard deviation
            'percent': 99.7,  # sensitivity of anomaly detection
            'errors':-1,  # learning error parameters by hand or automatic
            'bi_direction':True,  # bilateral anomaly detection
            'drift_percent':1,  # length of drift behavior that can tolerate
            'mode':'percentile',  # percentile normal or extreme
            'per':50,  # width of boundary tolerance
            'sigma':1,  # parameter for boundary tolerance
            'detrend':False,  # weather delete trend data from input data
            'windows_length':10,  # points number of window for de-trend
            'check_param':True  # enable unconstrained mode
}

r = requests.get(url_auto_value, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

### 运行结果：
![](/images/auto_value_demo.png)
