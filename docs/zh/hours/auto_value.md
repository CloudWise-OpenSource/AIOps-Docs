# auto_value 自动阈值算法

## 算法简介
异常检测用来检测异于正常模式的对象。自动阈值算法根据极值理论构建数据极值的概率分布模型。通过检验一个（多个）对象是否服从该分布来判断异常。如果不服从，则认为该对象是一个异常。

## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/auto_value
```

## 参数

```
'data_id': specify one data for auto value algorithm
'show_result_as_image': True show result as image, False show result as json
'q_big':  parameters of sensitivity of anomaly detection
'q_small': the same value and meaning with q_big
'std_boundary': boundary of standard deviation
'percent': sensitivity of anomaly detection
'errors':-1,learning error parameters by hand or automatic
'bi_direction': bilateral anomaly detection
'drift_percent':length of drift behavior that can tolerate
'mode':percentile normal or extreme
'per':width of boundary tolerance
'sigma':parameter for boundary tolerance
'detrend':weather delete trend data from input data
'windows_length':points number of window for de-trend
'check_param':enable unconstrained mode
```

## demo演示

```python
import requests
import pandas as pd
from PIL import Image

url_auto_value='http://106.75.53.174:4399/anomaly_detection_api/auto_value'
params = {
            'data_id': 'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for auto value algorithm
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

## 运行结果
![](/images/auto_value_demo.png)
