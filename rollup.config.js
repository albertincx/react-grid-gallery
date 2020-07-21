import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const external = (id) => !id.startsWith('.') && !id.startsWith('/');

const babelConfig = (
  { useESModules, targets } = {
    useESModules: true,
    targets: { browsers: 'last 2 versions' },
  },
) => ({
  comments: false,
  runtimeHelpers: true,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/transform-runtime', { useESModules, regenerator: false }],
    ['babel-plugin-transform-async-to-promises', { inlineHelpers: true }],
  ],
  exclude: 'node_modules/**',
});

const umdConfig = ({ minify } = {}) => ({
  input: pkg.src,
  external: ['react', 'react-dom', 'prop-types', 'react-images'],
  output: {
    name: 'ReactGridGallery',
    file: minify ? pkg['umd:main'].replace('.js', '.min.js') : pkg['umd:main'],
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'react-images': 'Carousel',
    },
  },
  plugins: [
    resolve(),
    babel(
      babelConfig({
        targets: { browsers: ['last 2 versions', 'safari >= 7'] },
      }),
    ),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        minify ? 'production' : 'development',
      ),
    }),
    commonjs(),
    minify ? uglify() : {},
    filesize(),
  ],
});
const useESModules = false;
const umdConfigDev = ({} = { minify: true }) => ({

  input: 'examples/app.js',
  output: {
    name: 'ReactGridGallery',
    file: 'public/bundle.js',
    format: 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'react-images': 'Carousel',
    },
  },
  plugins: [
    resolve({
      main: true,
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
      ],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
          'cloneElement',
          'StrictMode',
          'createFactory',
          'createRef',
          'createContext',
          'isValidElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'findDOMNode',
          'hydrate',
          'createPortal',
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    babel({
      runtimeHelpers: true,
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/transform-runtime', { useESModules, regenerator: false }],
        ['babel-plugin-transform-async-to-promises', { inlineHelpers: true }],
      ],
    }),
  ],
});
const rollupConfig = [
  // Browser-friendly UMD builds
  umdConfig(),
  umdConfig({ minify: true }),
  // CommonJS
  {
    input: pkg.src,
    external,
    output: [{ file: pkg.commonjs, format: 'cjs' }],
    plugins: [
      resolve(),
      babel(babelConfig({ useESModules: false })),
      filesize()],
  },

  // ES module
  {
    input: pkg.src,
    external,
    output: [{ file: pkg.module, format: 'esm' }],
    plugins: [resolve(), babel(babelConfig()), filesize()],
  },
  umdConfigDev(),
];

export default rollupConfig;
