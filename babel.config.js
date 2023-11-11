const path = require('path');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
        alias: {
          crypto: path.resolve(__dirname, './babel-patch-crypto.js'),
          stream: 'stream-browserify',
          buffer: '@craftzdog/react-native-buffer',
          '@ethersproject/pbkdf2': path.resolve(
            __dirname,
            './babel-patch-pbkdf2.js',
          ),
        },
      },
    ],
    'module:react-native-dotenv',
  ],
  overrides: [
    {
      test: './node_modules/ethers',
      plugins: [['@babel/plugin-transform-private-methods', { loose: true }]],
    },
  ],
};
