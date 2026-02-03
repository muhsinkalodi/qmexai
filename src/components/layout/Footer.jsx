import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src="/qmexai-logo.svg" alt="Qmexai logo" className="h-10 w-auto bg-white rounded-md p-1" />
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Qmexai</h2>
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Empowering businesses with cutting-edge AI software solutions, web development, and digital transformation services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">AI Solutions</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Cloud Computing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-300">
                                <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                                <span>Old NH66 Thrissur road, Kottakkal, Malappuram, Kerala, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <Mail size={20} className="flex-shrink-0 text-accent" />
                                <span>contact@qmexai.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <Phone size={20} className="flex-shrink-0 text-accent" />
                                <span>+91 859 0456 430</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Qmexai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
