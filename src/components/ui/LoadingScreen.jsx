import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800); // Slightly longer delay to appreciate the completion
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="relative flex flex-col items-center">
                {/* Glowing Background Blob */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Centered Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 relative flex flex-col items-center"
                >
                    <motion.img
                        src="/qmexai-logo.svg"
                        alt="Qmexai Logo"
                        className="w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        animate={{
                            filter: ["drop-shadow(0 0 15px rgba(59,130,246,0.5))", "drop-shadow(0 0 30px rgba(59,130,246,0.8))", "drop-shadow(0 0 15px rgba(59,130,246,0.5))"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="text-5xl font-bold text-white tracking-tighter">
                        Qmexai<span className="text-blue-500">.</span>
                    </div>
                </motion.div>

                {/* Modern Progress Bar */}
                <div className="w-64 h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-800">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Percentage Text */}
                <div className="mt-4 text-center text-slate-500 font-mono text-xs tracking-widest opacity-80">
                    INITIALIZING SYSTEM... {progress}%
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
