interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => (
  <main className='grid lg:grid-cols-2 grid-cols-1 h-[calc(100vh_-_60px)] px-4 lg:px-20 max-h-[calc(100vh_-_60px)]'>
    {children}
  </main>
)

export default MainLayout
