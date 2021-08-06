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
        'code-of-conduct',
        'releases',
        'contributing',
        'bugs',
        'faq'
      ]
    },
    {
      title: '部署',
      collapsable: false,
      children: [
        'install',
        'update',
        'troubleshoot'
      ]
    },
    {
      title: '管理',
      collapsable: false,
      children: [
        ['admin','后台管理'],
        'config',
        'extensions',
        'languages',
        'themes',
        ['mail','配置邮箱'],
        'console'
      ]
    }
  ]
}
