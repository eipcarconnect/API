var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RideSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    vehicleLicencePlate: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ride', RideSchema);