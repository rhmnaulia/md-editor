import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import MarkdownProvider from './providers/MarkdownProvider'
import ThemeProvider from './providers/ThemeProvider'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <MarkdownProvider>
        <App />
      </MarkdownProvider>
    </ThemeProvider>
  </React.StrictMode>
)
