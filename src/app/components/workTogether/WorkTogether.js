import React from 'react'
import styles from './workTogether.module.scss'

const WorkTogether = () => {
    return (
        <div className={styles.WorkTogether}>
            <h4>Have a Project on Your Mind</h4>
            <h3>Let&apos;s work together</h3>
            <button>Contact Me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg></button>
        </div>
    )
}

export default WorkTogether