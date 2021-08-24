# wave_detection 小波分析算法

## 算法简介
对每个时间点的数据计算特征，建立每个点的向量。基于每个点的特征向量构建的数据集，做聚类。计算被检测点的特征与正常点的区别来判断正常点与异常点。
小波分析基于历史数据，对历史数据或未来一段时间内数据进行异常检测。当各时间段时序数据模式表现近似，异常数据模式区别于正常时序数据模式时，适合常用频域分析算法进行异常检测。


## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/wave_detection
```

## 参数

```
'show_result_as_image':True show result as image, False show result as json
'data_id':specify one data for dynamic baseline algorithm
'nn':feature dimension. [1,2,3,4] means to extract four different features from each moment. The parameter format is [1,2,3,..., n]
'percent' it is used to control the cluster radius. The larger the value is, the larger the radius is. -1 means automatic selection of radius
'sigma':sigma is used to control the range of optional radius. The larger the value, the larger the range
'sensitive': sensitive are used to control the way of feature extraction.
'delete_period_length': delete_period_length is used to calculate the similarity of outliers in control period. make sure delete_period_length's value is in nn
'delete_period_train':whether delete periodic outliers
'alpha':control the sensitivity of detection, the smaller the more sensitive
'eps':default cluster radius
'period_eps’: default cluster radius used to identify periodic anomalies
'laplace_decline':control pattern feature extraction information. The larger the value is, the more attention should be paid to the recent model
'laplace_sense':controls the scaling of feature information
'check_param': enable unconstrained mode
```

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_wave_detection='http://106.75.53.174:4399/anomaly_detection_api/wave_detection'
params  = {
    'show_result_as_image':True,  # True show result as image, False show result as json
    'data_id':'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for dynamic baseline algorithm
    'nn':"[1,2,3,4]",  # feature dimension. [1,2,3,4] means to extract four different features from each moment. The parameter format is [1,2,3,..., n]
    'percent':"[-1.0,-1.0,-1.0,-1.0]",  # it is used to control the cluster radius. The larger the value is, the larger the radius is. -1 means automatic selection of radius
    'sigma':"[1 ,1 ,1 ,1]",  # sigma is used to control the range of optional radius. The larger the value, the larger the range
    'sensitive':"[false,false,false,false]",  # sensitive are used to control the way of feature extraction.
    'delete_period_length':4,  # delete_period_length is used to calculate the similarity of outliers in control period. make sure delete_period_length's value is in nn
    'delete_period_train':False,  # whether delete periodic outliers
    'alpha':"[1.0,1.0,1.0,1.0]",  # control the sensitivity of detection, the smaller the more sensitive
    'eps':1,  # default cluster radius
    'period_eps':1,  # default cluster radius used to identify periodic anomalies
    'laplace_decline':"[0,0,0,0]",  # control pattern feature extraction information. The larger the value is, the more attention should be paid to the recent model
    'laplace_sense':'["middle","middle","middle","middle"]',  # controls the scaling of feature information
    'check_param':True  # enable unconstrained mode
}

r = requests.get(url_wave_detection, params=params)  # now, data update success
with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果
![](/images/wave_detection_demo.png)
