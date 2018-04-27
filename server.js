const express = require('express');
/*const webpackDevServer = require('webpack-dev-server');*/
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
/*const config = require('./webpack.config');*/
/*const options = {
 contentBase: './dist',
 hot: true,
 host: 'localhost',
 };

 webpackDevServer.addDevServerEntrypoints(config, options);*/
/*const compiler = webpack(config);*/
/*const server = new webpackDevServer(compiler, options);*/


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
/*app.use(webpackDevMiddleware(compiler, {
 publicPath: config.output.publicPath
 }));*/

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(8000, function () {
    console.log('App listening on port 3000!\n');
});