"use client"

// components/Navbar.js
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import Link from 'next/link';
import { motion } from 'framer-motion';
import useResponsiveAnimation from '@/app/hooks/useResponsiveAnimation';




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const initialVariants = {
        navbar: {
            y: '-100%'
        },

    };

    const endVariants = {
        navbar: {
            y: 0
        }

    }

    const navbarAnimation = useResponsiveAnimation(initialVariants.navbar, endVariants.navbar);

    return (
        <>
            <motion.nav
                className={styles.navbar}
                {...navbarAnimation}
                
            >
                <motion.div className={styles.container}>
                    <motion.div className={styles.logo}>
                        <Link href="/">
                            <span>
                                Gaurav
                                <span className={styles.dot}>
                                    .
                                </span>
                            </span>
                        </Link>
                    </motion.div>
                    <motion.ul className={styles.links} >
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#experience">
                                About
                            </Link></li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gauravk9870/" target='_blank'>Contact</a>
                        </li>
                    </motion.ul>
                    <motion.ul className={styles.social} >
                        <li>
                            <a href="https://github.com/Gauravk9870" target='_blank'>
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gauravk9870/" target='_blank'>
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gaurav.k__/" target='_blank'>
                                <AiOutlineInstagram />
                            </a>
                        </li>
                    </motion.ul>
                    <div className={`${styles['menu-btn']} ${isOpen ? styles.animate : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </motion.div>
            </motion.nav >
            {
                isOpen &&
                <div className={styles.mobile}>
                    <ul className={styles.links}>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#experience">
                                About
                            </Link></li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/gauravk9870/" target='_blank'>Contact</a>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
};

export default Navbar;
