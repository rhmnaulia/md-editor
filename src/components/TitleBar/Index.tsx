interface ITitleBarProps {
  title: string
  aside?: string
}

const TitleBar = ({ title, aside }: ITitleBarProps) => (
  <div className='mb-4'>
    <div className='flex justify-between items-center'>
      {title && <h4 className='mb-2'>{title}</h4>}
      {aside && <h6>{aside}</h6>}
    </div>
    <hr />
  </div>
)

export default TitleBar
