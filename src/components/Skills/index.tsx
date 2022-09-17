import { memo } from 'react'
import styles from './styles.module.css'

const devIcons = [
  "devicon-csharp-plain",
  "devicon-javascript-plain",
  "devicon-html5-plain-wordmark",
  "devicon-css3-plain-wordmark",
  "devicon-git-plain",
  "devicon-ruby-plain",
  "devicon-nodejs-plain",
  "devicon-bootstrap-plain",
  "devicon-github-original",
  "devicon-bitbucket-original-wordmark",
  "devicon-dot-net-original-wordmark",
  "devicon-jquery-plain-wordmark",
  "devicon-linux-plain",
  "devicon-visualstudio-plain",
  "devicon-vuejs-plain"
]

const workflowList = [
  "Cross Browser Testing & Debugging",
  "REST API building",
  "Agile Development & Scrum",
  "Team working"
]

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2>SKILLS <i className="devicon-argocd-plain" /></h2>

      <div className={styles.subheading}>
        Programming Languages &amp; Tools
      </div>

      <ul className={styles.list_icons}>
        {devIcons.map((icon, i) => {
          return (
            <li key={`icons_${i}`}><i className={icon} /></li>
          )
        })}
      </ul>

      <div className={styles.subheading}>
        Workflow
      </div>

      <ul className={styles.list_workflow}>
        {workflowList.map((w, i) => {
          return (
            <li key={`words_${i}`}>- {w}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default memo(Skills)
