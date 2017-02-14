var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);
//var routes = require('./app/routes/produtos')(app);
//require('./config/mongo')('localhost/node');

http.listen(3000, function(){
	console.log('Server Started')
});