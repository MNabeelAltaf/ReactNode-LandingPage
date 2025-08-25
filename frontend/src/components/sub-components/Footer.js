import { FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPaperPlaneOutline } from 'react-icons/io5'; 
import Logo2 from './Logo2';


const SocialIcon = ({ icon: Icon }) => (
    <a href="#" className="w-10 h-10 bg-[#3e3e3e] rounded-md flex items-center justify-center text-white hover:bg-[#e5c466] hover:text-black transition-colors duration-300">
        <Icon className="w-5 h-5" />
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1e] text-gray-400">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  
                    <div className="md:col-span-2 lg:col-span-1">
                        <Logo2 /> 
                        <p className="mt-6 text-sm leading-relaxed">
                            Nam libero tempore cum soluta nobis eseligendi optio cumque nihile impedit quo minus maxime placeat facere.
                        </p>
                        <div className="flex space-x-3 mt-6">
                            <SocialIcon icon={FaFacebookF} />
                            <SocialIcon icon={FaXTwitter} />
                            <SocialIcon icon={FaInstagram} />
                            <SocialIcon icon={FaBehance} />
                        </div>
                    </div>

                 
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">EXPLORE</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Hotel</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hotel Staff</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">CONTACT</h3>
                        <address className="not-italic space-y-3 text-sm">
                            <p>7631 Sabina Park, 115 Devon Isle, Louisiana, USA</p>
                            <p>(+1) 987 654 3210</p>
                            <p>info@domain.com</p>
                        </address>
                    </div>

                
                    <div>
                        <div className="bg-[#2a2a2a] p-8 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-6">NEWSLETTER</h3>
                            <form>
                                <div className="relative border-b border-gray-600 focus-within:border-white transition-colors duration-300">
                                    <input 
                                        type="email" 
                                        placeholder="Ex. info@domain.com" 
                                        className="w-full bg-transparent border-none py-2 px-1 text-white placeholder-gray-500 focus:ring-0" 
                                    />
                                    <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 text-white">
                                        <IoPaperPlaneOutline size={20} />
                                    </button>
                                </div>
                                <div className="flex items-center mt-6">
                                    <input 
                                        id="terms" 
                                        type="checkbox" 
                                        className="w-4 h-4 text-[#e5c466] bg-transparent border-gray-600 rounded-full focus:ring-[#e5c466] focus:ring-offset-0" 
                                    />
                                    <label htmlFor="terms" className="ml-3 text-sm">I agree to all terms and policies</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        
            <div className="border-t border-gray-800">
                 <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="mb-4 md:mb-0">© Copyright 2025 Fixyland. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;