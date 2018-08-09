const webpack = require('webpack');

module.exports = function (env){
    return {
        output: {
            filename: `${env.PLATFORM}/index.js`
        },
        entry: './index.ts',
        module: {
            rules: [
              {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
              }
            ],
          },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/(.*)PLATFORM(\.*)/, function(resource) {
                resource.request = resource.request.replace(/PLATFORM/, env.PLATFORM);
            })
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        devtool: "source-map" 
    }
}