var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
require('./mongo')('localhost/mongo-alura');

module.exports = function(){

	var app = express();

	app.set('view engine','ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('models',{cwd:'app'})
	.then('routes')
	.then('infra')
	.into(app);

	return app;
}




