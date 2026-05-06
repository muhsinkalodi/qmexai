import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, FinTech Solutions",
        avatar: "SJ",
        content: "Qmexai completely transformed our data infrastructure. Their AI models predicted market trends with 90% accuracy, giving us a massive competitive edge.",
        rating: 5,
        gradient: "from-green-500 to-green-600"
    },
    {
        name: "Michael Chen",
        role: "Director of Operations, MedCare Inc.",
        avatar: "MC",
        content: "The custom healthcare management system they built streamlined our patient intake process by 40%. The UI is intuitive and the support has been phenomenal.",
        rating: 5,
        gradient: "from-green-600 to-green-700"
    },
    {
        name: "David Smith",
        role: "Founder, EcoRetail",
        avatar: "DS",
        content: "We needed a robust e-commerce platform that could scale. Qmexai delivered a cloud-native solution that handles our Black Friday traffic without a hitch.",
        rating: 5,
        gradient: "from-green-400 to-green-500"
    }
];

const Testimonials = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-linear-to-br from-green-200 via-transparent to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-green-300 via-transparent to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="What Our Clients Say"
                    subtitle="Client Testimonials"
                />

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-linear-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Card */}
                            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-elegant hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                                {/* Quote Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.2 }}
                                            className="text-amber-400"
                                        >
                                            <Star className="w-5 h-5 fill-amber-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote Icon */}
                                <Quote className="w-8 h-8 text-green-600 opacity-20 mb-4" />

                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-8 leading-relaxed grow italic group-hover:text-gray-900 transition-colors">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.gradient} text-white font-bold text-lg flex items-center justify-center`}
                                    >
                                        {testimonial.avatar}
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-green-600 group-hover:to-green-700 group-hover:bg-clip-text transition-all">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Border */}
                                <div className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${testimonial.gradient} rounded-b-2xl w-0 group-hover:w-full transition-all duration-500`}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
