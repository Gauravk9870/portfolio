import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import MiscProjects from './components/miscProjects/MiscProjects'
import Navbar from './components/navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <MiscProjects />
    </main>
  )
}
