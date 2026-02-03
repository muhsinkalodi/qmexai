import { motion } from 'framer-motion';

const icons = {
    node: (
        <svg viewBox="0 0 32 32" width="40" height="40" fill="currentColor" className="text-green-600">
            <path d="M16,3 L3,10.5 L3,21.5 L16,29 L29,21.5 L29,10.5 L16,3 Z M25,12 L16.5,17 L8,12 L16.5,7 L25,12 Z M7,20 L15,24.5 L15,18 L7,13.5 L7,20 Z M26,20 L26,13.5 L18,18 L18,24.5 L26,20 Z" fillRule="evenodd" />
        </svg>
    ),
    python: (
        <svg viewBox="0 0 128 128" width="40" height="40" fill="currentColor" className="text-blue-500">
            <path d="M64 10 C 30 10 30 25 30 25 L 30 45 L 60 45 L 60 55 L 20 55 C 10 55 10 40 10 40 L 10 20 C 10 5 35 5 35 5 L 94 5 C 110 5 110 25 110 25 L 110 40 L 94 40 Z" fill="#3776ab" />
            <path d="M64 118 C 98 118 98 103 98 103 L 98 83 L 68 83 L 68 73 L 108 73 C 118 73 118 88 118 88 L 118 108 C 118 123 93 123 93 123 L 34 123 C 18 123 18 103 18 103 L 18 88 L 34 88 Z" fill="#ffd343" />
        </svg>
    ),
    react: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    docker: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-blue-500">
            <path d="M4.5 9h3v3h-3v-3zm0 4h3v3h-3v-3zm-4 4h3v3h-3v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm4-4h3v3h-3v-3zm0 4h3v3h-3v-3zm0-8h3v3h-3v-3zm-4 4h3v3h-3v-3zm8 0c0-2.2 1.8-4 4-4 .6 0 1.2.1 1.8.3l-2.2 2.7h3.4l2-2.5c.3.5.5 1 .5 1.5 0 2.2-1.8 4-4 4s-4-1.8-4-4z" />
            <path d="M22 13c0 2-3 2-3 5H2c0-3 2-5 3-5h17z" opacity="0.5" />
        </svg>
    ),
    kubernetes: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-blue-600">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2L12 22 M2 12L22 12" stroke="currentColor" strokeWidth="2" />
            <path d="M5 5L19 19 M19 5L5 19" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    sql: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-orange-500">
            <path d="M12 3C6.48 3 2 4.34 2 6v12c0 1.66 4.48 3 10 3s10-1.34 10-3V6c0-1.66-4.48-3-10-3zm0 13c-4.42 0-8-1-8-2.25V11c0 1.25 3.58 2.25 8 2.25s8-1 8-2.25v2.75C20 15 16.42 16 12 16zM12 5c4.42 0 8 1 8 2.25S16.42 9.5 12 9.5 4 8.5 4 7.25 7.58 5 12 5z" />
        </svg>
    ),
    tensorflow: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-orange-600">
            <path d="M11.76 21.05L1.87 5.17h5.1L12.01 13.9 17.07 5.17h4.86L12.01 21.05h-.25z" />
            <path d="M12.01 13.9l-5.14-8.73h-5l5.14 8.73H12.01z" fillOpacity="0.5" />
        </svg>
    )
};

const items = [
    { name: "Node.js", icon: icons.node },
    { name: "Python", icon: icons.python },
    { name: "React", icon: icons.react },
    { name: "Docker", icon: icons.docker },
    { name: "Kubernetes", icon: icons.kubernetes },
    { name: "SQL", icon: icons.sql },
    { name: "Tensorflow", icon: icons.tensorflow },
];

const TechStack = () => {
    return (
        <div className="py-12 bg-white border-b border-slate-100 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Powered By Modern Tech</p>
            </div>

            <div className="flex">
                <motion.div
                    className="flex space-x-12 whitespace-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {/* Quadrupled array for safe infinite loop on large screens */}
                    {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
                        <div key={index} className="inline-flex flex-col items-center justify-center w-24 mx-4">
                            <div className="mb-2 transition-transform hover:scale-110 duration-200">
                                {item.icon}
                            </div>
                            <span className="text-xs font-semibold text-slate-500">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
