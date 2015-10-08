var webpack = require('webpack'),
	path = require('path');
 
module.exports = {
    debug: true,
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.(html|tmpl|hyp)$/,
			loader: "html-loader"
		}, {
			test: /\.(png|jpg)$/, 
			loader: 'url?limit=32768'
		}
    ]},
    
    resolve: {
        alias: {
            hypertag: path.resolve(__dirname, 'hypertag', 'hypertag.js'),
            hypertag_library: path.resolve(__dirname, 'hypertag', 'Hypertag.library.js'),
            jquery: path.resolve(__dirname, 'hypertag', 'dependencies', 'jquery-2.1.4.min.js'),
            JQTemplates: path.resolve(__dirname, 'hypertag', 'dependencies', 'jquery-tmpl-no-mem-leak.js'),
            jshint: path.resolve(__dirname, 'hypertag', 'dependencies', 'JSHint.js'),
            stacktrace: path.resolve(__dirname, 'hypertag', 'dependencies', 'stacktrace.js')
        }
    }
};