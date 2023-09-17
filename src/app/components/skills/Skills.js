import React from 'react'
import styles from './skills.module.scss'

import Image from 'next/image'

const Skills = () => {
    return (
        <div className={styles.skills} id='skills'>
            <div className={styles.container}>
                <div className={styles['titles']}>
                    <h3>Why Choose me</h3>
                    <h2>A Palette of Skills</h2>
                </div>
                <ul className={styles['skills-list']}>
                    {/* <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/html.svg' fill className={styles.image} alt='html' />
                        </div>
                    </li>
                    <li>
                        <div className={styles['image-container']}>
                            <Image src='/skills/css.svg' fill className={styles.image} alt='css' />
                        </div>
                    </li> */}
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
            </div>
        </div>
    )
}

export default Skills