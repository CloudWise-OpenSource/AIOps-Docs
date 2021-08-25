# sigma 标准差算法

## 算法简介
sigma算法是各行各业广为使用的异常检测方法，其原理为给定数据上下边界值，该边界由数据均值与数据本身一定倍数标准差构成，标准差的系数代表了结果的置信度，通过判断实际数据是否位于边界内来判定数据点的异常情形。数据点大于阈值上边界或小于阈值下边界则被认为是异常点，否则为正常点。该算法具有运算效率高，但需要剔除掉数据中同一时间戳的重复数据。

## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/sigma
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id':specify one data for sigma algorithm
'sigma_up':standard deviation number of up boundary
'sigma_down':standard deviation number of down boundary
'check_param':enable unconstrained mode
```

## demo演示

```python
import requests
import pandas as pd
from PIL import Image

url_sigma='http://106.75.53.174:4399/anomaly_detection_api/sigma'
params = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'hppivkerl_TRADE_NUM_from2020-07-06to2020-09-05_11206',  # specify one data for sigma algorithm
    'sigma_up':2,  # standard deviation number of up boundary
    'sigma_down':2,  # standard deviation number of down boundary
    'check_param':True  # enable unconstrained mode
}

r = requests.get(url_sigma, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果
![](/images/sigma_demo.png)
