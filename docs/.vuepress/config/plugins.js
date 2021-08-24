module.exports = [
  ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    },
  ],
  '@vuepress/back-to-top',
  ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
  }],
  ['vuepress-plugin-mathjax', {
    showError: true
  }]
]
