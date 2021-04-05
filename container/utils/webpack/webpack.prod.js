const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonWebPackConfig = require("./webpack.common")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packagesJson = require('../../package.json')

module.exports = merge(commonWebPackConfig, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js'
            },
            shared: packagesJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ]
})