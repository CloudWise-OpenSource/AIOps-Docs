# 上传csv文件到hours上
## API接口
```
http://106.75.53.174:4399/data_layer_api/upload_file
```
## csv文件格式要求
时间为13位时间戳格式
![](/images/csv_demo.png)

## demo演示
```
import requests

cover_path = r'/Users/zhuhonghui/Desktop/zookeeper_middleware_zookeeper_server_sent.csv'  # 此处cover_path为上传csv文件的绝对路径
csv_file = 'zookeeper_middleware_zookeeper_server_sent.csv'  # 此处为csv文件的名字
url = 'http://106.75.53.174:4399/data_layer_api/upload_file'
files = {
    'file': (csv_file,
             open(cover_path, 'rb'),
             'application/msword')
}

r = requests.post(url=url, files=files,)
r.text

```
## 运行结果
当看到"message": "Success",表示上传数据成功，我们此时可以将“uu_name”:zookeeper_middleware_zookeeper_server_sent放到异常检测和预测的接口进行测试，只需将data_id替换为此时的uu_name即可。
![](/images/upload_file.png)
