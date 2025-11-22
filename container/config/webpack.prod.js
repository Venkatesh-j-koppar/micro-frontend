const {merge} = require('webpack-merge')
const HtmlModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('../config/webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN
const prodConfig = {
    name: 'prod',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlModuleFederation({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig)

