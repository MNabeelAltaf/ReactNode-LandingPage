const StatsSection = () => {
    const stats = [
        { number: '305+', label: 'Luxury Rooms' },
        { number: '650+', label: 'Regular Guests' },
        { number: '80+', label: 'Team Member' },
        { number: '75+', label: 'Beaches' },
    ];
    return (
        <section className="bg-green-500 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative">
                            <h3 className="text-4xl md:text-5xl font-bold">{stat.number}</h3>
                            <p className="mt-2 text-lg">{stat.label}</p>
                            {index < stats.length - 1 && <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white opacity-20"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;