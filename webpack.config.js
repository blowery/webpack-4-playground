const path = require('path');

module.exports = {
	entry: {
		one: './src/one',
		two: './src/two',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devtool: false,
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
		namedChunks: true,
		namedModules: true,
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"env",
								{
									targets: { browsers: "> 10%" },
									// cannot override .babelrc `modules:true` to `modules:false`
									modules: false,
									useBuiltIns: true
								}
							]
						],
						plugins: ["syntax-dynamic-import"]
					},
					
				}
			}
		]
	}
};
