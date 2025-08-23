import { FaSwimmer, FaBicycle } from 'react-icons/fa';

import Image1 from '../../images/main-section-img.jpg';
import Image2 from '../../images/main-section-img-2.jpg';

const IconPlaceholder = ({ className }) => <div className={`w-6 h-6 bg-gray-300 rounded-full ${className}`}></div>;
const MainSection = () => {
    return (
        <section className="py-20 bg-[#e9f0ec]">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-sm font-semibold text-[#1f8f6a] bg-white px-3 py-1 rounded-md shadow">LUXURY HOTEL</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">We Provide Outdoor Activities To All Visitors</h2>
                    <p className="text-gray-600 mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                    <div className="space-y-6 mb-8">
                        <div className="flex items-center space-x-4">
                            <FaSwimmer className="w-12 h-12" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">The Best Swimming Pool</h3>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaBicycle className="w-12 h-12" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">The Best Stationary Bike</h3>
                            </div>
                        </div>
                    </div>
                    <ul className="space-y-3 text-gray-600 mb-8">
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>It is a long fact that a reader will be distracted.</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Lorem Ipsum is simply dummy of the printing.</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>There are many variations of Lorem Ipsum majority.</li>
                    </ul>
                    <button className="bg-[#1f8f6a] text-white font-semibold px-8 py-3 rounded-md hover:bg-green-600 transition duration-300">Discover More</button>
                </div>
                <div className="relative">
                    <img src={Image1} alt="Cozy fireplace in a modern living room" className="rounded-lg shadow-lg w-full" />
                    <div className="absolute -bottom-12 -left-12 w-64 bg-white p-4 rounded-lg shadow-xl flex items-center">
                        <img src={Image2} alt="Restaurant interior" className="w-24 h-24 rounded-lg object-cover" />
                        <div className="ml-4">
                            <div className="flex justify-center mb-2"><IconPlaceholder className="w-8 h-8" /></div>
                            <h4 className="font-bold text-gray-800">Restaurants</h4>
                            <p className="text-xs text-gray-500 mt-1">Donec in quis the sed pellen tesque velit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;