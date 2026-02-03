import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
        >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{description}</p>
            <Link
                to={link}
                className="inline-flex items-center text-accent font-semibold group-hover:text-blue-700 transition-colors"
            >
                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
