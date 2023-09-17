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
                        <Link href="/">
                            Gaurav
                            <span className={styles.dot}>
                                .
                            </span>
                        </Link>
                    </div>
                    <div className={styles.middle}>
                        <ul>
                            <li>
                                <Link href="/projects#featured">
                                    Featured
                                </Link>
                            </li>
                            <li> <Link href="/projects#recent">
                                Recent
                            </Link> </li>
                            <li>
                                <Link href="/projects#misc-projects">
                                    Miscellaneous
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="/#experience">
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="/#education">
                                    Education
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="/#skills">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://drive.google.com/file/d/1VtgK9ACx5Hx5e1vJrIK-cpu17SfjcXBN/view?usp=drive_link"}>
                                    Download CV
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ul className={styles.right}>
                        <li>

                            <Link href="/">
                                Home
                            </Link> </li>
                        <li>About</li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
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

                </ul>
                <ul className={styles.copyright}>
                    <li>© {new Date().getFullYear().toString()} Gaurav. All rights reserved</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer