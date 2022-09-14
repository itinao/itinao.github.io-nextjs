import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styles from './styles.module.css'
import { ResumeContents, ResumeContentsContext } from '@/components/ResumeContentsProvider'

const Nav = () => {
  const { contents, setContents } = useContext(ResumeContentsContext)

  const scroll = (contents: string): void => {
    const contentsElem = document.getElementById(contents)
    if (!contentsElem) {
      return
    }

    window.scroll({
      top: contentsElem.offsetTop,
      behavior: 'smooth',
    })

    setContents(contents)
  }

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.sp_title}>RESUME ITINAO</h2>

      <div className={styles.navbar_img}>
        <Link href='/'>
          <a>
            <div className={styles.img_profile}>
              <Image width='160' height='160' alt='github icon' src='https://avatars3.githubusercontent.com/u/759472?s=320&v=4' />
            </div>
          </a>
        </Link>
      </div>

      <ul className={styles.navbar_link}>
        <li>
          <a
            className={contents === ResumeContents.ABOUT ? styles.active : ''}
            onClick={scroll.bind(this, ResumeContents.ABOUT)}>
            ABOUT
          </a>
        </li>
        <li>
          <a
            className={contents === ResumeContents.EXPERIENCE ? styles.active : ''}
            onClick={scroll.bind(this, ResumeContents.EXPERIENCE)}>
            EXPERIENCE
          </a>
        </li>
        <li>
          <a
            className={contents === ResumeContents.SKILLS ? styles.active : ''}
            onClick={scroll.bind(this, ResumeContents.SKILLS)}>
            SKILLS
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
