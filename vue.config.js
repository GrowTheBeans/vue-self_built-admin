module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "src/styles/variables.scss";`
      }
    }
  },
  devServer: {
    port: 7020,
    // proxy: {}
  }
}
