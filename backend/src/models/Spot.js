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

// cria uma url para thumbnail
// nessa rota serao servida as imagens das empresas (inseridas pelo usuario)
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);