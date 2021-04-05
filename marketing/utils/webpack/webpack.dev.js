const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonWebPackConfig = require("./webpack.common")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packagesJson = require('../../package.json')

module.exports = merge(commonWebPackConfig, {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './marketingIndex': './src/bootstrap'
            },
            shared: packagesJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ]
})