const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@atoms': path.resolve(__dirname, 'src/components/atoms/index'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms/index'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules/index'),
        '@bosons': path.resolve(__dirname, 'src/components/bosons/index'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
