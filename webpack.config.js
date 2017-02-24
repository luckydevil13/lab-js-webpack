const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // start point to resolve dependencies 
    context: path.resolve(__dirname, 'src'),

    // MUST: start point to resolve
    entry: {
        app: './js/app.ts',
        style: './style/style.sass'
    },

    // MUST: result of work
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'build')
    },

    // extensions to work with
    resolve: {
        extensions: ['.ts','.sass']
    },

    // Watch the filesystem for changes
    watch: false,

    module: {
        rules: 
        [
        	{
            	test: /\.ts$/,
            	loader: 'awesome-typescript-loader'
        	},

        	{
		        test: /\.sass$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader']
		        })
		    }
        ],

    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]

    


}
