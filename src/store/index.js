import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

/*
  require.context函数
  webpack的api
  从一个文件夹引入很多模块的情况, 可以使用这个api
  https://webpack.js.org/guides/dependency-management/#requirecontext
*/
const modulesFiles = require.context('./modules', true, /\.js$/)

/*
  遍历require.context函数获取到的文件信息，添加到modules中
  可以实现自动导入对应文件夹下的所有模块
*/
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
