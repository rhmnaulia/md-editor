import { createContext, useContext, useState } from 'react'

const MarkdownContext = createContext<any>(null)

interface IMarkdownProviderProps {
  children: React.ReactNode
}

const MarkdownProvider = ({ children }: IMarkdownProviderProps) => {
  const [markdown, setMarkdown] = useState<string>('')

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  )
}

export const useMarkdown = () => useContext(MarkdownContext)

export default MarkdownProvider
