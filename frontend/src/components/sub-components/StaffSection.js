import React, { useState, useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_API_URL

const StaffSection = () => {
     const [staff, setStaff] = useState([]);

    useEffect(() => {
         fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const response = await fetch(`${BASE_URL}/staff`);
            const data = await response.json();
            setStaff(data); 
            console.log(data)
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };


    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <span className="text-sm font-semibold text-[#1f8f6a] bg-white px-3 py-1 rounded-md shadow">FIXYLAND STAFF</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-12">Expert Staff Persons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staff.map((person, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <div className="relative">
                                <img src={`${BASE_URL}/${person.image}`} alt={person.firstName +" "+ person.lastName} className="w-full h-80 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
                                <button className="absolute bottom-4 right-4 w-10 h-10 bg-green-500 text-white rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">{person.firstName +" "+ person.lastName}</h3>
                                <p className="text-gray-500">{person.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default StaffSection;