import Header from '../components/sub-components/Header';
import Footer from '../components/sub-components/Footer';

import { HeroSection2, AppointmentSection, LuxuryRoomsSection } from '../components/booking';


const BookingPage = () => {

    
    return (
        <div className="bg-white">
            <Header />
            <main>
                <HeroSection2 />
                <AppointmentSection />
                <LuxuryRoomsSection />
            </main>
            <Footer />
        </div>
    );
};

export default BookingPage;