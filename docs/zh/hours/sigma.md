# sigma 标准差算法

## 算法简介
异常检测算法通过时间序列数据中规律性进行挖掘，检测异于正常模式的值或序列。此处应当注意，异常检测算法针对的对象是有规律性的时间序列数据。其中蕴含了两层含义：若是数据中没有规律或规律性很弱则难以形成有效的检测结果；若异常的定义是针对业务，而非仅仅针对数据本身，则在很多情形下“业务认为的异常”和异常检测算法得到的“数据异常”有冲突，此时较为妥当的处理方式为通过在“数据异常”基础上添加业务规则，从而满足业务方需求。
k-sigma算法是各行各业广为使用的异常检测方法，其原理为给定数据上下边界值，该边界由数据均值与数据本书一定倍数标准差构成，标准差的系数代表了结果的置信度，通过判断实际数据是否位于边界内来判定数据点的异常情形。数据点大于阈值上边界或小于阈值下边界则被认为是异常点，否则为正常点。该算法具有运算效率高，但需要剔除掉数据中同一时间戳的重复数据。


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
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

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
