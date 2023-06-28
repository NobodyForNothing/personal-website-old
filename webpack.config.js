const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index", "blog"];

module.exports = env => {
    console.log(env);
    return {
        mode: env.developement ? 'development' : 'production',
        entry: pages.reduce((config, page) => {
            config[page] = `./src/${page}.js`;
            return config;
          }, {}),
        output: {
         filename: '[name].js',
         path: path.resolve(__dirname, 'dist'),
        },
        optimization: {
            splitChunks: {
              chunks: "all",
            },
          },
        devServer: {
         static: './dist',
        },
        stats: {
            children: true,
        },
        module: {
            rules: [
             {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
             },
             {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
             },
             {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
             },
            ],
           },
           plugins: [].concat(
               pages.map(
                 (page) =>
                   new HtmlWebpackPlugin({
                     inject: 'body',
                     template: `./index.html`,
                     filename: `${page}.html`,
                     chunks: [page],
                   })
               ),
               []
             ),
       };
}