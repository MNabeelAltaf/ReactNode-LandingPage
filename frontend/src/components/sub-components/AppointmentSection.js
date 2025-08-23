import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Alert } from 'antd';
import Img1 from '../../images/appointment-section-img.jpg';

const inputStyles = "w-full bg-white border border-gray-300 rounded-md py-3 px-4 bg-gray-200 text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

const BASE_URL = process.env.REACT_APP_API_URL;

const AppointmentSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'Select Type',
        room: 'Select Room',
        checkIn: '',
        checkOut: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, type, room, checkIn, checkOut, message } = formData;

        try {
            setIsSubmitting(true);
            const response = await fetch(`${BASE_URL}/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    type,
                    room,
                    checkIn,
                    checkOut,
                    message,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                setAlertType('success');
                setResponseMessage('Appointment successfully booked!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    type: 'Select Type',
                    room: 'Select Room',
                    checkIn: '',
                    checkOut: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                setAlertType('error');
                setResponseMessage(`Failed to book appointment: ${errorData.message}`);
            }
        } catch (error) {
            setAlertType('error');
            setResponseMessage(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setResponseMessage('');
            }, 6000);
        }
    };

    return (
        <section className="py-24 bg-[#e9f0ec]">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="text-sm font-semibold text-[#1f8f6a] bg-white px-3 py-1 rounded-md shadow">STAY WITH US</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">Make An Appointment</h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                      
                        {responseMessage && (
                            <Alert
                                message={responseMessage}
                                type={alertType}
                                showIcon
                                className="mb-4"
                            />
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Ex. John"
                                        className={inputStyles}
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        name="firstName"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Ex. Doe"
                                        className={inputStyles}
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        name="lastName"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Ex. info@domain.com"
                                        className={inputStyles}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="Ex. (+1) 987 654 3210"
                                        className={inputStyles}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        name="phone"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Type</label>
                                    <select
                                        className={`${inputStyles} appearance-none`}
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        name="type"
                                        required
                                    >
                                        <option value="Select Type">Select Type</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Business">Business</option>
                                    </select>
                                    <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Room</label>
                                    <select
                                        className={`${inputStyles} appearance-none`}
                                        value={formData.room}
                                        onChange={handleInputChange}
                                        name="room"
                                        required
                                    >
                                        <option value="Select Room">Select Room</option>
                                        <option value="Classic">Classic</option>
                                        <option value="Luxury">Luxury</option>
                                    </select>
                                    <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                                    <input
                                        type="date"
                                        className={`${inputStyles} pr-10`}
                                        value={formData.checkIn}
                                        onChange={handleInputChange}
                                        name="checkIn"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                                    <input
                                        type="date"
                                        className={`${inputStyles} pr-10`}
                                        value={formData.checkOut}
                                        onChange={handleInputChange}
                                        name="checkOut"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        placeholder="Ex. type message"
                                        rows="5"
                                        className={inputStyles}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#1f8f6a] text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 transition duration-300 mt-6 flex items-center gap-2"
                            >
                                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </form>



                    </div>

                    <div className="text-center lg:col-span-2 bg-green-600 p-8 rounded-lg text-white">
                        <div className="relative mb-6">
                            <img src={Img1} alt="Hotel room" className="rounded-lg" />
                        </div>
                        <h3 className="text-4xl font-bold">(+1) 987 654 3210</h3>
                        <p className="mt-4">Mon-Fri: 7:00 am - 9:00 pm</p>
                        <p className="text-sm text-green-200">24/7 Service Available</p>
                        <div className="flex justify-center">
                            <button className="bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition duration-300 mt-6 flex items-center gap-2">
                                Call Us Now
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
