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
          title: '快速上手',
          path: '/zh/flyfish/getting-started',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: '认识FlyFish',
              collapsable: false,
              path: '/zh/flyfish/getting-started',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '创建第一个项目',
              collapsable: false,
              path: '/zh/flyfish/getting-started/create-project',
              sidebarDepth: 2,
              children: ['/']
            }
          ]
        },
        {
          title: '案例',
          path: '/zh/flyfish/case',
          collapsable: false,
          children: ['/']
        },
        {
          title: '进阶',
          path: '/zh/flyfish/advanced',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: '组件进阶',
              collapsable: false,
              path: '/zh/flyfish/advanced/component',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '大屏进阶',
              collapsable: false,
              path: '/zh/flyfish/advanced/screen',
              sidebarDepth: 2,
              children: ['/']
            }
          ]
        },
        {
          title: '自定义',
          path: '/zh/flyfish/component/basic',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: '组件构成',
              collapsable: false,
              path: '/zh/flyfish/component/basic',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '组件开发',
              collapsable: false,
              path: '/zh/flyfish/component/develop',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '创建组件',
              collapsable: false,
              path: '/zh/flyfish/component/create',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '组件基础',
              collapsable: false,
              path: '/zh/flyfish/component/related',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: 'React组件',
              collapsable: false,
              path: '/zh/flyfish/component/react',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '组件通信',
              collapsable: false,
              path: '/zh/flyfish/component/event',
              sidebarDepth: 2,
              children: ['/']
            },
            {
              title: '上传组件',
              collapsable: false,
              path: '/zh/flyfish/component/upload',
              sidebarDepth: 2,
              children: ['/']
            }
          ]
        },
        {
          title: '常见问题解答',
          path: '/zh/flyfish/faq',
          collapsable: false,
          children: ['/']
        },
        {
          title: '版本记录',
          path: '/zh/flyfish/changelog',
          collapsable: false,
          children: ['/']
        },
        {
          title: '内网部署',
          path: '/zh/flyfish/deploy',
          collapsable: false,
          children: ['/']
        },
        // {
        //   title: '开放API',
        //   path: '/zh/flyfish/api',
        //   collapsable: false,
        //   children: ['/']
        // }
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
