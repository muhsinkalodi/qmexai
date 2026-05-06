import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Rocket, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-green-300 via-transparent to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-linear-to-br from-green-200 via-transparent to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-linear-to-br from-green-400 via-transparent to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-green-50 to-green-100 border border-green-300 rounded-full px-5 py-2.5 mb-8 hover:shadow-lg transition-shadow duration-300">
                                <Zap className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-green-600 to-green-700">
                                    Next Generation AI Solutions
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-6">
                            Engineering
                            <br />
                            <span className="gradient-text">Business Grows</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Qmexai delivers cutting-edge AI solutions, custom software, and digital transformation services. We empower businesses globally with innovation and excellence.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                to="/contact"
                                className="group inline-flex justify-center items-center px-8 py-4 bg-linear-to-r from-green-600 to-green-700 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-green-600 hover:bg-green-50 transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 text-sm font-semibold">
                            <div className="flex items-center text-gray-700">
                                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center mr-3">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                AI-Powered Solutions
                            </div>
                            <div className="flex items-center text-gray-700">
                                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-green-700 flex items-center justify-center mr-3">
                                    <TrendingUp className="w-5 h-5 text-white" />
                                </div>
                                Proven Results
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Visual Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-md">
                            {/* Floating Card 1 */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-0 left-0 w-64 h-40 bg-linear-to-br from-green-600 to-green-500 rounded-2xl shadow-2xl flex items-center justify-center text-white p-6"
                            >
                                <div>
                                    <Rocket className="w-12 h-12 mb-2" />
                                    <p className="font-bold text-lg">AI Innovation</p>
                                    <p className="text-sm opacity-90">Powered by Latest Tech</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 */}
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute bottom-10 right-0 w-64 h-40 bg-linear-to-br from-green-700 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center text-white p-6"
                            >
                                <div>
                                    <TrendingUp className="w-12 h-12 mb-2" />
                                    <p className="font-bold text-lg">Business Growth</p>
                                    <p className="text-sm opacity-90">Accelerate Success</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 3 */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-linear-to-br from-green-500 to-green-400 rounded-2xl shadow-2xl flex items-center justify-center text-white p-6"
                            >
                                <div>
                                    <CheckCircle className="w-12 h-12 mb-2" />
                                    <p className="font-bold text-lg">Quality First</p>
                                    <p className="text-sm opacity-90">Excellence Guaranteed</p>
                                </div>
                            </motion.div>

                            {/* Center Circle with Pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-linear-to-r from-green-400 via-green-300 to-green-200 opacity-20 blur-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
