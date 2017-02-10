var app = require('./config/express')();
//var routes = require('./app/routes/produtos')(app);
//require('./config/mongo')('localhost/node');

app.listen(3000, function(){
	console.log('Server Started')
});