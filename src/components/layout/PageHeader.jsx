import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const PageHeader = ({ title, description, quote }) => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Abstract Decorative Elements - Flower/Star Shape */}
            <div className="absolute top-20 right-10 md:right-32 opacity-20 text-blue-300 pointer-events-none">
                <motion.svg
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </motion.svg>
            </div>

            {/* Background Blur blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumbs */}
                <motion.nav
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center text-sm text-slate-500 mb-8 font-medium"
                >
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-3 text-slate-300">•</span>
                    <span className="text-blue-600">{title}</span>
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 flex items-center flex-wrap leading-tight">
                                {title}
                                <Star className="ml-4 text-slate-900 fill-current w-8 h-8 md:w-10 md:h-10" />
                            </h1>

                            {description && (
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Quote Box - Redesigned for Light Theme */}
                        {quote && (
                            <div className="hidden lg:block w-80 flex-shrink-0">
                                <div className="p-6 bg-white rounded-2xl shadow-lg shadow-blue-100/50 border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <div className="text-4xl text-blue-200 font-serif leading-none mb-2">"</div>
                                    <p className="text-slate-700 italic font-medium relative z-10">
                                        {quote.text}
                                    </p>
                                    {quote.author && (
                                        <div className="mt-4 flex items-center">
                                            <div className="w-8 h-[1px] bg-blue-300 mr-2"></div>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{quote.author}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PageHeader;
