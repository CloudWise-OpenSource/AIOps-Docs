# fixed_values 固定阈值算法

## 算法简介
固定阈值算法是朴素的异常检测方法，其原理为认为给定数据上下边界值，通过判断实际数据是否位于边界内来判定数据点的异常情形。数据点大于阈值上边界或小于阈值下边界则被认为是异常点，否则为正常点。该算法具有运算效率高，对数据无预处理要求等特点。




## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/fixed_values
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id': specify one data for fixed_values algorithm
'up': value of up boundary
'down': value of down boundary
'check_param': enable unconstrained mode
```

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_fixed_values='http://106.75.53.174:4399/anomaly_detection_api/fixed_values'
params = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for fixed_values algorithm
    'up':100,  # value of up boundary
    'down':60,  # value of down boundary
    'check_param':True  # enable unconstrained mode
}

r = requests.get(url_fixed_values, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果
![](/images/fixed_values_demo.png)
