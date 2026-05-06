import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            className={`mb-16 ${centered ? 'text-center' : ''}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
            {/* Subtitle with Icon */}
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3 justify-center">
                <div className="h-1 w-8 bg-linear-to-r from-green-600 to-green-700 rounded"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-transparent bg-linear-to-r from-green-600 to-green-700 bg-clip-text">
                    {subtitle}
                </span>
                <div className="h-1 w-8 bg-linear-to-r from-green-700 to-green-600 rounded"></div>
            </motion.div>

            {/* Main Title */}
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
                {title}
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center"
            >
                <div className="h-1.5 w-20 bg-linear-to-r from-green-600 via-green-500 to-green-700 rounded-full"></div>
            </motion.div>
        </motion.div>
    );
};

export default SectionHeader;
