module.exports = function(app) {

	var mongoose = require('mongoose');
	var model = mongoose.model('Livro');
	
	app.get('/produtos', function(req,res){
		model.find()
    	.then(function(livros) {
    		res.format({

    			html: function(){
    				res.render('produtos/lista',{livros: livros});		
    			},
    			json: function(){
    				res.json(livros);
    			}
    		})

    	}, function(error) {
        	console.log(error);
        res.sendStatus(500);
    	});
		
	});

	app.get('/produtos/form', function(req,res){
		res.render('produtos/cadastro',{errosValidacao:{}});
	});

	app.post('/produtos/salva', function(req,res){
		var livro = req.body;

		var validator = req.assert('titulo', 'Titulo é obrigatório').notEmpty();
		var erros = req.validationErrors();
		if(erros){
			res.render('produtos/cadastro',{errosValidacao:erros});
			return;
		}
		model
		.create(livro)
		.then(function(livros){
			res.redirect('/produtos');
		}, function(error){
			console.log(error);
		res.sendStatus(500);
		})
	});

}