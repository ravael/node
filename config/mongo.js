var mongoose = require('mongoose');

module.exports = function(uri){

//var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://'+uri);

mongoose.connection.on('connected', function(){
	console.log('MongoDB Connected');
});

mongoose.connection.on('error', function(erro){
	console.log('Erro no MongoDB' + erro);
});

mongoose.connection.on('disconnected', function(){
	console.log('MongoDB Disconncet');
});

}

