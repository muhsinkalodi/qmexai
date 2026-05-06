import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const footerLinks = {
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Case Studies', href: '#' },
            { label: 'Contact', href: '/contact' }
        ],
        services: [
            { label: 'Web Development', href: '/services' },
            { label: 'AI Solutions', href: '/services' },
            { label: 'Mobile Apps', href: '/services' },
            { label: 'Digital Marketing', href: '/services' }
        ],
        contact: [
            { icon: Phone, text: '+91-944-6186-430', href: 'tel:+91-944-6186-430' },
            { icon: Mail, text: 'contact@qmexai.com', href: 'mailto:contact@qmexai.com' },
            { icon: MapPin, text: 'Kottakkal, Malappuram, India', href: '#' }
        ]
    };

    const socialLinks = [
        { Icon: Instagram, href: "https://www.instagram.com/qmexai", label: "Instagram" },
        { Icon: Linkedin, href: "https://www.linkedin.com/company/qmexai", label: "LinkedIn" },
        { Icon: Facebook, href: "https://www.facebook.com/qmexai", label: "Facebook" }
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className="bg-white border-t border-gray-100">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <Link to="/" className="mb-6 inline-flex items-center gap-2 hover:scale-110 transition-transform duration-300 group">
                            <img src="/logo.png" alt="Qmexai" className="h-12 w-auto" />
                            <span className="text-lg font-semibold bg-linear-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent tracking-widest uppercase" style={{ fontFamily: 'Gotham, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}>QMEXAI</span>
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            Empowering global businesses with cutting-edge AI, custom software, and digital transformation solutions.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href, label }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                    className="w-11 h-11 rounded-lg bg-linear-to-br from-green-500 to-green-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-transparent hover:bg-linear-to-r hover:from-green-600 hover:to-green-700 hover:bg-clip-text transition-all duration-300 font-medium text-sm flex items-center group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-transparent hover:bg-linear-to-r hover:from-green-600 hover:to-green-700 hover:bg-clip-text transition-all duration-300 font-medium text-sm flex items-center group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Contact</h4>
                        <ul className="space-y-4">
                            {footerLinks.contact.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        className="flex items-start gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-green-600 text-white flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-green-600/30 transition-all">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-sm font-medium leading-relaxed mt-0.5">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-gray-600 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Qmexai. All rights reserved. 
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <Link to="#" className="hover:text-green-600 transition-colors duration-300 font-medium">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="hover:text-green-600 transition-colors duration-300 font-medium">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Gradient Top Border */}
            <div className="h-1 bg-linear-to-r from-green-600 via-green-500 to-green-700"></div>
        </footer>
    );
};

export default Footer;
