var express = require('express');
var load = require('express-load');

require('./mongo')('localhost/test');

module.exports = function(){

	var app = express();

	app.set('view engine','ejs');
	app.set('views','./app/views');

	load('models',{cwd:'app'})
	.then('routes')
	.then('infra')
	.into(app);

	return app;
}




