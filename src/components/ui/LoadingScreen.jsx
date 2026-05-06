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
                return prev + 1.2;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-linear-to-br from-white via-gray-50 to-green-50 overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating shape 1 */}
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-linear-to-br from-green-400/10 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating shape 2 */}
                <motion.div
                    className="absolute bottom-20 right-20 w-72 h-72 bg-linear-to-br from-green-500/10 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        x: [0, -40, 0],
                        y: [0, -30, 0],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Floating shape 3 */}
                <motion.div
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-linear-to-br from-green-600/5 to-transparent rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Modern Loader - Multiple Rings */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Outer rotating ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{
                            background: `conic-gradient(from 0deg, rgb(104, 153, 44), rgb(143, 187, 62), rgb(104, 153, 44))`,
                            borderRadius: '50%'
                        }}
                    />

                    {/* Middle rotating ring */}
                    <motion.div
                        className="absolute inset-8 rounded-full border-2 border-transparent"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{
                            background: `conic-gradient(from 0deg, rgba(143, 187, 62, 0.6), rgba(104, 153, 44, 0.3), rgba(143, 187, 62, 0.6))`,
                            borderRadius: '50%'
                        }}
                    />

                    {/* Inner circle */}
                    <motion.div
                        className="absolute inset-20 rounded-full bg-white shadow-xl flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Logo */}
                        <motion.img
                            src="/logo.png"
                            alt="Qmexai"
                            className="w-16 h-16 drop-shadow-lg"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Progress indicator dots */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[0, 120, 240].map((angle, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-linear-to-r from-green-600 to-green-500 rounded-full"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-4px',
                                    marginLeft: '-4px'
                                }}
                                animate={{ 
                                    rotate: 360,
                                    x: [Math.cos(angle * Math.PI / 180) * 70, Math.cos(angle * Math.PI / 180) * 90, Math.cos(angle * Math.PI / 180) * 70],
                                    y: [Math.sin(angle * Math.PI / 180) * 70, Math.sin(angle * Math.PI / 180) * 90, Math.sin(angle * Math.PI / 180) * 70]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress Info */}
                <div className="mt-16 flex flex-col items-center space-y-6">
                    {/* Percentage */}
                    <motion.div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                            {Math.round(progress)}
                        </span>
                        <span className="text-2xl font-bold text-gray-400">%</span>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-72 h-2 bg-gray-200 rounded-full overflow-hidden shadow-md">
                        <motion.div
                            className="h-full bg-linear-to-r from-green-600 via-green-500 to-green-600"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Status Text */}
                    <motion.p
                        className="text-sm font-semibold text-gray-600 tracking-widest uppercase"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Loading Experience
                    </motion.p>

                    {/* Animated dots */}
                    <div className="flex gap-2 mt-4">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-green-600 rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
