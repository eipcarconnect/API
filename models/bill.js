var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    rideId: {
        type: String,
        required: true
    },
    priceTTC: {
        type: Number,
        required: true
    },
    priceHT: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bill', BillSchema);