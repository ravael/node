module.exports = function(app){

	var mongoose = require('mongoose');
	var model = mongoose.model('Livro');
	
	app.get('/promocoes/form', function(req,res){
		model.find()
    	.then(function(livros) {
    		res.format({
    			//se o serviço pedir uma resposta em html
    			html: function(){
    				res.render('promocoes/form',{lista: livros});		
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


	app.post("/promocoes", function(req,res) {
        var promocao = req.body;

        console.log('uma coisa');

        app.get('io').emit('novaPromocao',promocao);
        res.redirect("/promocoes/form");
    });
}