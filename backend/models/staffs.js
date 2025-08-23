const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
});

const Staff = mongoose.model('staffs', staffSchema);
module.exports = Staff;
