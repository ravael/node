function LivroRepository(){

	//this._connection = connection;
}

LivroRepository.prototype.lista = function(callback){
	this._connection.query('select * from Livro', callback);
}

module.exports = function(){
	return LivroRepository;
}