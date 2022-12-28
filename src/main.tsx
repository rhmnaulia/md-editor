import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import MarkdownProvider from './providers/MarkdownProvider'
import ThemeProvider from './providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <MarkdownProvider>
        <App />
      </MarkdownProvider>
    </ThemeProvider>
  </React.StrictMode>
)
