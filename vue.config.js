const path = require('path')
const resolve =dir=>{
  return path.join(__dirname,dir)
}
const BASE_URL = process.env.NODE_ENV==='procution' ? '/iview-admin/' : ''
module.exports = {
  lintOnSave:false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '',
  chainWebpack : config=>{
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
  },
  //打包时，不生成map文件
  productionSourceMap:false,

  // devServer:{
  //   proxy:'http://location:4000'
  // }
}
