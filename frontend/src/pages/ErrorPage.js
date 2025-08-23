import React from 'react';


import Header from '../components/sub-components/Header'; 
import Footer from '../components/sub-components/Footer'; 



import { ErrorHero,ErrorContent} from '../components/error';

const ErrorPage = () => {
    return (
        <div className="bg-white">
            <Header />
            <main>
                <ErrorHero />
                <ErrorContent />
            </main>
            <Footer />
        </div>
    );
};

export default ErrorPage;