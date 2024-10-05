const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/inventory-front-end-vue/'
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // 如果你使用 Vue Options API，設置為 true
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // 生產環境中禁用 Vue Devtools
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false) // 禁用 hydration mismatch 詳細信息
      })
    ]
  }

}