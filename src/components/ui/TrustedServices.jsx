import { motion } from 'framer-motion';

const TrustedServices = () => {
    return (
        <section className="relative py-24 bg-blue-600 overflow-hidden">
            {/* Topographic Background Pattern - Abstract SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
                            <path d="M0 20 Q 25 45 50 20 T 100 20" fill="none" stroke="white" strokeWidth="0.5" />
                            <path d="M0 80 Q 25 55 50 80 T 100 80" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <div className="flex items-center space-x-2 text-blue-200 mb-4 font-medium tracking-wide">
                            <span className="w-8 h-[2px] bg-blue-300"></span>
                            <span className="uppercase text-sm">Trusted Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Comprehensive AI Software Solutions and More
                        </h2>
                        <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                            Elevate your business with our cutting-edge AI software solutions, including AI chatbots, analytics, and automation, alongside our exceptional web design and development.
                        </p>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Discover the possibilities with our AI-powered solutions. From intelligent chatbots to advanced data analytics, we've got you covered.
                        </p>
                    </motion.div>

                    {/* Image - Laptop Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract glow behind the laptop */}
                        <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30 rounded-full transform scale-90"></div>

                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Comprehensive Solutions"
                            className="relative z-10 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white/10"
                        />

                        {/* Floating Badge Example */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden md:block"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="mt-2 text-xs font-mono text-slate-400">Building Learning...</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedServices;
