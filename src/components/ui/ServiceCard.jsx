import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link, delay = 0 }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay }
        }
    };

    const colors = [
        'from-green-500 to-green-600',
        'from-green-600 to-green-700',
        'from-green-400 to-green-500',
        'from-green-700 to-green-800'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-linear-to-br ${randomColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-elegant hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                {/* Icon Container with Gradient */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-linear-to-br ${randomColor} rounded-xl flex items-center justify-center mb-6 text-white shadow-glow-green`}
                >
                    <Icon className="w-8 h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-green-600 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed grow group-hover:text-gray-700 transition-colors">
                    {description}
                </p>

                {/* CTA Link */}
                <Link
                    to={link}
                    className="inline-flex items-center font-bold text-transparent bg-linear-to-r from-green-600 to-green-700 bg-clip-text hover:opacity-80 transition-all duration-300 group mt-auto"
                >
                    Learn More
                    <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight className="ml-2 w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors" />
                    </motion.div>
                </Link>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-green-600 via-green-500 to-green-700 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
