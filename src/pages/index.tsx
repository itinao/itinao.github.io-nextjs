import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Resume from '@/components/Resume'
import { ResumeContentsProvider } from '@/components/ResumeContentsProvider'

const Home: NextPage = () => {
  return (
    <ResumeContentsProvider>
      <section>
        <Head>
          <title>itinao</title>
          <meta name="description" content="itinao" />
        </Head>

        <main>
          <Nav />
          <div className={styles.resume}>
            <Resume />
          </div>
        </main>
      </section>
    </ResumeContentsProvider>
  )
}

export default Home
