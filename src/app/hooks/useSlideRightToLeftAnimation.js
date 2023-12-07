import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

const useSlideRightToLeftAnimation = (numOfProjects) => {
    const animation = useAnimation();
    const refs = []

    const { ref, inView } = useInView();


    for (let i = 0; i < numOfProjects; i++) {
        refs.push(ref);
    }

    const animationVariants = {
        hidden: {
            opacity: 0,
            // x: "100%",
        },
        visible: {
            opacity: 1,
            // x: 0,
            transition: { delay: 0.2, duration: 1 }
        }
    }

    return { animation, refs, inView, animationVariants };

}

export default useSlideRightToLeftAnimation