module.exports = function(app) {

	var mongoose = require('mongoose');
	var model = mongoose.model('Livro');
	
	app.get('/', function(req,res){
		model.find()
    	.then(function(livros) {

    		res.format({
    			//se o serviço pedir uma resposta em html
    			html: function(){
    				res.render('home/index',{livros: livros});		
    			},
    			//se o serviço pedior uma resposta em json
    			json: function(){
    				res.json(livros);
    			}
    		})
    	}, function(error) {
        	console.log(error);
        res.sendStatus(500);
    	});
		
	});

}