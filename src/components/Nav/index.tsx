import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styles from './styles.module.css'
import { ResumeContentsContext } from '@/libs/ResumeContentsContext'

const Nav = () => {
  return (
    <nav className={styles.navbar}>
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
          <Link href='./'><a>ABOUT</a></Link>
        </li>
        <li>
          <Link href='./'><a>EXPERIENCE</a></Link>
        </li>
        <li>
          <Link href='./'><a>SKILLS</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
