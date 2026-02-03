import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, FinTech Solutions",
        content: "Qmexai completely transformed our data infrastructure. Their AI models predicted market trends with 90% accuracy, giving us a massive competitive edge."
    },
    {
        name: "Michael Chen",
        role: "Director of Operations, MedCare Inc.",
        content: "The custom healthcare management system they built streamlined our patient intake process by 40%. The UI is intuitive and the support has been phenomenal."
    },
    {
        name: "David Smith",
        role: "Founder, EcoRetail",
        content: "We needed a robust e-commerce platform that could scale. Qmexai delivered a cloud-native solution that handles our Black Friday traffic without a hitch."
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="What Our Clients Say"
                    subtitle="Testimonials"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative flex flex-col h-full"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 w-10 h-10" />
                            <p className="text-slate-600 mb-6 relative z-10 italic pr-10 flex-grow">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
