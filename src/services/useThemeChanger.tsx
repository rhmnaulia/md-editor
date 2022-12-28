import { useEffect } from 'react'

const useThemeChanger = (theme: string) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
}

export default useThemeChanger
