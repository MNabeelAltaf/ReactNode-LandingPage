import { FaShip, FaPlane, FaHome } from 'react-icons/fa';
import { GiPalmTree, GiSunset } from 'react-icons/gi';

const ClientsSection = () => {
    return (
        <section className="py-40 bg-[#e9f0ec] text-center">
            <div className="container mx-auto px-4">
                <span className="text-sm font-semibold bg-white  p-1 px-2 text-[#1f8f6a]">OUR CLIENTS</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-12">We Have More Then 150+ <br /> Global Clients</h2>
                <div className="flex justify-around items-center space-x-8 md:space-x-16">

                    <FaShip className="w-12 h-12 text-gray-500" /> 
                    <GiPalmTree className="w-12 h-12 text-gray-500" /> 
                    <div className="relative">
                        <FaHome className="w-12 h-12 text-gray-500" />
                        <GiPalmTree className="w-6 h-6 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div> 
                    <div className="relative">
                        <GiSunset className="w-12 h-12 text-gray-500" />
                        <GiPalmTree className="w-6 h-6 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div> 
                    <FaPlane className="w-12 h-12 text-gray-500" /> 

                </div>
            </div>
        </section>
    );
};


export default ClientsSection;