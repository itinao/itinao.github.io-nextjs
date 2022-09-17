import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import styles from './styles.module.css'
import { ResumeContents } from '@/components/ResumeContentsProvider'
import { useScrollEffect } from "./hooks"
import { memo } from "react"

const Resume = () => {
  useScrollEffect()

  return (
    <>
      <section id={ResumeContents.ABOUT} className={styles.resume_section}>
        <About />
      </section>
      <section id={ResumeContents.EXPERIENCE} className={styles.resume_section}>
        <Experience />
      </section>
      <section id={ResumeContents.SKILLS} className={styles.resume_section}>
        <Skills />
      </section>
    </>
  )
}

export default memo(Resume)
