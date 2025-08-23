const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Select Type', 'Normal', 'Business'],
        required: true
    },
    room: {
        type: String,
        enum: ['Select Room', 'Classic', 'Luxury'],
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    message: {
        type: String
    }
});

const Appointment = mongoose.model('appointments', appointmentSchema);
module.exports = Appointment;
