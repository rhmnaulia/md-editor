import { useState } from 'react'
import TitleBar from '../TitleBar/Index'
import { useMarkdown } from '../../providers/MarkdownProvider'
import { toast } from 'react-toastify'

const Editor = () => {
  const [markdown, setMarkdown] = useMarkdown()
  const [words, setWords] = useState<number>(0)
  const [chars, setChars] = useState<number>(0)

  const getWordsCount = (str: string) => {
    return str.match(/(\w+)/g)!.length
  }

  const getCharsCount = (str: string) => {
    return str.length
  }

  const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value

    setMarkdown(value)
    setWords(getWordsCount(value))
    setChars(getCharsCount(value))
  }

  const downloadFile = () => {
    const link = document.createElement('a')
    const file = new Blob([markdown], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = 'Untitled.md'
    link.click()
    URL.revokeObjectURL(link.href)
    toast.success('💾  File downloaded!')
  }

  const clearInput = () => {
    if (markdown.length > 0) {
      setMarkdown('')
      toast.success('🧹  Input cleared!')
    } else {
      toast.error('🤷‍♂️  Nothing to clear!')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
    if (markdown.length > 0) {
      toast.success('📝  Text copied!')
    } else {
      toast.error('🤷‍♂️  Nothing to copy!')
    }
  }

  return (
    <div className='flex flex-col h-[calc(100vh_-_120px)] relative'>
      <TitleBar title='Editor' aside={`${words} Words ${chars} Characters`} />
      <textarea
        className='w-full flex-grow text-gray-700 dark:text-gray-300 mb-5 border-none outline-none appearance-none bg-transparent resize-none'
        value={markdown}
        placeholder='type markdown text here...'
        onChange={updateMarkdown}
      />
      <div className='flex gap-3  '>
        <button
          className='rounded-xl shadow-md  bg-teal-500 text-white w-fit px-6 py-2'
          onClick={downloadFile}
        >
          Download File
        </button>
        <button
          className='rounded-xl shadow-md bg-[#D0679D] text-white w-fit px-6 py-2'
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <button
          className='rounded-xl shadow-md bg-[#89DDFF] text-gray-700 w-fit px-6 py-2'
          onClick={clearInput}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default Editor
