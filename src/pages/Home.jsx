import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import Testimonials from '../components/ui/Testimonials';
import TechStack from '../components/ui/TechStack';
import { Bot, Globe, Smartphone, Cloud, PieChart, Users, TrendingUp, DollarSign, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const services = [
        {
            icon: Bot,
            title: "AI Solutions",
            description: "Custom AI algorithms and machine learning models tailored to automate and optimize your business processes.",
            link: "/services"
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "Responsive, high-performance websites built with modern technologies to deliver exceptional user experiences.",
            link: "/services"
        },
        {
            icon: Smartphone,
            title: "App Development",
            description: "Native and cross-platform mobile applications designed for engagement and performance.",
            link: "/services"
        },
        {
            icon: Cloud,
            title: "Cloud Computing",
            description: "Scalable cloud infrastructure and migration services to ensure your business is always online and secure.",
            link: "/services"
        }
    ];

    const benefits = [
        {
            title: "Scalable Applications",
            percent: "100%",
            desc: "Develop scalable applications that grow with your business demands and ensure seamless performance.",
            color: "bg-blue-600",
            textColor: "text-blue-900", // Not used for blue theme
            icon: Rocket,
            theme: "blue"
        },
        {
            title: "Growth in Sale",
            percent: "98.2%",
            desc: "Experience substantial growth in sales and revenue with our effective development strategies.",
            color: "bg-orange-200",
            textColor: "text-orange-900",
            icon: TrendingUp,
            theme: "orange"
        },
        {
            title: "Cost Savings",
            percent: "62%",
            desc: "Maximize your ROI and minimize costs with our cost-effective development solutions.",
            color: "bg-cyan-200",
            textColor: "text-cyan-900",
            icon: DollarSign,
            theme: "cyan"
        },
        {
            title: "Effective Solutions",
            percent: "99.4%",
            desc: "Boost your brand presence and reach new heights with our effective development strategies.",
            color: "bg-purple-200",
            textColor: "text-purple-900",
            icon: Target,
            theme: "purple"
        }
    ];

    return (
        <div className="bg-slate-50">
            <Hero />

            {/* Tech Stack Marquee - NEW */}
            <TechStack />

            {/* Services Preview Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Expertise"
                    subtitle="What We Offer"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 0.1} />
                    ))}
                </div>
            </section>

            <Testimonials />

            {/* Colored Why Choose Us Cards - NEW */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            More reasons companies around <br />the world chooses <span className="text-blue-600">Qmexai</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Experience the difference with our tailored development solutions that drive innovation and enhance performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`rounded-2xl p-8 ${item.theme === 'blue' ? 'bg-blue-600 text-white' : item.color} transition-all shadow-lg`}
                            >
                                <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center ${item.theme === 'blue' ? 'bg-white/20' : 'bg-white/50 shadow-sm'}`}>
                                    <item.icon className={`w-6 h-6 ${item.theme === 'blue' ? 'text-white' : item.textColor}`} />
                                </div>
                                <h3 className={`text-lg font-semibold mb-2 ${item.theme === 'blue' ? 'text-white' : 'text-slate-900'}`}>
                                    {item.title}
                                </h3>
                                <div className={`text-4xl font-bold mb-4 ${item.theme === 'blue' ? 'text-white' : 'text-slate-900'}`}>
                                    {item.percent}
                                </div>
                                <p className={`text-sm leading-relaxed ${item.theme === 'blue' ? 'text-blue-100' : 'text-slate-600'}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
