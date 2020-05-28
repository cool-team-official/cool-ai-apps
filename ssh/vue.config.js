const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackHookPlugin = require('webpack-hook-plugin')
module.exports = {
    publicPath: './',
    pluginOptions: {
        electronBuilder: {
            externals: [
                'ssh2'
            ]
        }
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([{
                    from: 'app.json',
                    to: 'app.json'
                },
                {
                    from: './src/preload.js',
                    to: 'preload.js'
                },
                {
                    from: './src/assets/logo.png',
                    to: 'logo.png'
                },
                {
                    from: 'README.md',
                    to: 'README.md'
                },
            ]),
            new WebpackHookPlugin({
                // onBuildStart:['echo "Webpack Start"'],
                onBuildEnd:['cd dist']
              })
        ]
    }
}