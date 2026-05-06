import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import Testimonials from '../components/ui/Testimonials';
import TechStack from '../components/ui/TechStack';
import { Bot, Globe, Smartphone, TrendingUp, DollarSign, Target, Rocket, Megaphone, Zap, Shield, Clock } from 'lucide-react';
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
            icon: Megaphone,
            title: "Digital Marketing",
            description: "Data-driven marketing strategies to increase your online visibility, drive traffic, and boost conversions.",
            link: "/services"
        }
    ];

    const benefits = [
        {
            title: "Scalable Growth",
            percent: "100%",
            desc: "Enterprise-grade solutions that scale with your business demands.",
            icon: Rocket,
            gradient: "from-orange-600 to-orange-500"
        },
        {
            title: "Revenue Growth",
            percent: "98.2%",
            desc: "Proven strategies that deliver substantial business growth.",
            icon: TrendingUp,
            gradient: "from-cyan-600 to-cyan-500"
        },
        {
            title: "Cost Efficiency",
            percent: "62%",
            desc: "Maximize ROI with our cost-effective solutions.",
            icon: DollarSign,
            gradient: "from-green-600 to-green-500"
        },
        {
            title: "Success Rate",
            percent: "99.4%",
            desc: "Excellence and reliability in every project.",
            icon: Target,
            gradient: "from-purple-600 to-purple-500"
        }
    ];

    const features = [
        { icon: Zap, title: "Lightning Fast", desc: "Performance optimized from day one" },
        { icon: Shield, title: "Secure", desc: "Enterprise-grade security standards" },
        { icon: Clock, title: "On Time", desc: "Reliable delivery every time" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <Hero />

            {/* Tech Stack */}
            <TechStack />

            {/* Services Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="Our Expertise"
                        subtitle="What We Offer"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Modern Gradient Cards */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="Why Choose Qmexai"
                        subtitle="Our Strengths"
                    />

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -15, transition: { duration: 0.3 } }}
                                    className="group relative overflow-hidden rounded-2xl"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-elegant group-hover:bg-transparent group-hover:shadow-card-hover transition-all duration-300">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.gradient} text-white flex items-center justify-center mb-6`}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </motion.div>

                                        {/* Percentage */}
                                        <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                            {item.percent}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {item.desc}
                                        </p>

                                        {/* Bottom Border */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-orange-600 via-cyan-600 to-green-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 rounded-full bg-linear-to-br from-orange-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-6 shadow-lg"
                                    >
                                        <Icon className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default Home;
