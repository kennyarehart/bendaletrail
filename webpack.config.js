var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), // 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			// template: 'app/index.html'
			template: path.resolve('app/index.html')
		})
	]
}

// module.exports = {
// 	entry: './src/index.js',
// 	output: { path: __dirname + '/dist', publicPath: '/', filename: 'bundle.js' },
// 	devServer: { contentBase: './dist' },
// 	module: { rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }] }
// }
