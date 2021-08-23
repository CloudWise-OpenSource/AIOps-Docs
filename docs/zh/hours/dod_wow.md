# dod_wow 同环比算法

## 应用场景


## API接口

```
http://106.75.53.174:4399/anomaly_detection_api/dod_wow
```

## 参数
'data_id':specify one data for dod_wow algorithm
'show_result_as_image':True show result as image, False show result as json
'sigma_up': standard deviation number of up boundary
'sigma_down':standard deviation number of down boundary
'half_win_d':half window length of day on day
'half_win_w':half window length of week on week
'training_day': number of training day
'check_param':enable unconstrained mode

## demo演示

```python
import json
import requests
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt

url_dod_wow='http://106.75.53.174:4399/anomaly_detection_api/dod_wow'
params = {
    'data_id':'ibpialr_valuelist_from2019-11-16to2019-12-16_1',  # specify one data for dod_wow algorithm
    'show_result_as_image':True,  # True show result as image, False show result as json
    'sigma_up':3,  # standard deviation number of up boundary
    'sigma_down':3, # standard deviation number of down boundary
    'half_win_d':15, # half window length of day on day
    'half_win_w':15, # half window length of week on week
    'training_day':3, # number of training day
    'check_param':True  # enable unconstrained mode
}

r = requests.get(url_dod_wow, params=params)  # now, data update success

with open('1.png','wb') as f:
    f.write(r.content)
display(Image.open('1.png'))
```

## 运行结果：
![](/images/dod_wow_demo.png)
