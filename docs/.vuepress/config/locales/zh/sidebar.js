module.exports = {
  '/zh/gaia/': [
    {
      title: 'Generic AIOps Atlas',
      collapsable: false,
      children: [
        '',
        'overview',
        'description',
        'tasks'
      ]
    },
  ],
  
  '/zh/hours/': [
    {
      title: 'Hours',
      collapsable: false,
      children: [
        '',
        'getting_started',
        'faq',
        'error_code', 
      ]
    },
    {
      title: 'Hours算法服务',
      collapsable: false,
      children: [
        {
          title: '指标异常检测类',
          collapsable: true,
          children: [
            'auto_value',
            'dod_wow',
            'fixed_values',
            'sigma',
            'wave_detection'
          ]
        },
        {
          title: '指标预测类',
          collapsable: true,
          children: [
            'arima',
            'holtwinter',
            'lr',
          ]
        }
      ]
    },
  ],
  
  '/zh/': [
    {
      title: '介绍',
      collapsable: false,
      children: [
        '',
        'releases',
      ]
    },
    {
      title: '基本使用',
      collapsable: false,
      children: [
        'getting_started',
        'manual-file-manger',
        'manual-dev-env',
        'manual-image-manger',
        'manual-service-manger'
      ]
    }
  ],


}
