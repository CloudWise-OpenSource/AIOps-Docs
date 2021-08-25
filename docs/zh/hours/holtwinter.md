# holtwinter 三次指数平滑算法

## 算法简介
Holtwinter预测算法认为未来的数据可以通过对历史数据进行指数平滑来预测。所以离预测点越远的历史数据对预测的影响越小，Holtwinter算法通过调节指数系数来控制对历史数据的记忆和遗忘程度当时间序列中含有趋势性和周期性部分时，进一步调节它们各自的指数系数能更好的预测未来.

## API接口

```
http://106.75.53.174:4399/forecasting_api/holtwinter
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id': specify one data for dynamic baseline algorithm
'forecast_period':forecast length, only 'd'(days),'h'(hours),'m'(mins) are allowed
'training_duration':training length, only 'd'(days),'h'(hours),'m'(mins) are allowed
'train_grain': grain for forecast
'has_trend': whether or not has trend component in historical data. 'add'/None
'damped_trend': whether or not has trend component in historical data. False/True
'has_season': whether or not has season component in historical data. 'add'/None
'season': estimated season duration from past dataset, 'D'(days),'H'(hours),'M'(mins) are allowed
'sm_level':level smoothing coefficient, float, int, None (0~1)
'sm_trend':trend smoothing coefficient, float, int, None (0~1)
'sm_season':season smoothing coefficient, float, int, None (0~1)
'interval_width':alpha for confidence interval
'auto_param':test is auto_select param best on test, no is don't auto_select
'evaluate':mse, mean squared error, mas, mean absolute error
'sigma_num':sigma_num used to remove outliers. if sigma_num == -1, no outlier eliminat
'transform':whether apply transformation
'check_param':enable unconstrained mode
```

## demo演示

```python
import requests
import pandas as pd
from PIL import Image

url_holtwinter='http://106.75.53.174:4399/forecasting_api/holtwinter'
params = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'zjpnldr_value_from2020-11-10to2020-12-07_8433',  # specify one data for dynamic baseline algorithm
    'forecast_period':'2D',  # forecast length, only 'd'(days),'h'(hours),'m'(mins) are allowed
    'training_duration':'16D',  # training length, only 'd'(days),'h'(hours),'m'(mins) are allowed
    'train_grain':'5min',  # grain for forecast
    'has_trend':'add',  # whether or not has trend component in historical data. 'add'/None
    'damped_trend':False,  # whether or not has trend component in historical data. False/True
    'has_season':'add',  # whether or not has season component in historical data. 'add'/None
    'season':'7D',  # estimated season duration from past dataset, 'D'(days),'H'(hours),'M'(mins) are allowed
    'sm_level':-1,  # level smoothing coefficient, float, int, None (0~1)
    'sm_trend':-1,  # trend smoothing coefficient, float, int, None (0~1)
    'sm_season':-1,  # season smoothing coefficient, float, int, None (0~1)
    'interval_width':0.95,  # alpha for confidence interval
    'auto_param':'no',  # test is auto_select param best on test, no is don't auto_select
    'evaluate':'mse',  # mse, mean squared error, mas, mean absolute error
    'sigma_num':-1,  # sigma_num used to remove outliers. if sigma_num == -1, no outlier eliminat
    'transform':True,  # whether apply transformation
    'check_param':True  # enable unconstrained mode
}

r = requests.get(url_holtwinter, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果
![](/images/holtwinter_demo.png)
