const locales = require('./config/locales');

module.exports = ctx => ({
  base: '/',

  head: require('./config/head'),

  plugins: require('./config/plugins'),
  locales: locales.get(),

  head: [
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@200;400;600&amp;display=swap', rel: 'stylesheet' }],
    ['script', {id: "scriptImporter"}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?f50fed7c86c34298bdc598fa7142d987";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        
        (function() { 
        var script = document.createElement("script"); 
        setTimeout(() => document.body.append(script))
        })(); 
  
    `]
  ],

  themeConfig: {
    logo: "/logo-docs.svg",

    algolia: ctx.isProd && {
        apiKey: '8f760cdb850b1e696b72329eed96b01b',
        indexName: 'flarum'
    },
    searchPlaceholder: 'Search Docs',

    docsRepo: 'flarum/docs',
    docsDir: 'docs',

    locales: locales.theme(),
  },
})
