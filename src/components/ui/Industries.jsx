import { Component } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ShoppingBag, Heart, Coffee, Briefcase, Truck, Landmark } from 'lucide-react';

const industries = [
    { icon: ShoppingBag, name: "E-Commerce", desc: "Scalable platforms & AI recommendation engines" },
    { icon: Heart, name: "Healthcare", desc: "HIPAA-compliant patient management systems" },
    { icon: Coffee, name: "Hospitality", desc: "Smart booking & customer experience solutions" },
    { icon: Briefcase, name: "Corporate", desc: "Enterprise resource planning (ERP) software" },
    { icon: Truck, name: "Logistics", desc: "Route optimization & fleet management AI" },
    { icon: Landmark, name: "Finance", desc: "Secure trading algorithms & fraud detection" }
];

const Industries = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Industries We Serve"
                    subtitle="Domain Expertise"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-accent">
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-semibold text-slate-800 mb-1">{item.name}</h3>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
