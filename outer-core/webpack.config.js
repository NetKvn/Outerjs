'use strict';

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'outer-core.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};
