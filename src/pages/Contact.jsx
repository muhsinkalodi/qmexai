import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/dacc14491@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formState,
                    _subject: "New Qmexai Contact Form Submission!",
                    _template: "table",
                    _captcha: "false"
                })
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setStatus('success');
                setFormState({ first_name: '', last_name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-20 bg-slate-50 min-h-screen relative">
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
                                    <p className="text-slate-300 mt-1">Old NH66 Thrissur road, <br /> Kottakkal, Malappuram, Kerala, India</p>
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
                                    <p className="text-slate-300 mt-1">+91  859 0456 430<br />Mon-Sat, 9am - 6pm IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 relative">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={formState.first_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formState.last_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                {!status === 'submitting' && <Send className="ml-2 w-5 h-5" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Popup Modal */}
            <AnimatePresence>
                {status === 'success' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative"
                        >
                            <button
                                onClick={() => setStatus('idle')}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                            <p className="text-slate-600 mb-8">
                                Thank you for reaching out. We have received your message and will get back to you shortly.
                            </p>

                            <button
                                onClick={() => setStatus('idle')}
                                className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
