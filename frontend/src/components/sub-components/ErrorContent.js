import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../images/errorImg.png';


const ErrorContent = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/about');
    };
    return (
        <section className="py-24 bg-[#f7f9f8]">
            <div className="container mx-auto px-4 text-center">

                <img src={errorImg} alt="404 Not Found Illustration" className="w-full max-w-lg mx-auto mb-8" />

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Ohh! Page Not Found
                </h2>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                    We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
                </p>
                <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center gap-2 bg-[#1f8f6a] text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 transition duration-300"
                >
                    Back To Home
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default ErrorContent;