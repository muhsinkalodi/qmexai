import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';

const Contact = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                description="We'd love to hear from you. Let's start a conversation."
                quote={{ text: "The art of communication is the language of leadership.", author: "James Humes" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="p-10 bg-primary text-white">
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Our Location</p>
                                    <p className="text-slate-300 mt-1">123 Tech Avenue, Suite 500<br />Silicon Valley, CA 94043</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Email Us</p>
                                    <p className="text-slate-300 mt-1">contact@qmexai.com<br />support@qmexai.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Call Us</p>
                                    <p className="text-slate-300 mt-1">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
                        <form action="https://formsubmit.co/dacc14491@gmail.com" method="POST" className="space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://qmexai.com/contact" />
                            <input type="hidden" name="_subject" value="New Qmexai Contact Form Submission!" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" name="first_name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" name="last_name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Doe" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@example.com" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Tell us about your project..." required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center">
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
