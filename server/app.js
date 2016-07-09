// PACKAGES //
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var helmet = require('helmet');
var fs = require('fs');

// SERVER FILES //
var config = require('../config');

// ROUTE HANDLERS //
var routes = require('./routes');

// APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function(path, options, callback) {
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(morgan('dev')); // logger
app.use(express.static(__dirname + '/../client')); // set static folder
app.use(favicon(__dirname + '/../client/assets/img/favicon/favicon.ico')); // favicon
app.use(bodyParser.json()); // parse json
app.use(bodyParser.urlencoded({ extended: true })); // parse forms
app.use(helmet()); // bunch of security stuff

// ROUTES //
app.use('/', routes); // index routes

// ERROR HANDLER //
app.use(function(err, req, res, next) { res.status(err.status || 500); });

module.exports = app;
