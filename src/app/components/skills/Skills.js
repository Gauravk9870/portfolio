"use client"
import styles from './skills.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

const data = [
    {
        id: 1,
        name: "javascript",
        icon: "/skills/js.svg"
    },
    {
        id: 2,
        name: "reactjs",
        icon: "/skills/react.svg"
    },
    {
        id: 3,
        name: "nextjs",
        icon: "/skills/next.svg"
    },
    {
        id: 4,
        name: "sass",
        icon: "/skills/sass.svg"
    },
    {
        id: 5,
        name: "tailwind",
        icon: "/skills/tailwind.svg"
    },
    {
        id: 6,
        name: "git",
        icon: "/skills/git.svg"
    },
    {
        id: 7,
        name: "node",
        icon: "/skills/node.svg"
    },
    {
        id: 8,
        name: "expressjs",
        icon: "/skills/express.svg"
    },
    {
        id: 9,
        name: "mongodb",
        icon: "/skills/mongodb.svg"
    },
    {
        id: 9,
        name: "firebase",
        icon: "/skills/firebase.svg"
    },
]

const Skills = () => {
    const [items, setItems] = useState([...data]); // Clone the items

    return (
        <div className={`${styles.skills} items-center justify-center border border-red-950`} id='skills' >
            <div className={styles.container}>

                <ul className={styles['skills-list']}>
                    {items.map((item, index) => (

                        <li>
                            <div className={styles['image-container']}>
                                <Image src={item.icon} fill className={styles.image} alt={item.name} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills