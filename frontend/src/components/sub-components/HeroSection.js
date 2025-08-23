

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
                <p className="mt-4 text-lg">Home &gt; About Us</p>
            </div>
        </div>
    );
};

export default HeroSection;