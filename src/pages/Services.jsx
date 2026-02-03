import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import Industries from '../components/ui/Industries';
import PageHeader from '../components/layout/PageHeader';
import TrustedServices from '../components/ui/TrustedServices';
import VisionFeatures from '../components/ui/VisionFeatures';
import { Bot, Globe, Smartphone, Cloud, PieChart, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const allServices = [
        {
            icon: Bot,
            title: "AI Software Solutions",
            description: "Leverage the power of Machine Learning and NLP to automate workflows, predict trends, and enhance decision-making.",
            link: "/contact"
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "Custom web applications built with React, Node.js, and modern frameworks. We ensure speed, security, and scalability.",
            link: "/contact"
        },
        {
            icon: Smartphone,
            title: "App Development",
            description: "Native iOS/Android and Cross-platform (Flutter/React Native) mobile apps that engage users and drive retention.",
            link: "/contact"
        },
        {
            icon: PenTool,
            title: "UI/UX Design",
            description: "User-centered design that creates intuitive, beautiful, and accessible interfaces for web and mobile products.",
            link: "/contact"
        },
        {
            icon: Cloud,
            title: "Cloud Computing",
            description: "AWS/Azure/GCP setup, migration, and management. We help you leverage the cloud for flexibility and cost-efficiency.",
            link: "/contact"
        },
        {
            icon: PieChart,
            title: "Digital Marketing",
            description: "Data-driven marketing strategies including SEO, PPC, and Social Media Marketing to grow your brand presence.",
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
