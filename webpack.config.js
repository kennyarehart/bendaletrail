var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
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
			template: path.resolve('app/index.html')
		}),
		new Dotenv()
	]
}
