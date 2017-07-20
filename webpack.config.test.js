const path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');

const root = process.cwd();

const tsconfigFile = path.join(root, 'tsconfig.json');

const config = {
  entry: {
    index: path.join(root, 'src', 'index.ts'),
  },
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
    path: path.join(root, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.join(root, 'src'),
        ],
        exclude: [
          path.join(root, 'node_modules'),
        ],
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: tsconfigFile,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CheckerPlugin(),
  ],
};

module.exports = config;
