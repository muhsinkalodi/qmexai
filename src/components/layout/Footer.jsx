import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-900 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                    {/* Column 1: Logo (Desktop: Side-by-side with text) */}
                    <div className="flex flex-col items-start">
                        <img src="/logo.png" alt="Qmexai logo" className="h-32 md:h-32 lg:h-32 w-auto object-contain" />
                    </div>

                    {/* Column 2: Company Info & Socials */}
                    <div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Empowering businesses with cutting-edge AI software solutions, web development, and digital transformation services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="#" className="text-slate-600 hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Services */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">AI Solutions</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Cloud Computing</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-600">
                                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                                <span>Old NH66 Thrissur road, Kottakkal, Malappuram, Kerala, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-600">
                                <Mail size={20} className="flex-shrink-0 text-primary" />
                                <span>contact@qmexai.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-600">
                                <Phone size={20} className="flex-shrink-0 text-primary" />
                                <span>+91 859 0456 430</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Qmexai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
