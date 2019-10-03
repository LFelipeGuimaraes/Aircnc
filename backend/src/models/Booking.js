const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, // referencia pro usuario que esta alugando spot
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    } // referencia pro spot que esta sendo alugado
});

module.exports = mongoose.model('Booking', BookingSchema);