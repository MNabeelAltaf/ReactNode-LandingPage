import React, { useEffect, useState } from 'react';
import { FaUserFriends, FaBed, FaBath } from 'react-icons/fa';


const BASE_URL = process.env.REACT_APP_API_URL;

const RoomCard = ({ img, price, title, guests, beds, bath }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
            <img src={`${BASE_URL}/${img}`} alt={title} className="w-full h-60 object-cover" />
            <span className="absolute top-4 left-4 bg-[#1f8f6a] text-white text-sm font-semibold px-3 py-1 rounded-md">${price} / Night</span>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <div className="flex items-center space-x-6 text-gray-600 my-4">
                <span className="flex items-center gap-2"><FaUserFriends /> {guests} Guests</span>
                <span className="flex items-center gap-2"><FaBed /> {beds} Beds</span>
                <span className="flex items-center gap-2"><FaBath /> {bath} Bath</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <button className="bg-[#1f8f6a] text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 flex items-center gap-2">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
        </div>
    </div>
);

const LuxuryRoomsSection = () => {
    const [rooms, setRooms] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await fetch(`${BASE_URL}/hotels`); 
            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    useEffect(() => {
        fetchHotels(); 
    }, []);

    return (
        <section className="py-24 bg-[#1f8f6a] bg-opacity-90" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
            <div className="container mx-auto px-4 text-center">
                <span className="text-sm font-semibold bg-white text-[#1f8f6a] px-3 py-1 rounded-md">OUR BEST ROOMS</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-12">Luxury Rooms and Resort</h2>
                <div className="text-left grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <RoomCard 
                            key={room._id} 
                            img={room.image}  
                            price={room.pricePerNight} 
                            title={room.name} 
                            guests={room.guests} 
                            beds={room.beds} 
                            bath={room.baths} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LuxuryRoomsSection;
