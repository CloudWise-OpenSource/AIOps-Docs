module.exports = {
  '/zh/gaia/': [
    {
      title: 'Generic AIOps Atlas',
      collapsable: false,
      children: [
        '',
        'overview',
        'dataset-description',
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
        },
        {
          title: '上传csv文件',
          collapsable: true,
          children: [
            'upload_csv_file'
          ]
        },
      ]
    },
  ],

  '/zh/flyfish/': [
    {
      title: 'FlyFish',
      collapsable: false,
      children: [
        {
          title: '架构及目录',
          path: '/zh/flyfish/design',
          collapsable: false,
        },
        {
          title: '快速上手',
          path: '/zh/flyfish/getting-started',
          collapsable: false,
          sidebarDepth: 1,
          children: ['getting-started/', 'getting-started/create-project'],
        }, 
        {
          title: '案例',
          path: '/zh/flyfish/case',
          collapsable: false,
        },
        {
          title: '进阶',
          path: '/zh/flyfish/advanced/component',
          collapsable: false,
          children: ['advanced/component', 'advanced/screen']
        },
        {
          title: '自定义',
          path: '/zh/flyfish/component/basic',
          collapsable: false,
          children: ['component/basic', 'component/develop', 'component/create', 'component/related', 'component/react', 'component/event', 'component/upload']
        },
        {
          title: '常见问题解答',
          path: '/zh/flyfish/faq',
          collapsable: false,
        },
        {
          title: '版本记录',
          path: '/zh/flyfish/changelog',
          collapsable: false,
        },
        {
          title: '内网部署',
          path: '/zh/flyfish/deploy',
          collapsable: false,
        },
        // {
        //   title: '开放API',
        //   path: '/zh/flyfish/api',
        //   collapsable: false,
        // }
      ]
    }
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
