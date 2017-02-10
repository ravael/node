
module.exports = function(app) {

	var mongoose = require('mongoose');
	var model = mongoose.model('Livro');
	
	app.get('/produtos', function(req,res){

		//var connection = app.infra.connectionFactory();

		//var mongoose = app.infra.mongoFactory();

		model.find()
    	.then(function(livros) {
    		res.render('produtos/lista',{livros: livros});
        	//res.json(fotos);
    	}, function(error) {
        	console.log(error);
        res.sendStatus(500);
    });
		
		/*connection.query('select * from livros', function(err, result){

			var livros = [
					
					{
					  "id": "2",
					  "nome": "Nodejs"
					},
					{
					  "id": "3",
					  "nome": "JavaScript"
					},{
					  "id": "4",
					  "nome": "Angular"
					}
			];
				res.render('produtos/lista',{livros: livros});
		});

		connection.end();*/

		//res.render('produtos/lista');
	});

}