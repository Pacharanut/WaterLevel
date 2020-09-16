module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ['vuetify'],
  transpileDependencies: ['x5-gmaps'],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'
}
