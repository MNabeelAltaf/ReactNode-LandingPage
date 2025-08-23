const Hotel = require('./models/hotels');
const Staff = require('./models/staffs');

async function seedData() {

    const hotel1 = new Hotel({
        name: 'Deluxe Rooms',
        pricePerNight: 800,
        guests: 2,
        beds: 2,
        baths: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        image: 'images/rooms-img-1.jpg'
    });
    await hotel1.save();


    const hotel2 = new Hotel({
        name: 'Ocean View Suites',
        pricePerNight: 1200,
        guests: 4,
        beds: 2,
        baths: 2,
        description: 'Enjoy breathtaking views of the ocean from your suite, with luxury amenities and excellent service.',
        image: 'images/rooms-img-2.jpg'
    });
    await hotel2.save();

    const hotel3 = new Hotel({
        name: 'Mountain Retreat',
        pricePerNight: 950,
        guests: 4,
        beds: 3,
        baths: 2,
        description: 'A cozy mountain retreat for nature lovers, offering comfort and scenic views of the surrounding peaks.',
        image: 'images/rooms-img-3.jpg'
    });
    await hotel3.save();

    console.log('Hotel data seeded successfully');


    const staff1 = new Staff({
        firstName: 'Michael',
        lastName: 'Dean',
        role: 'Manager',
        image: 'images/staff-img-1.jpg'

    });
    await staff1.save();

    const staff2 = new Staff({
        firstName: 'Jane',
        lastName: 'Smith',
        role: 'Receptionist',
        image: 'images/staff-img-2.jpg'

    });
    await staff2.save();

    const staff3 = new Staff({
        firstName: 'Arnold',
        lastName: 'Johnson',
        role: 'Assistant Chef',
        image: 'images/staff-img-3.jpg'
    });
    await staff3.save();

    const staff4 = new Staff({
        firstName: 'Michael',
        lastName: 'Johnson',
        role: 'Supervisor',
        image: 'images/staff-img-4.jpg'
    });
    await staff4.save();

    console.log('Staff data seeded successfully');
}

module.exports = seedData;
