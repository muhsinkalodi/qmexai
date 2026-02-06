import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Megaphone, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            <span className="text-sm font-medium text-blue-900">Next Gen Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business <br /> Growth</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                            We are Qmexai. We solve business challenges through AI-powered software, automation, and digital platforms. We optimize tasks, enhance efficiency, and elevate online presence to drive sustainable growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1">
                                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                                Explore Services
                            </Link>
                        </div>

                        <div className="flex items-center space-x-6 text-sm font-medium text-slate-500">
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                Custom AI Solutions
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                Top-tier Web Dev
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual - Floating Cards Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Abstract blobs */}
                            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl animate-pulse delay-75"></div>

                            {/* Main Central Card - Web/Dashboard */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10">
                                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Code /></div>
                                        <div>
                                            <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                                            <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 font-mono text-[10px] text-slate-400">
                                        <div className="flex">
                                            <span className="text-purple-500 mr-2">const</span>
                                            <span className="text-blue-600 mr-2">initAI</span>
                                            <span>= () ={'>'} {'{'}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-slate-500">// Initialize Neural Net</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-600">return</span>
                                            <span className="text-green-600 ml-2">new Model({'{'}</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-orange-500">accuracy:</span>
                                            <span className="text-blue-500 ml-1">0.99</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-green-600">{'}'});</span>
                                        </div>
                                        <div>{'}'}</div>
                                    </div>
                                    <div className="mt-6 flex space-x-2">
                                        <div className="flex-1 h-20 bg-blue-50/50 rounded-lg border border-blue-50"></div>
                                        <div className="flex-1 h-20 bg-purple-50/50 rounded-lg border border-purple-50"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 1 - AI/Bot */}
                            <motion.div
                                animate={{ y: [-15, 0, -15] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-[20%] -left-[10%] bg-white p-4 rounded-xl shadow-xl border border-slate-50 z-20 flex items-center space-x-3"
                            >
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">AI Powered</div>
                                    <div className="text-[10px] text-slate-500">Data Analytics</div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 - Marketing */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[15%] -right-[5%] bg-white p-4 rounded-xl shadow-xl border border-slate-50 z-20 flex items-center space-x-3"
                            >
                                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                                    <Megaphone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">Marketing</div>
                                    <div className="text-[10px] text-slate-500">+150% Growth</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
