// next.config.js
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        }),
        config.module.rules.push({
            test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: 'base64-inline-loader'
        })
        return config
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '/',
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
}))

