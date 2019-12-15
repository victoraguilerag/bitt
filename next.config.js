// next.config.js
const withCSS = require('@zeit/next-css')
const withVideos = require('next-videos')

module.exports = withVideos(withCSS({
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

