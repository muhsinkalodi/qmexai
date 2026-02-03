import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const CountUp = ({ to, from = 0, suffix = "", duration = 2, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => {
                    node.textContent = Math.floor(value) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, from, to, duration, suffix]);

    return <span className={className} ref={ref} />;
};

export default CountUp;
