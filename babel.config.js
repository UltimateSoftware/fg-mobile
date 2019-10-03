const alias = require('./aliases');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias,
        root: ['./'],
        extensions: [".ios.js", ".android.js", ".js", ".json"]
      }
    ],
  ]
};