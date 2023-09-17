"use client"

// components/Navbar.js
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import Link from 'next/link';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo} >
                    <span>
                        Gaurav
                        <span className={styles.dot}>
                            .
                        </span>
                    </span>

                </div>
                <ul className={styles.links}>
                    <li>

                        <Link href="/">
                            Home
                        </Link> </li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <ul className={styles.social}>
                    <li>
                        <a href="https://github.com/Gauravk9870" target='_blank'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gauravk9870/">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gaurav.k__/">
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
                <div className={`${styles['menu-btn']} ${isOpen ? styles.animate : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
