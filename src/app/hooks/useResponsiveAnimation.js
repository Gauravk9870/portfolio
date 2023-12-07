const useResponsiveAnimation = (initialAnimation, endAnimation) => {
    return {
        initial: initialAnimation, animate: endAnimation, transition: {
            delay: 0.2
        }
    };
}

export default useResponsiveAnimation