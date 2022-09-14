import styles from './styles.module.css'

const works = [
  {
    "position": "Software Engineer / FullStack Developer",
    "responsabilities": [
      "Responsible for web ecommerce developing and maintaining.",
      "Web Team leader, I take technical decisions about which technologies use in each project and how the team will works.",
      "Backend Developer: Ruby 2.x | Ruby on Rails 4.x, 5.x, 6.x | MSSQL 5.x | Docker.",
      "Frontend Developer: VueJs | jQuery | Javascript."
    ],
    "startEndDate": "January 2019 - Present"
  },
  {
    "position": "Software Engineer / FullStack Developer / Unity Developer",
    "responsabilities": [
      "Responsible for mobile phone game developing and maintaining.",
      "Backend Developer: PHP 5.x | Python 3.x | MSSQL 5.x.",
      "Frontend Developer: Knockout.js | Javascript.",
      "Unity Developer: Unity 5.x | C#."
    ],
    "startEndDate": "August 2012 - December 2019"
  },
  {
    "position": "Software Engineer / FullStack Developer",
    "responsabilities": [
      "Responsible for developing and maintaining.",
      "Backend Developer: PHP 5.x | Perl | MSSQL 5.x. | VMWare",
      "Frontend Developer: jQuery | Javascript."
    ],
    "startEndDate": "April 2008 - July 2012"
  }
]

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2>WORK EXPECIENCE <i className="devicon-gradle-plain" /></h2>

      {works.map((work, i) => {
        return (
          <div className={styles.exp_list} key={`exp_list_${i}`}>
            <div className={styles.work_list}>
              <h3>{work.position}</h3>
              {work.responsabilities.map((resp, i) => {
                return (<p key={`resp_${i}`}> - {resp}</p>)
              })}
            </div>
            <div className={styles.resume_date}>
              <span>{ work.startEndDate }</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
