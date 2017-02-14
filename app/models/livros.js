var mongoose = require('mongoose');

var schema = mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    }
});

mongoose.model('Livro', schema);