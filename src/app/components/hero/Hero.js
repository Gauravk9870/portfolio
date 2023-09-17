import React from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'
import Navbar from '../navbar/Navbar';

const Hero = () => {


    return (
        <>
            <div className={styles.header}>
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.top}>
                                <div className={styles[`image-container`]}>
                                    <Image src="/Gaurav-formal.png" fill className={styles.image} alt='Main Logo' />
                                </div>
                                <div className={styles.titles} >
                                    <h3>Frontend Developer</h3>
                                    <h1>
                                        <span
                                        >Gaurav</span>
                                        <span>
                                            Kumar
                                            <span className="dot">.</span>
                                        </span>
                                    </h1>
                                    <h2>Frontend Developer</h2>
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
                                        <a href="#">
                                            Download CV
                                        </a>
                                    </button>
                                    <button className={styles[`contact-me`]} >
                                        <a href="https://www.linkedin.com/in/gauravk9870/">
                                            Contact me
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Hero