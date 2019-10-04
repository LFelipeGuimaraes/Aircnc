const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } // referencia pro usuario que criou o spot
}, {
    toJSON: {
        virtuals: true,
    },
});

// Cria uma url para a rota que servira as imagens inseridas
// pelo usuario.
// Esse atributo é computado em tempo de execução e
// não é armazenado no banco.
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);