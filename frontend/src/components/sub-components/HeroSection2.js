import React from 'react';

const HeroSection2 = () => {
    return (
        <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-5xl md:text-7xl font-bold">Booking</h1>
                <p className="mt-4 text-lg">Home &gt; Booking</p>
            </div>
        </div>
    );
};

export default HeroSection2;