"use client"

import React from 'react'
import styles from "./Projects.module.scss"
import Image from 'next/image'
import { projects } from '@/app/utils/data'

const Projects = () => {
    const featuredProjects = projects.filter((project) => project.category === 'recent' || project.category === 'featured')
    return (
        <div className={styles['projects']}>
            <div className={styles.container}>
                <div className={styles['titles']}>
                    <h3>Some Things
                        I’ve Built</h3>
                    <h2>Projects</h2>
                </div>

                <div className={styles.content}>
                    {
                        featuredProjects.map((project) => (
                            <div className={styles.project} key={project.id}>
                                <div className={styles.top}>
                                    <div className={styles.left}>
                                        <span className={styles.category} >
                                            {project.category} Project
                                        </span>
                                        <h4>{project.name}</h4>
                                        <ul className={styles['technology']}>
                                            {project.techology.map((tech, index) => (
                                                <li key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                        <div className={styles.desc}>
                                            <span className={styles.role}>Role</span>
                                            <ul>
                                                {project.desc.map((desc, index) => (
                                                    <li key={index}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={styles.view}>
                                            {project.links.find(link => link.name === 'github') && (
                                                <a href={project.links.find(link => link.name === 'github').link} target="_blank" rel="noopener noreferrer">
                                                    <button>
                                                        Github
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                    </button>
                                                </a>
                                            )}
                                            {project.links.find(link => link.name === 'preview') && (
                                                <a href={project.links.find(link => link.name === 'preview').link} target="_blank" rel="noopener noreferrer">
                                                    <button>
                                                        Preview
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
                                                    </button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles[`image-container`]}>
                                            <Image src={project.laptopImg} fill="true" className={styles.image} alt={project.laptopImg} />

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.titles}>

                                        <h4><span>Crafting for</span> Mobile Excellence</h4>
                                    </div>
                                    {project.mobileImgs.map((img, index) => (
                                        <div className={styles.mobile} key={index}>
                                            <div className={styles[`image-container`]}>
                                                <Image src={img} fill="true" className={styles.image} alt={img} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    )
}

export default Projects