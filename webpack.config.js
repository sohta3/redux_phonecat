var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ["", ".web.js", ".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		preLoaders: [
			{
				test: /\.tsx?$/,
				loader: "tslint",
				include: path.resolve(__dirname, "components")
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.tsx?$/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
			},
			{
				test: /\.css$/, // Only .css files
				loader: 'style!css' // Run both loaders
			}],
	}
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
//var reduxSrc = path.join(__dirname, '..', '..', 'src')
//var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
//var fs = require('fs')
//if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//  // Resolve Redux to source
//  module.exports.resolve = { alias: { 'redux': reduxSrc },  }
//  // Our root .babelrc needs this flag for CommonJS output
//  process.env.BABEL_ENV = 'commonjs'
//  // Compile Redux from source
//  module.exports.module.loaders.push({
//    test: /\.js$/,
//    loaders: [ 'babel' ],
//    include: reduxSrc
//  })
//}
