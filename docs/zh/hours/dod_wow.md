# dod_wow 同环比算法

## 应用场景


## API接口

```
http://106.75.53.174:4399/hours/#/Anomaly%20Detection%20Algorithm%20API/get_anomaly_detection_api_dod_wow
```

### 参数
> sigma_up: 数据上边界对应的标准差值
> sigma_down: 数据下边界对应的标准差值
> half_win_d: 同比半窗长（点数)
> half_win_w:环比半窗长（点数）
> training_day:训练数据长度


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

### 运行结果：
![](/images/dod_wow_demo.png)