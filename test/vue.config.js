
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: 'app.json', to: 'app.json' },
                { from: './src/preload.js', to: 'preload.js' },
                { from: './src/assets/logo.png', to: 'logo.png' },
            ])
        ]
    }
}
        