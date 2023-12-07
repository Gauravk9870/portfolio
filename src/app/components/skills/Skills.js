"use client"
import styles from './skills.module.scss'

import Image from 'next/image'
import { motion } from 'framer-motion';
import useOpacityAnimation from '@/app/hooks/useOpacityAnimation';


const Skills = () => {
    const { ref, animation, animationVariants } = useOpacityAnimation();

    return (
        <motion.div className={styles.skills} id='skills' >
            <motion.div className={styles.container} ref={ref} variants={animationVariants} initial="hidden" animate={animation}>
                <div className={styles['titles']}>
                    <h3>Why Choose me</h3>
                    <h2>A Palette of Skills</h2>
                </div>
                <ul className={styles['skills-list']}>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/js.svg' fill className={styles.image} alt='js' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/react.svg' fill className={styles.image} alt='react' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/next.svg' fill className={styles.image} alt='next' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/sass.svg' fill className={styles.image} alt='sass' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/tailwind.svg' fill className={styles.image} alt='tailwind' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/git.svg' fill className={styles.image} alt='git' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/node.svg' fill className={styles.image} alt='node' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/express.svg' fill className={styles.image} alt='express' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/mongodb.svg' fill className={styles.image} alt='mongodb' />
                        </div>
                    </li>

                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/firebase.svg' fill className={styles.image} alt='firebase' />
                        </div>
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Skills