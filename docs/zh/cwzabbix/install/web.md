#### 安装 Zabbix Web 界面

- 复制 PHP 文件，使用 Apache 或 Nginx 代理

```shell
shell> mkdir <htdocs>/zabbix
shell> cd CW-Zabbix/UI
shell> cp -a . <htdocs>/zabbix
```

- 将仓库中`/ui/conf/zabbix.conf.php.example`，复制到`/etc/zabbix/`，删除 “.example” 后缀名，修改相关配置（详见“***参数/配置\***”）
- 配置完成后，访问 web 页面，初始化 zabbix，初始化请参考：[Zabbix Web界面初始化](https://www.zabbix.com/documentation/5.0/zh/manual/installation/frontend)