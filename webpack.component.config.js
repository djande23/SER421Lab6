const webpack = require('webpack');
const path = require('path');

const entryName = process.env.ENTRY_NAME || 'main';

module.exports = (env, argv) => {

    let webpackComponentConfig = {
        optimization: {},
        entry: {
            [entryName]: path.join(process.cwd(), 'target/generated-src/webpack-entry.tsx')
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        output: {
            path: path.join(process.cwd(), 'styleguide/dist'),
            publicPath: '/dist/',
            filename: '[name].js?[hash]',
            library: '[name]',
            libraryTarget: 'umd'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify('production')}
            })
        ],
        module: {
            rules: [
                { test: /\.worker\.([jt])sx?$/, use: { loader: 'worker-loader', options: { inline: true } } },
                { test: /\.([jt])sx?$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
                { test: /\.(jpg|png|gif|pdf|ttf|woff2?|eot|svg)$/, use: 'file-loader' },
                { test: /\.css$/, use: ['css-loader'] }
            ]
        },
        devServer: {
            historyApiFallback: true,
        }
    };

    return webpackComponentConfig;
};