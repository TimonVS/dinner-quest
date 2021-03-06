import path from 'path'

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://timonvs.github.io/dinner-quest/dist/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'client', 'app'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules')
    ],
    moduleDirectories: [
      'bower_components',
      'node_modules',
    ],
    alias: {
    }
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.scss$/, loader: 'style!css!resolve-url!sass' },
       { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      }
    ]
  },
  externals: {
    angular: 'angular'
  }
};
