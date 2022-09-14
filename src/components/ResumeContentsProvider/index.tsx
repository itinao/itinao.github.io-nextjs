import { FC, ReactNode, createContext, useState } from 'react'

export const ResumeContents = {
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
}

type Props = {
  children: ReactNode;
}

type ContextType = {
  contents: string
  setContents: (value: string) => void
}

export const ResumeContentsContext = createContext<ContextType>({} as ContextType)

export const ResumeContentsProvider: FC<Props> = ({children}) => {
  const [contents, setContents] = useState(ResumeContents.ABOUT)

  return (
    <ResumeContentsContext.Provider value={{ contents, setContents }}>
      {children}
    </ResumeContentsContext.Provider>
  )
}
