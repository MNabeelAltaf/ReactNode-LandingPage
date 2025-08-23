import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from 'react-icons/fa';

import { Logo, Header, HeroSection, MainSection, StatsSection, WhyChooseUs, ExperienceSection, StaffSection, ClientsSection, Footer } from '../components/aboutus';


const BASE_URL = process.env.REACT_APP_API_URL


export default function AboutPage() {
    return (
        <div className="bg-white">
            <Header />
            <main>
                <HeroSection />
                <MainSection />
                <StatsSection />
                <WhyChooseUs />
                <ExperienceSection />
                <StaffSection />
                <ClientsSection />
            </main>
            <Footer />
        </div>
    );
}