import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                return prev + 1.5; // Slightly slower for smoother feel
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Modern Circular Loader */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Rotating Ring */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="#e2e8f0" // slate-200
                            strokeWidth="2"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="301" // 2 * pi * 48
                            strokeDashoffset={301 - (301 * progress) / 100}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
                                <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
                            </linearGradient>
                        </defs>
                    </motion.svg>

                    {/* Glowing Logo */}
                    <motion.div
                        className="relative z-10 p-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/logo.png"
                            alt="Qmexai Logo"
                            className="w-32 h-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        />
                    </motion.div>
                </div>

                {/* Percentage & Status Text */}
                <div className="mt-8 flex flex-col items-center space-y-2">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 font-outfit">
                        {Math.round(progress)}%
                    </span>
                    <motion.p
                        className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Initializing Intelligence...
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
