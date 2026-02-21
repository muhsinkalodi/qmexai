import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-12 pb-6 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 mb-8 items-start">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link to="/" className="inline-block mb-1">
                            <img
                                src="/logo.png"
                                alt="Qmexai"
                                className="h-20 md:h-20 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-sm leading-relaxed text-slate-500 max-w-sm mb-6">
                            Empowering businesses with cutting-edge AI software solutions, web development, and digital transformation services.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/qmexai" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/qmexai" },
                                { Icon: Facebook, href: "https://www.facebook.com/qmexai" }
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all duration-200"
                                    aria-label="Social Link"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-6">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link to="/about" className="hover:text-slate-900 transition-colors duration-200">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-slate-900 transition-colors duration-200">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-slate-900 transition-colors duration-200">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-6">
                                Services
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        AI Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        Mobile Apps
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                                        Cloud Computing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-6">
                                Contact
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start space-x-3">
                                    <MapPin size={18} className="mt-1 flex-shrink-0 text-slate-500" />
                                    <span>
                                        Old NH66 Thrissur road, Kottakkal, Malappuram, Kerala, India
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail size={18} className="flex-shrink-0 text-slate-500" />
                                    <a
                                        href="mailto:qmexai@gmail.com"
                                        className="hover:text-slate-900 transition-colors duration-200"
                                    >
                                        qmexai@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone size={18} className="flex-shrink-0 text-slate-500" />
                                    <a
                                        href="tel:+918590456430"
                                        className="hover:text-slate-900 transition-colors duration-200"
                                    >
                                        +91 859 0456 430
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Qmexai. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="#" className="hover:text-slate-700 transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="hover:text-slate-700 transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
