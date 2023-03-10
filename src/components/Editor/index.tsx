import { useState } from 'react'
import { toast } from 'react-toastify'
import { useMarkdown } from '../../providers/MarkdownProvider'
import TitleBar from '../TitleBar/Index'

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
    link.download = 'README.md'
    link.click()
    URL.revokeObjectURL(link.href)
    toast.success('ð¾  File downloaded!')
  }

  const clearInput = () => {
    if (markdown.length > 0) {
      setMarkdown('')
      toast.success('ð§¹  Input cleared!')
    } else {
      toast.error('ð¤·ââï¸  Nothing to clear!')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
    if (markdown.length > 0) {
      toast.success('ð  Text copied!')
    } else {
      toast.error('ð¤·ââï¸  Nothing to copy!')
    }
  }

  return (
    <div className='flex flex-col h-[calc(100vh_-_120px)] relative'>
      <TitleBar title='Editor' aside={`${words} Wordsâ${chars} Characters`} />
      <textarea
        className='w-full flex-grow text-gray-700 dark:text-gray-300 mb-5 border-none outline-none appearance-none bg-transparent resize-none'
        value={markdown}
        placeholder='type markdown text here...'
        onChange={updateMarkdown}
      />
      <div className='flex gap-3 lg:static lg:m-0 lg:z-0 fixed left-0 bottom-0 ml-4 mb-4 z-10'>
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
