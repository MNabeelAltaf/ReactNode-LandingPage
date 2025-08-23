import Image1 from '../../images/chooseus-section-img-1.jpg';
import Image2 from '../../images/chooseus-section-img-2.jpg';


const DotPattern = () => (
    <div
        className="absolute -top-6 -left-6 w-32 h-32 z-0"
        style={{
            backgroundImage: 'radial-gradient(#e0e0e0 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
        }}
    ></div>
);


const WhyChooseUs = () => {
    const skills = [
        { name: 'Services', level: '95%' },
        { name: 'Chef Master', level: '85%' },
        { name: 'Design', level: '92%' },
        { name: 'It Solution', level: '98%' },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-sm font-semibold text-[#1f8f6a]">OUR SKILLS</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">Why Choose for us?</h2>
                    <p className="text-gray-600 mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                    <div className="space-y-6">
                        {skills.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-semibold text-gray-700">{skill.name}</span>
                                    <span className="text-sm font-semibold text-gray-500">{skill.level}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="relative mt-12 lg:mt-0 lg:ml-8">

                    <DotPattern />


                    <img
                        src={Image2}
                        alt="Sunny pool overlooking the ocean"
                        className="relative z-10 rounded-2xl shadow-lg object-cover w-full"
                    />


                    <div className="absolute z-20 -bottom-10 left-10 w-48 h-48 md:w-56 md:h-56">
                        <img
                            src={Image1}
                            alt="Resort restaurant"
                            className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;