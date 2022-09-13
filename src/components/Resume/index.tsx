import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import styles from './styles.module.css'

const Resume = () => {
  return (
    <>
      <section id="about" className={styles.resume_section}>
        <About />
      </section>
      <section id="experience" className={styles.resume_section}>
        <Experience />
      </section>
      <section id="skills" className={styles.resume_section}>
        <Skills />
      </section>
    </>
  )
}

export default Resume
