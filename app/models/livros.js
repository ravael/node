var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: false
    }
});

mongoose.model('Livro', schema);