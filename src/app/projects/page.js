import React from 'react'
import Projects from '../components/projects/Projects'
import MiscProjects from '../components/miscProjects/MiscProjects'
import Navbar from '../components/navbar/Navbar'

const page = () => {
    return (
        <>
            <Navbar />
            <Projects />
            <MiscProjects />
        </>
    )
}

export default page