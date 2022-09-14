import Link from 'next/link'
import Typed from 'react-typed'
import styles from './styles.module.css'

const roles = [
  'Software Enginneer',
  'Full Stack Developer',
  'Code Enthusiast!',
]

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.name}>ITI<span>NAO</span></h1>

      <h3 className={styles.typing}>
        <Typed
          strings={roles}
          typeSpeed={50}
          backSpeed={20}
          loop
        />
      </h3>

      <div className={styles.subheading}>
        <div>TOKYO, JAPAN</div>
        <a href="mailto:itinao@gmail.com">itinao@gmail.com</a>
      </div>

      <p className={styles.desc}>Passionate web developer, making useful application using the latest technologies!</p>

      <ul className={styles.icons}>
        <li>
          <Link href='https://github.com/itinao'>
            <a>
              <i className="devicon-github-original"></i>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default About
