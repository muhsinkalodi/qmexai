import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-md">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <img src="/logo.png" alt="Qmexai logo" className="h-12 w-auto group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="text-lg font-semibold bg-linear-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent tracking-widest uppercase" style={{ fontFamily: 'Gotham, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}>QMEXAI</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div
                        className="hidden md:flex space-x-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={itemVariants}>
                                <Link
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                                        isActive(link.path)
                                            ? 'text-white bg-linear-to-r from-green-600 to-green-700'
                                            : 'text-gray-700 hover:text-green-600'
                                    }`}
                                >
                                    {link.name}
                                    {!isActive(link.path) && (
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-green-600 to-green-500 group-hover:w-full transition-all duration-300" />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className="hidden md:flex"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-linear-to-r from-green-600 to-green-700 hover:shadow-lg hover:shadow-green-600/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        className="md:hidden"
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-green-600 hover:bg-green-50 transition-colors duration-200"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            isActive(link.path)
                                                ? 'text-white bg-linear-to-r from-green-600 to-green-700'
                                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-2"
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full px-4 py-3 rounded-lg font-semibold text-center text-white bg-linear-to-r from-green-600 to-green-700 hover:shadow-lg transition-all duration-300"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
