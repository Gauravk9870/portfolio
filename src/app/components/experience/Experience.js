"use client"

import useOpacityAnimation from '@/app/hooks/useOpacityAnimation'
import styles from './experience.module.scss'
import { motion } from 'framer-motion'

const Experience = () => {
    const { ref, animation, animationVariants } = useOpacityAnimation()

    return (
        <motion.div className={styles.experience} ref={ref} initial="hidden" variants={animationVariants} animate={animation}>
            <div className={styles.container}>
                <div className={styles['titles']}>
                    <h3>My Qualification</h3>
                    <h2>Awesome Journey</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.current} id='experience'>
                        <div className={styles.time}>
                            <h4>Experience</h4>
                            <h2>Full Stack Developer</h2>
                            <h3>Underpin Services</h3>
                        </div>
                        <span className={styles.year}>July 2023 - Present</span>
                        <span className={styles.dot}></span>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.left}>
                            <div className={styles.time}>
                            </div>
                            <div className={styles.time}>
                                <span className={styles.year}>Jan 2023 - July 2023</span>
                                <span className={styles.dot}></span>
                            </div>
                            <div className={styles.time}>
                                <h4>Experience</h4>
                                <h2>Web Development Intern </h2>
                                <h3>The Sparks Foundation</h3>
                            </div>
                            <div className={styles.time}>
                                <span className={styles.year}>Sep 2020 - July 2023</span>
                                <span className={styles.dot}></span>

                            </div>
                            <div className={styles.time}>
                                <h4>Education</h4>
                                <h2>Class XII - Commerce</h2>
                                <h3>Government Boys Senior Secondary School</h3>
                            </div>
                            <div className={styles.time}>
                            </div>

                        </div>
                        <div className={styles.right}>
                            <div className={styles.time}>
                            </div>
                            <div className={styles.time}>
                                <h4>Experience</h4>
                                <h2>Java FullStack Development Trainee </h2>
                                <h3>JSpiders</h3>
                            </div>
                            <div className={styles.time}>
                                <span className={styles.dot}></span>

                                <span className={styles.year}>Jan 2023 - Jan 2023</span>
                            </div>
                            <div className={styles.time} id='education'>
                                <h4>Education</h4>
                                <h2>bachelors of computer applications </h2>
                                <h3>St. Andrews Institute of Technology And Management</h3>
                            </div>
                            <div className={styles.time}>
                                <span className={styles.dot}></span>

                                <span className={styles.year}>April 2019 - March 2020</span>
                            </div>
                            <div className={styles.time}>
                            </div>
                        </div>
                    </div>
                    <div className={styles.last}>
                        <span className={styles.dot}></span>
                        <span className={styles.year}>April 2017 - March 2018</span>
                        <div className={styles.time}>
                            <h4>Education</h4>
                            <h2>Class X</h2>
                            <h3>Gyan Jyoti Public School</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience