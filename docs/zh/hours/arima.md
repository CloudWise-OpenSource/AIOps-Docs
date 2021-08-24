# arima 自回归差分滑动平均算法

## 应用场景及描述
ARIMA，即'自回归差分滑动平均'算法能够对非平稳时间序列的未来进行预测，本算法建立的预测模型包含了基于历史数据的自回归部分和基于历史预测误差的滑动平均部分


## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/arima
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id': specify one data for dynamic baseline algorithm
'forecast_period': forecast length, only 'd'(days),'h'(hours),'m'(mins) are allowed
'training_duration': training length, only 'd'(days),'h'(hours),'m'(mins) are allowed
'train_grain':grain for forecast
'has_trend':whether or not has trend component in historical data. 'add'/None
'has_season':whether or not has season component in historical data. 'add'/None
'season':estimated season duration from past dataset, 'D'(days),'H'(hours),'M'(mins) are allowed
'regress':level smoothing coefficient, float, int, None (0~1)
'diff':trend smoothing coefficient, float, int, None (0~1)
'erroravg':season smoothing coefficient, float, int, None (0~1)
'interval_width':conf_interval for confidence interval
'sigma_num':sigma_num used to remove outliers. if sigma_num == -1, no outlier elimination
'auto_param':fit is auto_select param best on fit, test is auto_select param best on test, no is don't auto_select
'evaluate': mse, mean squared error, mas, mean absolute error
'check_param': enable parameter checking
```

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_arima='http://106.75.53.174:4399/forecasting_api/arima'
params = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'zjpnldr_value_from2020-11-10to2020-12-07_8433',  # specify one data for dynamic baseline algorithm
    'forecast_period':'2D',  # forecast length, only 'd'(days),'h'(hours),'m'(mins) are allowed
    'training_duration':'18D',  # training length, only 'd'(days),'h'(hours),'m'(mins) are allowed
    'train_grain':'5min',  # grain for forecast
    'has_trend':False,  # whether or not has trend component in historical data. 'add'/None
    'has_season':True,  # whether or not has season component in historical data. 'add'/None
    'season':'7D',  # estimated season duration from past dataset, 'D'(days),'H'(hours),'M'(mins) are allowed
    'regress':3,  # level smoothing coefficient, float, int, None (0~1)
    'diff':3,  # trend smoothing coefficient, float, int, None (0~1)
    'erroravg':3,  # season smoothing coefficient, float, int, None (0~1)
    'interval_width':0.95,  # conf_interval for confidence interval
    'sigma_num':-1,  # sigma_num used to remove outliers. if sigma_num == -1, no outlier elimination
    'auto_param':'test',  # fit is auto_select param best on fit, test is auto_select param best on test, no is don't auto_select
    'evaluate':'mse',  # mse, mean squared error, mas, mean absolute error
    'check_param':True  # enable parameter checking
}

r = requests.get(url_arima, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果
![](/images/arima_demo.png)
