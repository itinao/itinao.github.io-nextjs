import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import styles from './styles.module.css'
import { ResumeContents, ResumeContentsContext } from '@/components/ResumeContentsProvider'
import { useContext, useEffect } from "react"

type ContentInfo = {
  content: string,
  offsetY: number,
}

const Resume = () => {
  const { setContents } = useContext(ResumeContentsContext)

  useEffect(() => {
    let contentInfoList: ContentInfo[] = []
    let currentElemOffsetY = 0
    Object.values(ResumeContents).forEach((content) => {
      const elem = document.getElementById(content)
      if (!elem) {
        return
      }

      contentInfoList.unshift({content, offsetY: elem.offsetTop - ((elem.offsetTop - currentElemOffsetY) / 2)})
      currentElemOffsetY = elem.offsetTop
    })

    const switchNav = () => {
      const length = contentInfoList.length
      for (let i = 0; i < length; i++) {
        const contentInfo = contentInfoList[i]
        if (contentInfo.offsetY < window.scrollY) {
          setContents(contentInfo.content)
          break
        }
      }
    }

    window.addEventListener('scroll', switchNav)
    return () => window.removeEventListener('scroll', switchNav)
  }, [setContents])

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

export default Resume
