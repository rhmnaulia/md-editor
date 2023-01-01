import MarkdownPreview from '@uiw/react-markdown-preview'
import { useMarkdown } from '../../providers/MarkdownProvider'
import TitleBar from '../TitleBar/Index'

const Preview = () => {
  const [markdown] = useMarkdown()

  return (
    <div className='flex flex-col h-[calc(100vh_-_180px)] relative'>
      <TitleBar title='Preview' />
      <div className='overflow-auto flex-grow'>
        <MarkdownPreview
          source={markdown}
          className='bg-transparent text-gray-900 dark:text-gray-300'
        />
      </div>
    </div>
  )
}

export default Preview
