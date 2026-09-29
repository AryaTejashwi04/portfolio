import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { content } from './data/content'
export default function App() {
  return (
    <>
      <Navbar name={content.name} />
      <Hero content={content} />
      <About text={content.about} />
      <Experience items={content.experience} />
      <Projects items={content.projects} />
      <Skills groups={content.skills} />
      <Achievements items={content.achievements} />
      <Contact email={content.email} profiles={content.profiles} />
      <Footer name={content.name} />
    </>
  )
}
