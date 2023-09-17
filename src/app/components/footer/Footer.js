import React from 'react'
import styles from "./footer.module.scss"
import { AiFillGithub, AiOutlineInstagram, AiOutlineCodepen } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import Link from 'next/link';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.left} >
                        Gaurav
                        <span className={styles.dot}>
                            .
                        </span>
                    </div>
                    <div className={styles.middle}>
                        <ul>
                            <li>Featured </li>
                            <li>Recent </li>
                            <li>Miscellaneous </li>
                        </ul>
                        <ul>
                            <li>Experience</li>
                            <li>Education</li>
                        </ul>
                        <ul>
                            <li>Skills</li>
                            <li>Download CV</li>
                        </ul>
                    </div>

                    <ul className={styles.right}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <ul className={styles.bottom}>
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
                    <li>
                        <a href="">
                            <AiOutlineCodepen />
                        </a>
                    </li>
                </ul>
                <ul className={styles.copyright}>
                    <li>© {new Date().getFullYear().toString()} Gaurav. All rights reserved</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer