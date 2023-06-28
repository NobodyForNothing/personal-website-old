const path = require('path');

module.exports = env => {
    console.log(env);
    return {
        entry: './src/index.js',
        output: {
         filename: 'main.js',
         path: path.resolve(__dirname, 'dist'),
        },
        mode: env.developement ? 'development' : 'production',
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
        devServer: {
         static: './dist',
        },
       };
}