import { motion } from 'framer-motion';
import { Shield, PenTool, Lightbulb, Layers } from 'lucide-react';

const VisionFeatures = () => {
    const features = [
        {
            icon: Shield,
            title: "Fortified Security",
            desc: "Robust security shields ensure project safety.",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            border: "border-emerald-200"
        },
        {
            icon: PenTool,
            title: "Creative Design",
            desc: "Inspire and engage with captivating, creative designs.",
            color: "text-rose-500",
            bg: "bg-rose-50",
            border: "border-rose-200"
        },
        {
            icon: Lightbulb,
            title: "Innovative Solutions",
            desc: "Revolutionize your project with innovative solutions.",
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "border-amber-200"
        },
        {
            icon: Layers,
            title: "Scalability",
            desc: "Crafted code for scalable project adaptation.",
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-200"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex items-center space-x-2 text-blue-600 mb-4 font-medium tracking-wide">
                        <span className="w-8 h-[2px] bg-blue-600"></span>
                        <span className="uppercase text-sm">Who We Are</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Elevate Your Vision with <span className="text-blue-600">Qmexai's</span> Ingenious Solutions.
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl">
                        Embark on a transformative journey with Qmexai, where creativity meets innovation to shape the future of your project.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-full ${feature.bg} flex items-center justify-center mb-6 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionFeatures;
