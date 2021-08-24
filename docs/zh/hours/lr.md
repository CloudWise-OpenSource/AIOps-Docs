# lr 线性回归算法

## 算法简介
预测算法通过对历史时间序列数据中规律性进行挖掘，预测出未来一段时间范围内时间序列的数值。此处应当注意，预测算法针对的对象是有规律性的时间序列数据。若是数据中没有规律或规律性很弱则难以形成有效的预测结果。
线性回归算法是朴素的预测方法，其原理为认为给定数据由多项式构成，因此基于最小二乘对数据进行多项式拟合，从而得到不同阶的多项式系数值，而后对未来指定时间长度进行预测。


## API接口

```
http://106.75.53.174:4399/forecasting_api/lr
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id': specify one data for dynamic baseline algorithm
'n': degree of polynomial
'training_day':number of training day
'predict_day': number of predict day
'check_para': weather check parameters
```

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_lr='http://106.75.53.174:4399/forecasting_api/lr'
params = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for dynamic baseline algorithm
    'n':2,  # degree of polynomial
    'training_day':5,  # number of training day
    'predict_day':0.5,  # number of predict day
    'check_para':True  # weather check parameters
}

r = requests.get(url_lr, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果

![](/images/lr_demo.png)
