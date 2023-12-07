"use client"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const useOpacityAnimation = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        } else {
            animation.start("hidden");
        }
    }, [animation, inView]);

    const animationVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.2, duration: 1 }
        }
    };

    return { ref, animation, animationVariants }
}

export default useOpacityAnimation