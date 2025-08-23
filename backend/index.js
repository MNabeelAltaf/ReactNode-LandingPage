const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./dbConfig');
const seedData = require('./seed');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/images', express.static(path.join(__dirname, 'images')));

connectDB();
// seedData();

const Appointments = require('./models/appointments');
const Hotels = require('./models/hotels');
const Staff = require('./models/staffs');


app.get('/api', (req, res) => {
    res.send(`backend running on port ${port}`);
});


app.get('/api/hotels', async (req, res) => {
    try {
        const hotels = await Hotels.find(); 
        res.json(hotels); 
    } catch (err) {
        res.status(500).json({ message: 'Error fetching hotels', error: err });
    }
});

app.get('/api/staff', async (req, res) => {
    try {
        const staff = await Staff.find(); 
        res.json(staff);  
    } catch (err) {
        res.status(500).json({ message: 'Error fetching staff', error: err });
    }
});


app.post('/api/appointments', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, type, room, checkIn, checkOut, message } = req.body;

        const newAppointment = new Appointments({
            firstName,
            lastName,
            email,
            phone,
            type,
            room,
            checkIn,
            checkOut,
            message,
        });

        await newAppointment.save(); 
        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating appointment', error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
