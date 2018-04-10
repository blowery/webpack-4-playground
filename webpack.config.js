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
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
		namedChunks: true,
		namedModules: true,
		minimize: true,
	},
};
