export default {
  install (Vue) {
    require('./styles/index.scss')

    const components = require.context('./components', true, /\index.vue$/)
    components.keys().forEach(k => Vue.component(getModuleName(k), components(k).default))
  }
}

function getModuleName (path) {
  return path.replace(/\.vue$/, '').split('/').slice(1)[0]
}