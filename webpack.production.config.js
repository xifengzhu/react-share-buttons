var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: './src/index',

  output: {
    library: 'ReactShareButtons',
    libraryTarget: 'umd',
    path: __dirname + '/dist/',
    filename: 'react-share-buttons.js'
  },

  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react']
          }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
      { test: /\.useable\.css$/, loader: "style/useable!css" },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader' 
      },
      {
        // I want to uglify with mangling only app files, not thirdparty libs
        test: /.*\/app\/.*\.js$/,
        // exclude: /.spec.js/, // excluding .spec files
        exclude: /node_modules/, // excluding .spec files
        loader: "uglify"
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
