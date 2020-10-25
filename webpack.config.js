const path =  require('path');

module.exports = {
    target: 'node',
    externals: ['axios'],
    entry: {'vue-http': './src/vue-http.ts'},
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].umd.js',
        libraryTarget: 'umd',
        library: 'vHttp',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    }
};