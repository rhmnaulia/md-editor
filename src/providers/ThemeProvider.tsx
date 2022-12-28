import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext<any>(null)

interface IThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('')

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider
