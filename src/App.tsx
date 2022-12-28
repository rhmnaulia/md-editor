import { ToastContainer } from 'react-toastify'
import MainLayout from './components/MainLayout'
import Editor from './components/Editor'
import Preview from './components/Preview/Index'
import TopBar from './components/TopBar'
import { useTheme } from './providers/ThemeProvider'

const App = () => {
  const [theme] = useTheme()

  return (
    <>
      <TopBar />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      <MainLayout>
        <div className='flex-1 py-[1.875rem] lg:pr-6 pr-0'>
          <Editor />
        </div>
        <div className='flex-1 py-[1.875rem] lg:pl-6 pl-0'>
          <Preview />
        </div>
      </MainLayout>
    </>
  )
}

export default App
