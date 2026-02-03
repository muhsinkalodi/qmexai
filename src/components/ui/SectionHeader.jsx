import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold tracking-wide uppercase text-sm mb-2"
            >
                {subtitle}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-primary"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default SectionHeader;
