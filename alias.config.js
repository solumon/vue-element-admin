
/*
* 由于 Vue CLI 3 不再使用传统的 webpack 配置文件，导致 WebStorm 无法识别别名
* 手动创建一个 webpack 配置文件, 然后在 Languages & Frameworks - JavaScript - Webpack 里指定 webpack 配置文件。
* */
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
