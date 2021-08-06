const langs = [ 'zh', 'en'];
const paths = { zh: '/zh', en: '/en' };

module.exports = {
  get(file = '') {
      return langs.reduce((locales, name) => {
        locales[paths[name] || `/${name}/`] = require(`./${name}${file}`);

        return locales;
      }, {});
  },

  theme() {
    return this.get('/theme');
  }
}
