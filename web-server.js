/**
 * Module dependencies
 */
var express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

/**
 * Configuration
 */

var config = require('./webpack.config.js');
var compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

//set the port
var port = process.env.PORT || 8080;

// //set the routes config
// app.get('/', function(req, res) {
//     res.sendfile('./dist/index.html');
// });

// //set the static files location. /app/img will be /img for users
// app.use(express.static(__dirname + '/'));

/**
 * Start the server
*/
app.listen(port);
console.log('Nodejs Express server is running on port ', port);