const path =  require('path');

module.exports = {
    target: 'node',
    externals: ['axios'],
    entry: {'vue-http': './src/index.ts'},
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].umd.js',
        libraryTarget: 'umd',
        library: 'vHttp',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.js'] //Webpack does not look for .ts files by default. 
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    }
};