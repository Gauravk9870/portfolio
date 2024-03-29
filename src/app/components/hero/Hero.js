"use client"

import React from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'
import Navbar from '../navbar/Navbar';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';


const Hero = () => {

    return (
        <>
            <div className={styles.main}>
                <video src="/bg.mp4" autoPlay muted loop></video>
                <Navbar />
                <motion.div className={styles.hero} >
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.top}>
                                <div className={styles[`image-container`]}>
                                    <Image src="/Gaurav-formal.png" fill className={styles.image} alt='Main Logo' />
                                </div>
                                <div className={styles.titles} >
                                    <h3>FullStack Developer</h3>
                                    <h1>
                                        <span
                                        >Gaurav</span>
                                        <span>
                                            Kumar
                                            <span className="dot">.</span>
                                        </span>
                                    </h1>
                                    <h2>FullStack Developer</h2>
                                </div>
                            </div>
                            <div className={styles.middle}>
                                <div className={styles.subtitle}>
                                    <p>Crafting Intuitive User Interfaces for Seamless Experiences</p>
                                </div>
                            </div>

                            <div className={styles.bottom}>
                                <div className={styles.actions}>
                                    <button className={styles['download-btn']} >
                                        <Link href={"https://drive.google.com/file/d/1VtgK9ACx5Hx5e1vJrIK-cpu17SfjcXBN/view?usp=drive_link"}>
                                            Download CV
                                        </Link>
                                    </button>
                                    <button className={styles[`contact-me`]} >
                                        <Link href="https://www.linkedin.com/in/gauravk9870/">
                                            Contact me
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div>

        </>
    )
}

export default Hero