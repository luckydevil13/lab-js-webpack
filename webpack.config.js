const path = require('path');

module.exports = {
	// start point to resolve dependencies 
	context: path.resolve(__dirname,'src'),

	// MUST: start point to resolve
	entry: './js/app.js',

	// MUST: result of work
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	// extensions to work with
	resolve: {
		extensions: ['.js']
	},

	// Watch the filesystem for changes
	watch: false
}