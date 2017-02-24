const path = require('path');

module.exports = {
	context: path.resolve(__dirname,'src'),
	entry: './js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	resolve: {
		extensions: ['.js']
	},
	watch: false
}