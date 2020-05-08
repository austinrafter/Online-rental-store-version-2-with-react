//author Param Patel
//012421227
const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    car_type: String,
    rate_per_hour: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: null
    },
    location: {
        type: String,
        required: true,
        default: null
    },
    lat: {
        type: Number,
        required: true,
        default: null
    },
    lng: {
        type: Number,
        required: true,
        default: null
    },
    productImage: String,
    created_by: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    number_of_seats: {
        type: Number,
        default: 4
    },
    unavail: [{
        from: {
            type: Date,
            required: false,
            default: null
        },
        to: {
            type: Date,
            required: false,
            default: null
        },
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }]
});

module.exports = mongoose.model('Car', carSchema);