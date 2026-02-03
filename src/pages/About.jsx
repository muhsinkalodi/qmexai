import PageHeader from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import CountUp from '../components/ui/CountUp';
import { ShieldCheck, Users, Zap, Lightbulb, TrendingUp, Handshake } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="About Us"
                subtitle="Who We Are"
                description="Empowering businesses with cutting-edge AI and software solutions."
                quote={{ text: "Innovation differs between a leader and a follower.", author: "Steve Jobs" }}
            />

            {/* Transforming Businesses Section */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Team Success"
                                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] lg:h-[600px]"
                            />
                            {/* Stats Overlay */}
                            <div className="absolute bottom-10 left-10 right-10 bg-accent text-white p-8 rounded-xl shadow-2xl grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold flex justify-center items-center">
                                        <CountUp to={2} suffix="+" />
                                    </div>
                                    <div className="text-xs opacity-80">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold flex justify-center items-center">
                                        <CountUp to={12} suffix="+" />
                                    </div>
                                    <div className="text-xs opacity-80">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold flex justify-center items-center">
                                        <CountUp to={100} suffix="%" />
                                    </div>
                                    <div className="text-xs opacity-80">Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-blue-600 font-semibold mb-2 flex items-center">
                                <span className="w-8 h-[2px] bg-blue-600 mr-2"></span> Who We Are
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                We're transforming businesses with <span className="text-accent">innovative solutions</span>
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Empowering businesses with cutting-edge technology to achieve their goals and excel in today's competitive landscape.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { id: 1, title: "Comprehensive AI solutions", desc: "Expert consulting services tailored for businesses." },
                                    { id: 2, title: "Custom Mobile Apps", desc: "Apps customized to suit your specific needs precisely." },
                                    { id: 3, title: "Strategic Digital Marketing", desc: "Enhance online presence and maximize ROI." },
                                    { id: 4, title: "DevOps & Cloud", desc: "Solutions for seamless scalability and security." }
                                ].map((item) => (
                                    <div key={item.id} className="flex">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 mr-4 border border-slate-200">
                                            {item.id}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why You Should Choose Us</h2>
                            <p className="text-lg font-semibold text-slate-700 italic mb-6">
                                #1 Solution Provider in Cutting-Edge Technology. We offer Innovative, User-Friendly & Results Driven Solutions.
                            </p>
                            <p className="text-slate-600 mb-8">
                                Experience the difference with our comprehensive range of services tailored to meet your business needs.
                                From AI-powered solutions to captivating UI/UX design, we've got you covered.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: ShieldCheck, title: "100% Guaranteed Satisfaction", desc: "Our commitment to excellence ensures your satisfaction with every solution we deliver.", color: "text-amber-500" },
                                    { icon: Users, title: "Dedicated Teams", desc: "Our dedicated teams are equipped with the expertise to bring your vision to life.", color: "text-rose-500" },
                                    { icon: Zap, title: "Focus on Innovation", desc: "We continually innovate to provide cutting-edge solutions that keep you ahead of the curve.", color: "text-yellow-500" },
                                    { icon: Lightbulb, title: "Creative Solutions", desc: "Unlock your potential with our creative solutions designed to elevate your business.", color: "text-indigo-500" },
                                    { icon: TrendingUp, title: "Flexible Execution", desc: "We adapt to your needs, ensuring effective and efficient execution of every project.", color: "text-blue-500" },
                                    { icon: Handshake, title: "Client Partnership", desc: "We build lasting partnerships ensuring long-term success and support.", color: "text-emerald-500" }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 ${feature.color}`}>
                                            <feature.icon size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-500">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
