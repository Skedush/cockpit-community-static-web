import { resolve } from 'path';
import pxToViewPort from 'postcss-px-to-viewport';
import slash from 'slash2';
import { defineConfig } from 'umi';
import routes from './config/routes';
import ThemeConfig from './config/theme.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  // mfsu: {},
  hash: true,
  fastRefresh: {},
  title: '运维助手v0.1.0',
  dll: false,
  dva: { skipModelValidate: true, hmr: true },
  webpack5: {},
  routes: routes,
  targets: {
    chrome: 30,
  },
  theme: ThemeConfig('../src/themes/templates/light.less'),
  define: {
    MOCK_CONFIG: 'http://192.168.70.10:40001/project/23',
    API_PREFIX: '',
  },
  alias: {
    '@': resolve(__dirname, './src/'),
    components: resolve(__dirname, './src/components'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
    assets: resolve(__dirname, './src/assets'),
    services: resolve(__dirname, './src/services'),
    models: resolve(__dirname, './src/models'),
  },
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }

        const match = context.resourcePath.match(/src(.*)/);

        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = slash(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }

        return localName;
      },
    },
    // localsConvention: 'camelCase',
  },
  extraPostCSSPlugins: [
    pxToViewPort({
      unitToConvert: 'px',
      viewportWidth: 1920,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    }),
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
});
