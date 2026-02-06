import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import Industries from '../components/ui/Industries';
import PageHeader from '../components/layout/PageHeader';
import TrustedServices from '../components/ui/TrustedServices';
import VisionFeatures from '../components/ui/VisionFeatures';
import { Bot, Globe, Cloud, Code2, Megaphone, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const allServices = [
        {
            icon: Bot,
            title: "AI Solutions & Automation",
            description: "We design intelligent AI systems that eliminate repetitive tasks, automate workflows, and optimize operations—reducing costs while increasing speed and accuracy.",
            link: "/contact"
        },
        {
            icon: Code2,
            title: "Custom Software Development",
            description: "We build secure, scalable, and custom software solutions aligned precisely with your business processes—engineered for performance, reliability, and long-term growth.",
            link: "/contact"
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "We develop high-performance websites and web applications that reflect brand credibility, deliver seamless user experience, and convert visitors into customers.",
            link: "/contact"
        },
        {
            icon: PenTool,
            title: "Branding & Online Presence",
            description: "We craft strong brand identities and consistent digital presence that position businesses as credible, professional, and memorable.",
            link: "/contact"
        },
        {
            icon: Cloud,
            title: "Cloud Computing & DevOps",
            description: "We design and manage scalable cloud infrastructures that ensure security, stability, and performance as your business grows.",
            link: "/contact"
        },
        {
            icon: Megaphone,
            title: "Digital Marketing",
            description: "We drive brand visibility, trust, and demand through performance-focused digital marketing strategies built for measurable business outcomes.",
            link: "/contact"
        }
    ];

    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            <PageHeader
                title="Our Services"
                subtitle="What We Offer"
                description="Comprehensive technology solutions tailored to modernize your business."
                quote={{ text: "Technology is best when it brings people together.", author: "Matt Mullenweg" }}
            />

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 0.1} />
                    ))}
                </div>
            </section>

            {/* New Sections */}
            <TrustedServices />
            <VisionFeatures />

            <Industries />
        </div>
    );
};

export default Services;
