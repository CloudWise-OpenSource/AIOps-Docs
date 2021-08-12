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
  '/zh/': [
    {
      title: '介绍',
      collapsable: false,
      children: [
        '',
        'introduction',
        'releases',
      ]
    },
    {
      title: '基本使用',
      collapsable: false,
      children: [
        'file_manage',
        'develop_env',
        'service_manage',
        'resource_manage',
        'service_manage',
        'system_manage',
        'competence'
      ]
    },
    {
      title: '算法服务',
      collapsable: false,
      children: [
        '基于自动阈值的异常检测',
        '同环比异常检测算法',
        '固定阈值异常检测算法',
        '基于标准差异常检测算法',
        '基于频域分析的异常检测',
        '线性回归预测算法文档'
      ]
    }
  ]
}
