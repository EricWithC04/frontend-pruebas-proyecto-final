import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import exampleMarkDown from '../../data/exampleMarkDown'
import './MarkDownTest.css'

const MarkDownTest = () => {
    return (
        <div className='container-markdown w-100 justified-text'>
            <ReactMarkdown 
                className="w-60" 
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ href, ...props }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" {...props}></a>
                    )
                }}
            >
                {exampleMarkDown}
            </ReactMarkdown>
        </div>
    )
}

export default MarkDownTest