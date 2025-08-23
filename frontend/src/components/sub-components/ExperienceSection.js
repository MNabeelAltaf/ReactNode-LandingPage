const ExperienceSection = () => {
    return (
        <section className="relative bg-[#1f8f6a] py-24 text-center text-white">
            <div className="container mx-auto px-4 z-10 relative">
                <span className="text-sm font-semibold bg-white text-[#1f8f6a] px-3 py-1 rounded-md">AMAZING EXPERIENCE</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Relax And Enjoy With Our <br /> Hotel & Resort</h2>
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default ExperienceSection;