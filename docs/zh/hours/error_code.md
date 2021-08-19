# Hours Api请求错误码

## [auto_value]

### 成功返回值（success）

| 错误码  | 英文错误                                                     | 中文错误                                    |
| ------- | ------------------------------------------------------------ | ------------------------------------------- |
| 1100001 | ""                                                           | ""                                          |
| 1100000 | "check_param=False : parameter verification is not required" | "check_param=False：不会进行参数合理性校验" |

### 警告返回值（warning）

| 错误码  | 英文错误                                                                                               | 中文错误                                                            |
| ------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 1100002 | "The quantile（q_big） is small, and the value may be a little extreme. Recommend [1e-4, 1e-3]"        | "q_big 比较小，阈值可能更加极端。一般情况下，推荐范围 [1e-4, 1e-3]" |
| 1100003 | "The quantile is big, and the value may be a little conservative. Recommend [1e-4, 1e-3]"              | "q_big比较大，阈值可能比较保守。一般情况下，推荐范围 [1e-4, 1e-3]"  |
| 1100007 | "The percent is a little small, and non extremum data may be introduced"                               | "percent比较小，非极值数据可能参与拟合"                             |
| 1100008 | "The parameters are a little large, and the data involved in the fitting may be less"                  | "percent比较大，参与拟合的数据可能比较少"                           |
| 1100012 | "recommended value for errors is -1.0"                                                                 | "errors推荐值为-1.0"                                                |
| 1100013 | "One side detection is performed since bi_direction = False"                                           | "执行单边异常检测"                                                  |
| 1100016 | "All data participate in the distribution fitting, which does not conform to the extreme value theory" | "所有数据都会参与分布拟合，这不符合极值理论"                        |
| 1100018 | "The per is small, and the algorithm is relatively sensitive"                                          | "per比较小，算法相对比较敏感"                                       |
| 1100019 | "The per is big, and the algorithm is relatively insensitive"                                          | "per比较大，算法比较保守"                                           |
| 1100022 | "The sigma is small, and the algorithm is relatively sensitive"                                        | "sigma比较小，算法会比较敏感"                                       |
| 1100023 | "The sigma is big, and the algorithm is relatively insensitive"                                        | "sigma比较大，算法会比较保守"                                       |
| 1100026 | "detrend for the data"                                                                                 | "数据去趋势"                                                        |
| 1100027 | "If the parameter(windows_length) is small, some details may be lost in the process of de trend"       | "如果参数windows_length比较小，去趋势过程可能会丢失一些非趋势细节"  |
| 1100028 | "If the parameters are relatively large, the effect of de trend may not be clear"                      | "如果参数windows_length比较大，去趋势效果可能不明显"                |
### 错误返回值（error）
| 错误码  | 英文错误                                                                                                                   | 中文错误                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1100004 | "The quantile is too small, and the value may be extreme. Recommend range greater than 1e-4 and no more than 1e-3"         | "q_big太小，阈值可能非常极端。一般情况下，推荐大于1e-4且不大于1e-3" |
| 1100005 | "The quantile is too big, and the value may be very conservative. Recommend range greater than 1e-4 and no more than 1e-3" | "q_big太大，阈值可能非常保守。一般情况下，推荐大于1e-4且不大于1e-3" |
| 1100006 | "q_small should be equal to q_big"                                                                                         | "q_small应与q_big数值相等"                                          |
| 1100009 | "If the parameter(percent) is too small, it may cause unknown influence"                                                   | "如果percent太小，可能引起未知影响"                                 |
| 1100010 | "The parameters(percent) are too large, which requires a lot of training data"                                             | "如果percent太大，需要非常多的训练数据"                             |
| 1100011 | "Modifing std_boundary is not recommended"                                                                                 | "不建议修改std_boundary"                                            |
| 1100014 | "Unknown value of bi_direction"                                                                                            | "bi_direction数值错误"                                              |
| 1100015 | "Value 1 is recommended unless you understand the code or parameter impact"                                                | "不建议修改drift_percent"                                           |
| 1100017 | "Unknown value of mode"                                                                                                    | "mode数值错误"                                                      |
| 1100020 | "The per is too small, and the algorithm is sensitive"                                                                     | "per太小，算法会很敏感"                                             |
| 1100021 | "The per is too big, and the algorithm is insensitive"                                                                     | "per太大，算法会很保守"                                             |
| 1100024 | "The sigma is too small, and the algorithm is sensitive"                                                                   | "sigma太小，算法很敏感"                                             |
| 1100025 | "The sigma is too big, and the algorithm is insensitive"                                                                   | "sigma太大，算法很不敏感"                                           |
| 1100029 | "If the parameter is too small, lots of details may be lost in the process of de trend"                                    | "如果参数windows_length过小，去趋势过程会丢失很多细节"              |
| 1100030 | "If the parameters are too large, the effect of de trend may not be clear"                                                 | "如果参数windows_length过大，去趋势过程效果不明显"                  |
| 1100031 | "date_name should be string"                                                                                               | "date_name应为string类型"                                           |
| 1100032 | "data_name should be string"                                                                                               | "data_name应为string类型"                                           |
| 1100033 | "q_big should be float"                                                                                                    | "q_big应为float类型"                                                |
| 1100034 | "percent should be float"                                                                                                  | "percent应为float型"                                                |
| 1100035 | "value of parameter errors is float -1.0 or 1.0"                                                                           | "参数errors的值为浮点数-1.0或1.0"                                   |
| 1100036 | "per should be float"                                                                                                      | "per应为float型"                                                    |
| 1100037 | "sigma should be float"                                                                                                    | "sigma应为float型"                                                  |
| 1100038 | "unknown value of detrend"                                                                                                 | "detrend数值错误"                                                   |
| 1100039 | "windows_length should be int"                                                                                             | "windows_length应为int型"                                           |
| 1100040 | "type drift_percent should be float"                                                                                       | "drift_percent类型为float"                                          |
| 1100041 | "check_param should be bool"                                                                                               | "check_param应为bool型"                                             |
## [dod_wow]
### 成功返回值（success）
| 错误码  | 英文错误                                                     | 中文错误                                    |
| ------- | ------------------------------------------------------------ | ------------------------------------------- |
| 1130001 | ""                                                           | ""                                          |
| 1130000 | "check_param false : parameter verification is not required" | "check_param false：不会进行参数合理性校验" |
### 警告返回值（warning）
| 错误码  | 英文错误                                                 | 中文错误                                |
| ------- | -------------------------------------------------------- | --------------------------------------- |
| 1130005 | "value of sigma_up is bigger, recommend range:[0,200]"   | "sigma_up取值略大，建议区间：[0,200]"   |
| 1130009 | "value of sigma_down is bigger, recommend range:[0,200]" | "sigma_down取值略大，建议区间：[0,200]" |
| 1130013 | "value of half_win_d between 5 and 30 is better"         | "half_win_d取值不宜在[5，30]之外"       |
| 1130017 | "value of half_win_w between 5 and 30 is better"         | "half_win_w取值不宜在[5，30]之外"       |
| 1130021 | "value of training_day greater than 7 is better"         | "training_day取值最好大于7"             |
### 错误返回值（error）
| 错误码  | 英文错误                                                      | 中文错误                                |
| ------- | ------------------------------------------------------------- | --------------------------------------- |
| 1130002 | "date_name should be str"                                     | "date_name应为string型"                 |
| 1130004 | "data_name should be str"                                     | "data_name应为string型"                 |
| 1130006 | "value of sigma_up is too big, recommend range:[0,200]"       | "sigma_up取值过大，建议区间：[0,200]"   |
| 1130008 | "type of sigma_up should be int or float"                     | "sigma_up应为int或float型"              |
| 1130010 | "value of sigma_down is too big, recommend range:[0,200]"     | "sigma_down取值过大，建议区间：[0,200]" |
| 1130012 | "type of sigma_down should be int or float"                   | "sigma_down应为int或float型"            |
| 1130014 | "value of half_win_d must greater than 0 and no more than 60" | "half_win_d取值必须大于零且不超过60"    |
| 1130016 | "type of half_win_d must be integer"                          | "half_win_d必须为整数型"                |
| 1130018 | "value of half_win_w must greater than 0 and no more than 60" | "half_win_w取值必须大于零且不超过60"    |
| 1130020 | "type of half_win_w must be integer"                          | "half_win_w必须为整数型"                |
| 1130022 | "value of training_day smaller than 3"                        | "training_day取值小于3"                 |
| 1130024 | "type of training_day must be integer"                        | "training_day必须为整数型"              |
| 1130026 | "type of check_param must be bool"                            | "check_param必须为bool"                 |

## [fixed_value]

### 成功返回值（success）

| 错误码  | 英文错误                                                     | 中文错误                             |
| ------- | ------------------------------------------------------------ | ------------------------------------ |
| 1120001 | ""                                                           | ""                                   |
| 1120000 | "check_param false : parameter verification is not required" | "无约束模式：不会进行参数合理性校验" |

### 警告返回值（warning）

| 错误码 | 英文错误 | 中文错误 |
| ------ | -------- | -------- |

### 错误返回值（error）

| 错误码  | 英文错误                                                | 中文错误                    |
| ------- | ------------------------------------------------------- | --------------------------- |
| 1120002 | "date_name should be str"                               | "date_name应为string型"     |
| 1120004 | "data_name should be str"                               | "data_name应为string型"     |
| 1120006 | "value of up must greater than 0 and greater than down" | "up取值应大于0，且大于down" |
| 1120008 | "type of up should be int or float"                     | "up应为int或float型"        |
| 1120010 | "value of down must greater than 0"                     | "down取值应大于0"           |
| 1120012 | "type of down should be int or float"                   | "down应为int或float型"      |
| 1120014 | "type of check_param should be bool"                    | "check_param应为bool型"     |

## [sigma]

### 成功返回值（success）

| 错误码  | 英文错误                                                     | 中文错误                             |
| ------- | ------------------------------------------------------------ | ------------------------------------ |
| 1110001 | ""                                                           | ""                                   |
| 1110000 | "check_param false : parameter verification is not required" | "无约束模式：不会进行参数合理性校验" |

### 警告返回值（warning）

| 错误码  | 英文错误                                                 | 中文错误                                |
| ------- | -------------------------------------------------------- | --------------------------------------- |
| 1110005 | "value of sigma_up is bigger, recommend range:[0,200]"   | "sigma_up取值略大，建议区间：[0,200]"   |
| 1110009 | "value of sigma_down is bigger, recommend range:[0,200]" | "sigma_down取值略大，建议区间：[0,200]" |
### 错误返回值（error）
| 错误码  | 英文错误                                                  | 中文错误                                |
| ------- | --------------------------------------------------------- | --------------------------------------- |
| 1110002 | "date_name should be str"                                 | "date_name应为string型"                 |
| 1110004 | "data_name should be str"                                 | "data_name应为string型"                 |
| 1110006 | "value of sigma_up is too big, recommend range:[0,200]"   | "sigma_up取值过大，建议区间：[0,200]"   |
| 1110008 | "type of sigma_up should be int or float"                 | "sigma_up应为int或float型"              |
| 1110010 | "value of sigma_down is too big, recommend range:[0,200]" | "sigma_down取值过大，建议区间：[0,200]" |
| 1110012 | "type of sigma_down should be int or float"               | "sigma_down应为int或float型"            |
| 1110014 | "type of check_param should be bool"                      | "check_param应为bool型"                 |


## [wave_detection]
### 成功返回值（success）
| 错误码  | 英文错误                                                     | 中文错误                             |
| ------- | ------------------------------------------------------------ | ------------------------------------ |
| 1400001 | ""                                                           | ""                                   |
| 1400000 | "check_param false : parameter verification is not required" | "无约束模式：不会进行参数合理性校验" |
### 警告返回值（warning）
| 错误码  | 英文错误                                                                                                                                                | 中文错误                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1400002 | "The algorithm pays more attention to the short-term pattern"                                                                                           | "算法可能更关注短时间窗口的模式"                                                                                                     |
| 1400003 | "The algorithm pays more attention to the long-term pattern"                                                                                            | "算法可能更关注长时间窗口的模式"                                                                                                     |
| 1400005 | "Generally, value '-1' is recommended for percent"                                                                                                      | "一般情况下，参数percent推荐设置为'-1'"                                                                                              |
| 1400006 | "The algorithm becomes insensitive if sigma = 2 or 3"                                                                                                   | "sigma等于2或3时，算法会更敏感"                                                                                                      |
| 1400008 | "Generally, value 'False' is recommended for sensitive"                                                                                                 | "一般情况下，参数sensitive推荐设置为'False'"                                                                                         |
| 1400009 | "When identifying periodic anomalies, they tend to focus on short-term patterns"                                                                        | "在识别周期异常时，更关注异常的短期模式"                                                                                             |
| 1400010 | "When identifying periodic anomalies, they tend to focus on long-term patterns"                                                                         | "在识别周期异常时，更关注异常的长期模式"                                                                                             |
| 1400012 | "Periodic anomalies are not eliminated if delete_period_train = False"                                                                                  | "不过滤周期异常"                                                                                                                     |
| 1400014 | "The algorithm is more sensitive if alpha = 0.5"                                                                                                        | "alpha=0.5时，算法会更敏感"                                                                                                          |
| 1400015 | "The algorithm is less sensitive when alpha=2.0"                                                                                                        | "alpha=2.0时，算法会更保守"                                                                                                          |
| 1400019 | "The higher the numerical value(laplace_decline) is, the more attention is paid to the short-term history"                                              | "laplace_decline参数数值越高，算法会越关注近期模式"                                                                                  |
| 1400020 | "Generally, value ['low','low','low','low'] or ['middle','middle','middle','middle'] or ['high','high','high','high'] is recommended for laplace_sense" | "一般情况下，laplace_sense推荐设置为['low','low','low','low']或['middle','middle','middle','middle']、['high','high','high','high']" |
### 错误返回值（error）
| 错误码  | 英文错误                                                                                       | 中文错误                                                                            |
| ------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 1400029 | "type of parameter (nn) should be list[int]"                                                   | "参数nn的类型应为list[int]"                                                         |
| 1400030 | "type of parameter (percent) should be list[float]"                                            | "参数percent的类型应为list[float]"                                                  |
| 1400031 | "type of parameter (sigma) should be list[int]"                                                | "参数sigma的类型应为list[int]"                                                      |
| 1400032 | "type of parameter (sensitive) should be list[bool]"                                           | "参数sensitive的类型应为list[bool]"                                                 |
| 1400033 | "type of parameter (alpha) should be list"                                                     | "参数alpha的类型应为list"                                                           |
| 1400034 | "type of parameter (laplace_decline) should be list"                                           | "参数laplace_decline的类型应为list"                                                 |
| 1400035 | "type of parameter (laplace_sense) should be list"                                             | "参数laplace_sense的类型应为list"                                                   |
| 1400021 | "The length of the list parameter needs to be consistent"                                      | "list类型的参数，数组长度需保持一致"                                                |
| 1400028 | "type nn should be int"                                                                        | "参数nn的类型应为int"                                                               |
| 1400042 | "value type of sigma should be int"                                                            | "参数sigma的值的类型应为int"                                                        |
| 1400004 | "Generally, 'nn = [1,2,3,4]' is recommended"                                                   | "一般情况下，推荐设置nn = [1,2,3,4]"                                                |
| 1400022 | "unknown value of percent. percent should be list[float] and value == -1 or between 0 and 100" | "参数percent数值错误, percent应为list[float]类型，且数值应为等于-1或处于0到100之间" |
| 1400007 | "Generally, value 1 is recommended for sigma"                                                  | "一般情况下，sigma推荐设置为1"                                                      |
| 1400023 | "unknown value of sensitive"                                                                   | "参数sensitive数值错误"                                                             |
| 1400026 | "date_name should be str"                                                                      | "date_name应为string类型"                                                           |
| 1400027 | "data_name should be str"                                                                      | "data_name应为string类型"                                                           |
| 1400036 | "type delete_period_length should be int"                                                      | "参数delete_period_length的类型应为int"                                             |
| 1400041 | "delete_period_length must than <= len(nn)"                                                    | "参数delete_period_length不能大于len(nn)"                                           |
| 1400011 | "Generally, value 2~4 is recommended for delete_period_length"                                 | "一般情况下，参数delete_period_length推荐设置为2～4"                                |
| 1400013 | "unknown value of delete_period_train"                                                         | "参数delete_period_train数值错误"                                                   |
| 1400016 | "Generally, value 1.0 is recommended for alpha"                                                | "一般情况下，参数alpha推荐设置为1.0"                                                |
| 1400017 | "Generally, value 1.0 is recommended for eps"                                                  | "一般情况下，参数eps推荐设置为1"                                                    |
| 1400018 | "Generally, value 1.0 is recommended for period_eps"                                           | "一般情况下，参数period_eps推荐设置为1"                                             |
| 1400024 | "unknown value of laplace_decline. laplace_decline should be list[float] and >= 0"             | "laplace_decline数值错误, laplace_decline应为list[float]且数值>=0"                  |
| 1400025 | "unknown value of laplace_sense"                                                               | "参数laplace_sense数值错误"                                                         |
| 1400040 | "type of check_param should be bool"                                                           | "参数check_param的类型应为bool"                                                     |
| 1400043 | "value type of alpha should be float"                                                          | "参数alpha的值的类型应为float"                                                      |
| 1400044 | "type of eps should be float"                                                                  | "参数eps的类型应为float"                                                            |
| 1400045 | "type of period_eps should be float"                                                           | "参数period_eps的类型应为float"                                                     |
| 1400046 | "The data volume cannot exceed 20160 data points"                                              | "数据量不能超过20160个数据点"                                                       |

## [ARIMA_forecast]
### 成功返回值（success）
| 错误码  | 英文错误                                         | 中文错误                                      |
| ------- | ------------------------------------------------ | --------------------------------------------- |
| 3210001 | ""                                               | ""                                            |
| 3210000 | "check_param = false: no parameter verification" | "check_param = false, 不会进行参数合理性校验" |
### 警告返回值（warning）
| 错误码  | 英文错误                                                                             | 中文错误                                                                 |
| ------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 3210003 | "The train_grain is a little small or large. Recommend range is ["1min"              | "5min"                                                                   | "10min" | "30min" | "1h" | "12h" | "1d"]" | "参数train_grain太大或太小。推荐范围（"1min" | "5min" | "10min" | "30min" | "1h" | "12h" | "1d"）" |
| 3210005 | "Training_duration is relatively short for selected forecast_period"                 | "参数training_duration对于参数forecast_period来说有些小，预测精度会下降" |
| 3210007 | "Training_duration is a little too much, unable to focus on near recent information" | "参数training_duration有点大，近期历史的模式的比重相对较小"              |
| 3210009 | "Season is too large that it will takes a much longer time than usual"               | "参数season太大，算法将会运行很久时间"                                   |
| 3210011 | "Recommend regress is 3, a larger regress will lead to longer execute time"          | "推荐regress为3，更大的数值会导致更长的运行时间"                         |
| 3210013 | "Recommend diff is 3, a larger diff will lead to longer execute time"                | "推荐diff为3，更大的数值会导致更长的运行时间"                            |
| 3210015 | "Recommend erroravg is 3, a larger erroravg will lead to longer execute time"        | "推荐erroravg为3，更大的数值会导致更长的运行时间"                        |
| 3210017 | "A large interval_width will give a relatively broader upper and lower boundary"     | "较大的conf_interval会导致更宽的置信区间"                                |
| 3210019 | "Recommend interval_width between 0.9 to 0.99"                                       | "推荐conf_interval值在0.9至0.99"                                         |
### 错误返回值（error）
| 错误码  | 英文错误                                                                                                                                                                                      | 中文错误                                                                                                              |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 3210002 | "date_name should be string"                                                                                                                                                                  | "参数date_name应为string类型"                                                                                         |
| 3210004 | "data_name should be string"                                                                                                                                                                  | "参数data_name应为string类型"                                                                                         |
| 3210006 | "Type of forecast_period should be str. A qualified example of forecast_period:'24h'"                                                                                                         | "参数forecast_period应为string型。示例:'24h'"                                                                         |
| 3210008 | "Type of training_duration should be str. A qualified example is:'16D'"                                                                                                                       | "参数training_duration应为string型。示例:'16D'"                                                                       |
| 3210010 | "Training length relative to forecast period is either too short or too long, recommend to set forecast period between 1/4 and 1/60 of training length"                                       | "参数training_duration相对于参数forecast_period过多/过少,建议将forecast_period设置在training_duration的1/4到1/60之间" |
| 3210012 | "Grain size is not suitable, and recommended range is :['1min', '5min', '10min', '30min', '1h', '12h', '1d']" , "粒度不合适，推荐范围：['1min', '5min', '10min', '30min', '1h', '12h', '1d']" |
| 3210014 | "sigma_num should be -1.0 or non-negative float"                                                                                                                                              | "参数sigma_num应为-1.0 或非负float"                                                                                   |
| 3210016 | "regress should be int, and should fall in [0,6]"                                                                                                                                             | "参数regress应为int, 并且在大于等于0，小于等于6之间"                                                                  |
| 3210018 | "diff should be be int, and should fall in [0,6]"                                                                                                                                             | "参数diff应为int, 并且在大于等于0，小于等于6之间"                                                                     |
| 3210020 | "erroavg should be int, and should fall in [0,6]"                                                                                                                                             | "参数erroravg应为int, 并且在大于等于0，小于等于6之间"                                                                 |
| 3210022 | "has_season should be bool"                                                                                                                                                                   | "参数has_season应为bool型"                                                                                            |
| 3210024 | "Season should be greater than or equal to train_grain and smaller or equal to '30D'"                                                                                                         | "参数season应大于等于train_grain并且小于等于30D"                                                                      |
| 3210026 | "With auto_param='test', training_duration must has at-least 2 and half complete season cycles"                                                                                               | "当auto_param='test'时，参数training_duration应至少包含两个半完整的周期"                                              |
| 3210028 | "With auto_param in ['fit', 'no'], training_duration must has at-least 2 complete season cycles"                                                                                              | "当auto_param为'fit' or 'no'时，参数training_duration应至少包含两个完整的周期"                                        |
| 3210030 | "has_trend should be bool"                                                                                                                                                                    | "参数has_trend为bool型"                                                                                               |
| 3210032 | "auto_param should be str and in ['no','fit','test']"，"参数auto_param 应为['no','fit','test']"                                                                                               |
| 3210034 | "evaluate should be either mae or mse"，"参数evaluate应为mae或mse"                                                                                                                            |
| 3210038 | "interval_width should be float"                                                                                                                                                              | "参数conf_interval应为float"                                                                                          |
| 3210040 | "interval_width must between [0,1]"                                                                                                                                                           | "参数conf_interval必须在【0，1】之间"                                                                                 |
| 3210042 | "check_param should be bool"                                                                                                                                                                  | "参数check_param应为bool型"                                                                                           |
| 3210044 | "Data length should not smaller than training_duration"                                                                                                                                       | "数据长度不能小于参数training_duration"                                                                               |
## [HoltWinter_forecast]
### 成功返回值（success）
| 错误码  | 英文错误                                                       | 中文错误                                      |
| ------- | -------------------------------------------------------------- | --------------------------------------------- |
| 3220001 | ""                                                             | ""                                            |
| 3220000 | "check_param = False : parameter verification is not required" | "check_param = false：不会进行参数合理性校验" |
### 警告返回值（warning）
| 错误码  | 英文错误                                                                                       | 中文错误                                                                 |
| ------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 3220003 | "training duration is relatively short for selected forecast_period"                           | "参数training_duration对于参数forecast_period来说有些短，预测精度会下降" |
| 3220005 | "Training data is too much, so the training time will be long"                                 | "参数training_duration有点大，训练时间较长。"                            |
| 3220007 | "The grain is a little small or large. Ensure that data grain is smaller than parameter grain" | "参数grain太大或太小。确保数据粒度小于聚合粒度"                          |
| 3220009 | "Season is too large that it will takes a much longer time than usual"                         | "参数season太长，算法运行时间将会很长"                                   |
| 3220011 | "sm_level=-1.0 and it will be estimated by the algorithm"                                      | "参数sm_level=-1.0，其值将由算法估计"                                    |
| 3220013 | "sm_trend=-1.0 and it will be estimated by the algorithm"                                      | "参数sm_trend=-1.0，其值将由算法估计"                                    |
| 3220015 | "sm_season=-1.0 and it will be estimated by the algorithm"                                     | "参数sm_season=-1.0，其值将由算法估计"                                   |
| 3220017 | "interval_width are too large and will give a relatively broader confident interval"           | "参数conf_interval太大将导致更宽的置信区间"                              |
| 3220019 | "Recommend interval_width between 0.9 to 0.99"                                                 | "推荐conf_interval值在0.9至0.99"                                         |
### 错误返回值（error）
| 错误码  | 英文错误                                                                                                                                                                                          | 中文错误                                                                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 3220002 | "date_name should be string"                                                                                                                                                                      | "date_name应为string类型"                                                                                    |
| 3220004 | "data_name should be string"                                                                                                                                                                      | "data_name应为string类型"                                                                                    |
| 3220006 | "Type of forecast_period should be str. A qualified example of forecast_period:'24h'"                                                                                                             | "参数forecast_period应为string型。示例:'24h'"                                                                |
| 3220008 | "Type of training_duration should be str. A qualified example is:'16D'"                                                                                                                           | "参数training_duration应为string型。示例:'16D'"                                                              |
| 3220010 | "training_duration relative to forecast period is either too short or too long, recommend to set forecast period between 1/4 and 1/60 of training length"                                         | "参数training_duration相对于参数forecast_period过大/过小,建议将forecast_period设置在训练时长的1/4到1/60之间" |
| 3220012 | "train_grain is not suitable. recommended range:['1min', '5min', '10min', '30min', '1h', '12h', '1d']" , "参数train_grain不合适，推荐范围：['1min', '5min', '10min', '30min', '1h', '12h', '1d']" |
| 3220014 | "sm_level should be -1.0 or float between (0, 1)"                                                                                                                                                 | "参数sm_level应为-1.0 或者大于0小于1的浮点数"                                                                |
| 3220016 | "sm_trend should be -1.0 or float between (0, 1)"                                                                                                                                                 | "参数sm_trend应为-1.0 或者大于0小于1的浮点数"                                                                |
| 3220018 | "sm_season should be -1.0 or float between (0, 1)"                                                                                                                                                | "参数sm_season应为-1.0 或者大于0小于1的浮点数"                                                               |
| 3220020 | "Only 'add' or 'no' are supported for has_season"                                                                                                                                                 | "参数has_season只支持'add'或 'no'"                                                                           |
| 3220022 | "season should be greater than or equal to train_grain and smaller or equal to '30D"                                                                                                              | "参数season应大于等于train_grain并且小于等于'30D'"                                                           |
| 3220024 | "When auto_param='test', training_duration should be not less then 2.5 * season"                                                                                                                  | "当auto_param='test'时，参数training_duration至少包含两个半完整的周期"                                       |
| 3220026 | "When auto_param='no', training_duration should be not less then 2 * season"                                                                                                                      | "当auto_param='no'时, 参数training_duration至少包含两个完整的周期"                                           |
| 3220028 | "Only 'add','no' are supported for has_trend"                                                                                                                                                     | "参数has_trend只支持'add'或 'no'"                                                                            |
| 3220030 | "interval_width should be float"，"参数conf_interval应为float型"                                                                                                                                  |
| 3220032 | "interval_width should be between [0, 1]"                                                                                                                                                         | "参数conf_interval应在【0，1】之间"                                                                          |
| 3220034 | "damped_trend should be bool"，"参数damped_trend应为布尔型"                                                                                                                                       |
| 3220036 | "transform should be bool"，"参数transform应为布尔型"                                                                                                                                             |
| 3220038 | "auto_param should be str and in ['no', 'test']"，"参数auto_param应为'no'或'test'"                                                                                                                |
| 3220040 | "evaluate should be either mae or mse"，"参数evaluate应为mae或mse"                                                                                                                                |
| 3220042 | "outlier_sigma should be -1.0 or non-negative float"，"参数outlier_sigma应为-1.0或非负浮点型"                                                                                                     |
| 3220044 | "check_param should be bool"                                                                                                                                                                      | "参数check_param应为bool型"                                                                                  |
| 3220046 | "The length of data should be longer than training_duration"                                                                                                                                      | "实际数据长度应该大于参数training_duration"                                                                  |
## [lr]
### 成功返回值（success）
| 错误码  | 英文错误                                                    | 中文错误                             |
| ------- | ----------------------------------------------------------- | ------------------------------------ |
| 3200001 | ""                                                          | ""                                   |
| 3200000 | "check_para false : parameter verification is not required" | "无约束模式：不会进行参数合理性校验" |
### 警告返回值（warning）
| 错误码  | 英文错误                                         | 中文错误                         |
| ------- | ------------------------------------------------ | -------------------------------- |
| 3200005 | "value of training_day recommend range:[7,1000]" | "training_day建议区间：[7,2000]" |
| 3200009 | "value of predict_day  recommend no more than 2" | "predict_day取值建议不大于2"     |
| 3200013 | "value of n  recommend no more than 10"          | "n取值建议不大于10"              |
### 错误返回值（error）
| 错误码  | 英文错误                                                   | 中文错误                                 |
| ------- | ---------------------------------------------------------- | ---------------------------------------- |
| 3200002 | "date_name should be str"                                  | "date_name应为string型"                  |
| 3200004 | "data_name should be str"                                  | "data_name应为string型"                  |
| 3200006 | "value of training_day is wrong，recommend range:[7,1000]" | "training_day取值错误，建议区间[7,1000]" |
| 3200008 | "type of training_day should be int or float"              | "training_day应为int或float型"           |
| 3200010 | "value of predict_day is wrong，recommend range:[0，2]"    | "predict_day取值错误，建议大于2"         |
| 3200012 | "type of predict_day should be int or float"               | "predict_day应为int或float型"            |
| 3200014 | "type of n must be int"                                    | "n应为int型"                             |



