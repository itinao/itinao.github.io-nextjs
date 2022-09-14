import { useContext, useEffect } from "react"
import { ResumeContents, ResumeContentsContext } from '@/components/ResumeContentsProvider'

type ContentInfo = {
  content: string,
  offsetY: number,
}

export const useScrollEffect = () => {
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
}
